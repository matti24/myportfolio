import { useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { LANGS, alternatesFor, pathFor } from "../lib/routes.js";
import { LANG_NAMES } from "../content/i18n/index.js";

const sectionHref = (route, id) => (route.page === "home" ? `#${id}` : `${pathFor(route.lang)}#${id}`);

function LanguageLinks({ route, t, className = "", onNavigate }) {
  const alternates = route.page === "notFound" ? LANGS.map((lang) => ({ lang, path: pathFor(lang) })) : alternatesFor(route);
  return (
    <ul className={`flex items-center gap-1 ${className}`} aria-label={t.nav.language}>
      {alternates.map(({ lang, path }) => {
        const active = lang === route.lang;
        return (
          <li key={lang}>
            <a
              href={path}
              hrefLang={lang}
              lang={lang}
              aria-current={active ? "true" : undefined}
              title={LANG_NAMES[lang]}
              onClick={onNavigate}
              className={`inline-flex min-h-8 min-w-8 items-center justify-center rounded-full px-2 font-mono text-xs uppercase tracking-wider transition-colors ${
                active ? "bg-platinum text-ink" : "text-muted hover:text-fg"
              }`}
            >
              <span className="sr-only">{LANG_NAMES[lang]}</span>
              <span aria-hidden="true">{lang}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export function Header({ t, route }) {
  const dialogRef = useRef(null);
  const items = [
    { id: "projects", label: t.nav.projects },
    { id: "experience", label: t.nav.experience },
    { id: "about", label: t.nav.about },
    { id: "contact", label: t.nav.contact },
  ];
  const close = () => dialogRef.current?.close();

  // Wird das Fenster breiter (z. B. Tablet drehen), das mobile Menü schliessen, sonst bleibt die Seite gesperrt
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 48rem)");
    const onChange = (e) => {
      if (e.matches) dialogRef.current?.close();
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/90 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between gap-6">
        <a href={pathFor(route.lang)} className="group flex items-center gap-2.5 text-[0.95rem] font-medium tracking-tight">
          <span aria-hidden="true" className="h-2.5 w-2.5 bg-accent transition-transform duration-500 group-hover:rotate-90" />
          Matti Koenis
        </a>

        <nav aria-label={t.nav.primary} className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7 text-sm text-muted">
            {items.map((item) => (
              <li key={item.id}>
                <a href={sectionHref(route, item.id)} className="link-underline py-1 transition-colors hover:text-fg">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <LanguageLinks route={route} t={t} />
        </nav>

        <button
          type="button"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-fg md:hidden"
          aria-haspopup="dialog"
          onClick={() => dialogRef.current?.showModal()}
        >
          <Menu aria-hidden="true" className="h-5 w-5" />
          <span className="sr-only">{t.nav.openMenu}</span>
        </button>
      </div>

      <dialog
        ref={dialogRef}
        className="menu-sheet"
        aria-label={t.nav.menu}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            e.preventDefault();
            close();
          }
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        <div className="container-x flex h-16 items-center justify-between border-b border-line">
          <span className="label">{t.nav.menu}</span>
          <button type="button" onClick={close} className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full">
            <X aria-hidden="true" className="h-5 w-5" />
            <span className="sr-only">{t.nav.closeMenu}</span>
          </button>
        </div>
        <nav aria-label={t.nav.primary} className="container-x py-8">
          <ol className="divide-y divide-line border-y border-line">
            {items.map((item, i) => (
              <li key={item.id}>
                <a href={sectionHref(route, item.id)} onClick={close} className="flex items-baseline gap-5 py-5 text-3xl font-medium tracking-tight">
                  <span className="label text-accent">0{i + 1}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex items-center justify-between">
            <span className="label">{t.nav.language}</span>
            <LanguageLinks route={route} t={t} onNavigate={close} />
          </div>
        </nav>
      </dialog>
    </header>
  );
}
