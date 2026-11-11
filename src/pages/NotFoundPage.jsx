import { pathFor } from "../lib/routes.js";

const DE = {
  title: "Diese Seite gibt es nicht.",
  text: "Vielleicht hat sich die Adresse geändert.",
  back: "Zur deutschen Startseite",
};

// Bewusst zweisprachig: GitHub Pages liefert für jede unbekannte Adresse dieselbe 404.html aus.
export function NotFoundPage({ t }) {
  return (
    <section className="wrap grid min-h-[70svh] content-center gap-y-6 py-24 lg:grid-cols-12 lg:gap-x-6">
      <p className="t-s text-grey lg:col-span-3 lg:pt-3">404</p>
      <div className="lg:col-span-9">
        <h1 className="t-xl max-w-[16ch]">{t.notFound.title}</h1>
        <p className="t-l mt-6 max-w-[34ch] text-grey">{t.notFound.text}</p>
        <p lang="de" className="mt-4 text-grey">
          {DE.title} {DE.text}
        </p>
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 font-medium">
          <a href={pathFor("en")} className="ulink">
            {t.notFound.back}
          </a>
          <a href={pathFor("de")} hrefLang="de" lang="de" className="ulink text-grey hover:text-ink">
            {DE.back}
          </a>
        </div>
      </div>
    </section>
  );
}
