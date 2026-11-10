// Rendert jede Route statisch vor und erzeugt sitemap.xml sowie 404.html.
// Ablauf: `vite build` (Client) → `vite build --ssr` (Server-Bundle) → dieses Skript.
import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const dist = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

const template = await fs.readFile(path.join(dist, "index.html"), "utf8");
const manifest = JSON.parse(await fs.readFile(path.join(dist, ".vite", "manifest.json"), "utf8"));
const { render, routes, notFoundRoute, SITE_URL, alternatesFor } = await import(
  pathToFileURL(path.join(ssrDir, "entry-server.js")).href
);

// Die Sprachdatei der Seite vorladen, damit die Hydration nicht auf einen zweiten Request wartet
const dictionaryPreload = (lang) => {
  const chunk = manifest[`src/content/i18n/${lang}.js`];
  return chunk ? `<link rel="modulepreload" crossorigin href="/${chunk.file}" />` : "";
};

const fill = (route) => {
  const { html, head } = render(route);
  return template
    .replace('<html lang="de">', `<html lang="${route.lang}">`)
    .replace("<!--app-head-->", `${head}\n    ${dictionaryPreload(route.lang)}`)
    .replace('<div id="root">', `<div id="root" data-page="${route.page}">`)
    .replace("<!--app-html-->", html);
};

for (const route of routes) {
  const file = path.join(dist, route.path, "index.html");
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, fill(route));
}
await fs.writeFile(path.join(dist, "404.html"), fill(notFoundRoute));

const today = new Date().toISOString().slice(0, 10);
const urls = routes
  .filter((r) => r.page !== "privacy")
  .map((route) => {
    const links = [...alternatesFor(route), { lang: "x-default", path: alternatesFor(route)[0].path }]
      .map((alt) => `    <xhtml:link rel="alternate" hreflang="${alt.lang}" href="${SITE_URL}${alt.path}"/>`)
      .join("\n");
    return `  <url>\n    <loc>${SITE_URL}${route.path}</loc>\n    <lastmod>${today}</lastmod>\n${links}\n  </url>`;
  })
  .join("\n");

await fs.writeFile(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`
);

await fs.rm(ssrDir, { recursive: true, force: true });
await fs.rm(path.join(dist, ".vite"), { recursive: true, force: true });
console.log(`Prerendered ${routes.length} pages + 404.html and sitemap.xml`);
