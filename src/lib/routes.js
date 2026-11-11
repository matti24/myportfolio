export const SITE_URL = "https://www.mattikoenis.ch";
export const LANGS = ["en", "de", "nl", "sv"];
export const DEFAULT_LANG = "en";

const SEGMENTS = {
  project: { de: "projekte", en: "projects", nl: "projecten", sv: "projekt" },
  privacy: { de: "datenschutz", en: "privacy", nl: "privacy", sv: "integritet" },
};

const prefix = (lang) => (lang === DEFAULT_LANG ? "" : `/${lang}`);

export function pathFor(lang, page = "home", slug) {
  if (page === "project") return `${prefix(lang)}/${SEGMENTS.project[lang]}/${slug}/`;
  if (page === "privacy") return `${prefix(lang)}/${SEGMENTS.privacy[lang]}/`;
  return `${prefix(lang)}/`;
}

export function allRoutes(projectSlugs) {
  const routes = [];
  for (const lang of LANGS) {
    routes.push({ lang, page: "home", path: pathFor(lang, "home") });
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
  return LANGS.map((lang) => ({ lang, path: pathFor(lang, route.page, route.slug) }));
}
