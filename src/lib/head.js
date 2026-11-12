import { getDictionary } from "../content/i18n/all.js";
import { CONTACT, getProject } from "../content/projects.js";
import { DEFAULT_LANG, SITE_URL, alternatesFor, pathFor } from "./routes.js";

const CSP = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self' https://api.emailjs.com",
  "frame-src 'none'",
  "worker-src 'none'",
  "manifest-src 'self'",
  "form-action 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const esc = (value) =>
  String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const jsonLd = (data) => `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, "\\u003c")}</script>`;

function person(t) {
  return {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Matti Koenis",
    url: `${SITE_URL}/`,
    jobTitle: t.meta.jobTitle,
    worksFor: { "@type": "Organization", name: "Swisscom" },
    address: { "@type": "PostalAddress", addressLocality: "Zürich", addressCountry: "CH" },
    email: `mailto:${CONTACT.email}`,
    knowsLanguage: ["de", "nl", "sv", "en"],
    sameAs: [CONTACT.linkedin, CONTACT.github],
  };
}

export function buildHead(route) {
  const t = getDictionary(route.lang);
  const url = `${SITE_URL}${route.path}`;
  let title = t.meta.homeTitle;
  let description = t.meta.homeDescription;
  let image = `${SITE_URL}/og/og-${route.lang}.png`;
  let imageAlt = t.meta.homeTitle;
  let type = "website";
  let structured = [];

  if (route.page === "project") {
    const project = getProject(route.slug);
    const text = t.projectTexts[route.slug];
    title = t.meta.projectTitle(project.name);
    description = `${text.tagline} ${text.summary}`;
    image = `${SITE_URL}/og/og-${route.slug}.png`;
    imageAlt = `${project.name} – ${text.tagline}`;
    type = "article";
    structured = [
      {
        "@context": "https://schema.org",
        "@type": "SoftwareSourceCode",
        name: project.name,
        description: text.tagline,
        url,
        codeRepository: project.repo,
        ...(project.live ? { sameAs: project.live } : {}),
        keywords: project.stack.join(", "),
        author: { "@id": `${SITE_URL}/#person` },
        inLanguage: route.lang,
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Matti Koenis", item: `${SITE_URL}${pathFor(route.lang)}` },
          { "@type": "ListItem", position: 2, name: project.name, item: url },
        ],
      },
    ];
  } else if (route.page === "privacy") {
    title = t.meta.privacyTitle;
    description = t.meta.privacyDescription;
  } else if (route.page === "notFound") {
    title = t.meta.notFoundTitle;
  } else {
    structured = [
      {
        "@context": "https://schema.org",
        "@graph": [
          person(t),
          {
            "@type": "WebSite",
            "@id": `${SITE_URL}/#website`,
            url: `${SITE_URL}/`,
            name: "Matti Koenis",
            inLanguage: ["de", "en", "nl", "sv"],
            publisher: { "@id": `${SITE_URL}/#person` },
          },
        ],
      },
    ];
  }

  const tags = [
    `<meta http-equiv="Content-Security-Policy" content="${CSP}" />`,
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description)}" />`,
  ];

  // Bilder sollen nicht in Bildersuchen oder als Vorschau in Suchergebnissen erscheinen
  const IMAGE_RULES = "noimageindex, max-image-preview:none";

  if (route.page === "notFound") {
    tags.push(`<meta name="robots" content="noindex, ${IMAGE_RULES}" />`);
  } else {
    tags.push(`<meta name="robots" content="${IMAGE_RULES}" />`);
    tags.push(`<link rel="canonical" href="${esc(url)}" />`);
    for (const alt of alternatesFor(route)) {
      tags.push(`<link rel="alternate" hreflang="${esc(alt.lang)}" href="${esc(SITE_URL + alt.path)}" />`);
    }
    const xDefault = alternatesFor(route).find((a) => a.lang === DEFAULT_LANG);
    tags.push(`<link rel="alternate" hreflang="x-default" href="${esc(SITE_URL + xDefault.path)}" />`);
  }

  tags.push(
    `<meta property="og:type" content="${esc(type)}" />`,
    `<meta property="og:site_name" content="Matti Koenis" />`,
    `<meta property="og:locale" content="${esc(t.locale)}" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(description)}" />`,
    `<meta property="og:url" content="${esc(url)}" />`,
    `<meta property="og:image" content="${esc(image)}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${esc(imageAlt)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    ...structured.map(jsonLd)
  );

  return tags.join("\n    ");
}
