export const SITE_URL = "https://www.mattikoenis.ch";
export const LANGS = ["de", "en", "nl", "sv"];
export const DEFAULT_LANG = "de";

const SEGMENTS = {
  project: { de: "projekte", en: "projects", nl: "projecten", sv: "projekt" },
  privacy: { de: "datenschutz", en: "privacy", nl: "privacy", sv: "integritet" },
};

const prefix = (lang) => (lang === DEFAULT_LANG ? "" : `/${lang}`);

export function pathFor(lang, page = "home", slug) {
  if (page === "concept") return slug === "1" ? "/" : `/entwurf-${slug}/`;
  if (page === "project") return `${prefix(lang)}/${SEGMENTS.project[lang]}/${slug}/`;
  if (page === "privacy") return `${prefix(lang)}/${SEGMENTS.privacy[lang]}/`;
  return `${prefix(lang)}/`;
}

export function allRoutes(projectSlugs) {
  const routes = [
    { lang: DEFAULT_LANG, page: "concept", slug: "1", path: "/" },
    { lang: DEFAULT_LANG, page: "concept", slug: "1", path: "/entwurf-1/" },
    { lang: DEFAULT_LANG, page: "concept", slug: "2", path: "/entwurf-2/" },
    { lang: DEFAULT_LANG, page: "concept", slug: "3", path: "/entwurf-3/" },
  ];
  for (const lang of LANGS) {
    if (lang !== DEFAULT_LANG) {
      routes.push({ lang, page: "home", path: pathFor(lang, "home") });
    }
    for (const slug of projectSlugs) {
      routes.push({ lang, page: "project", slug, path: pathFor(lang, "project", slug) });
    }
    routes.push({ lang, page: "privacy", path: pathFor(lang, "privacy") });
  }
  return routes;
}

export function normalizePath(pathname) {
  let p = decodeURI(pathname || "/").replace(/index\.html$/, "");
  if (!p.endsWith("/")) p += "/";
  return p;
}

export function resolveRoute(pathname, projectSlugs) {
  const path = normalizePath(pathname);
  const match = allRoutes(projectSlugs).find((r) => r.path === path);
  if (match) return match;
  // Die 404-Seite wird einmalig vorgerendert und ist daher immer in der Standardsprache
  return { lang: DEFAULT_LANG, page: "notFound", path };
}

export function alternatesFor(route) {
  if (route.page === "concept") {
    return [{ lang: DEFAULT_LANG, path: route.path }];
  }
  return LANGS.map((lang) => ({ lang, path: pathFor(lang, route.page, route.slug) }));
}
