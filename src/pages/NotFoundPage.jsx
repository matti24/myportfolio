import { pathFor } from "../lib/routes.js";

const EN = {
  title: "This page doesn’t exist.",
  text: "The address may have changed. You will find all projects on the home page.",
  back: "Go to home page",
};

// Bewusst zweisprachig: GitHub Pages liefert für jede unbekannte Adresse dieselbe 404.html aus.
export function NotFoundPage({ t }) {
  return (
    <section className="container-x flex min-h-[70svh] flex-col justify-center py-24">
      <p className="label">
        <span className="text-accent">404</span>
      </p>
      <h1 className="display mt-6 max-w-[14ch]">{t.notFound.title}</h1>
      <p className="lead mt-6 max-w-[48ch]">{t.notFound.text}</p>
      <p lang="en" className="mt-4 max-w-[48ch] text-muted">
        {EN.title} {EN.text}
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <a href={pathFor("de")} className="btn btn-primary">
          {t.notFound.back}
        </a>
        <a href={pathFor("en")} hrefLang="en" lang="en" className="btn btn-ghost">
          {EN.back}
        </a>
      </div>
    </section>
  );
}