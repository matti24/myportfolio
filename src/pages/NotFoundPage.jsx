import { pathFor } from "../lib/routes.js";

const EN = {
  title: "This page doesn’t exist.",
  text: "The address may have changed.",
  back: "Go to home page",
};

// Bewusst zweisprachig: GitHub Pages liefert für jede unbekannte Adresse dieselbe 404.html aus.
export function NotFoundPage({ t }) {
  return (
    <section className="wrap grid min-h-[70svh] content-center gap-y-6 py-24 lg:grid-cols-12 lg:gap-x-6">
      <p className="t-s text-grey lg:col-span-3 lg:pt-3">404</p>
      <div className="lg:col-span-9">
        <h1 className="t-xl max-w-[16ch]">{t.notFound.title}</h1>
        <p className="t-l mt-6 max-w-[34ch] text-grey">{t.notFound.text}</p>
        <p lang="en" className="mt-4 text-grey">
          {EN.title} {EN.text}
        </p>
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 font-medium">
          <a href={pathFor("de")} className="ulink">
            {t.notFound.back}
          </a>
          <a href={pathFor("en")} hrefLang="en" lang="en" className="ulink text-grey hover:text-ink">
            {EN.back}
          </a>
        </div>
      </div>
    </section>
  );
}
