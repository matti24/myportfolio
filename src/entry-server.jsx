import { renderToString } from "react-dom/server";
import App from "./App.jsx";
import { buildHead } from "./lib/head.js";
import { allRoutes } from "./lib/routes.js";
import { projectSlugs } from "./content/projects.js";
import { getDictionary } from "./content/i18n/all.js";

export { SITE_URL, alternatesFor } from "./lib/routes.js";

export const routes = allRoutes(projectSlugs);
export const notFoundRoute = { lang: "de", page: "notFound", path: "/404/" };

export function render(route) {
  const t = getDictionary(route.lang);
  return { html: renderToString(<App route={route} t={t} />), head: buildHead(route) };
}