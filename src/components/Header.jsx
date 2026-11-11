import { useEffect, useRef } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { LANGS, alternatesFor, pathFor } from "../lib/routes.js";
import { LANG_NAMES } from "../content/i18n/index.js";

const sectionHref = (route, id) => (route.page === "home" ? `#${id}` : `${pathFor(route.lang)}#${id}`);

function LanguageLinks({ route, t, className = "", onNavigate }) {
  const alternates = route.page === "notFound" ? LANGS.map((lang) => ({ lang, path: pathFor(lang) })) : alternatesFor(route);
  return (
    <ul className={`inline-flex items-center rounded-full border border-line bg-ink-2 p-0.5 ${className}`} aria-label={t.nav.language}>
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
              className={`inline-flex min-h-7 min-w-8 items-center justify-center rounded-full px-2.5 font-mono text-xs uppercase tracking-wider transition-all ${
                active ? "bg-fg font-semibold text-white shadow-xs" : "text-muted hover:text-fg"
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
    { id: "about", label: t.nav.about },
    { id: "skills", label: t.nav.skills },
    { id: "experience", label: t.nav.experience },
    { id: "projects", label: t.nav.projects },
    { id: "contact", label: t.nav.contact },
  ];
  const close = () => dialogRef.current?.close();

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 48rem)");
    const onChange = (e) => {
      if (e.matches) dialogRef.current?.close();
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/88 backdrop-blur-xl">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <a href={pathFor(route.lang)} className="group flex items-center gap-3 text-[0.95rem] font-semibold tracking-tight text-fg">
          <span
            aria-hidden="true"
            className="flex h-7 w-7 items-center justify-center rounded-lg bg-fg font-mono text-xs font-bold text-white transition-transform duration-300 group-hover:bg-accent group-hover:-rotate-6"
          >
            MK
          </span>
          <span>Matti Koenis</span>
        </a>

        <nav aria-label={t.nav.primary} className="hidden items-center gap-7 md:flex">
          <ul className="flex items-center gap-6 text-sm font-medium text-muted">
            {items.map((item) => (
              <li key={item.id}>
                <a href={sectionHref(route, item.id)} className="link-underline py-1 transition-colors hover:text-fg">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="h-4 w-px bg-line" aria-hidden="true" />
          <LanguageLinks route={route} t={t} />
        </nav>

        <button
          type="button"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-fg transition hover:bg-ink-2 md:hidden"
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
          <span className="flex items-center gap-2.5 font-semibold tracking-tight text-fg">
            <span aria-hidden="true" className="flex h-6 w-6 items-center justify-center rounded-md bg-accent font-mono text-[0.7rem] font-bold text-white">
              MK
            </span>
            {t.nav.menu}
          </span>
          <button
            type="button"
            onClick={close}
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-ink-2 text-fg"
          >
            <X aria-hidden="true" className="h-5 w-5" />
            <span className="sr-only">{t.nav.closeMenu}</span>
          </button>
        </div>
        <nav aria-label={t.nav.primary} className="container-x py-8">
          <ol className="divide-y divide-line border-y border-line">
            {items.map((item, i) => (
              <li key={item.id}>
                <a
                  href={sectionHref(route, item.id)}
                  onClick={close}
                  className="group flex items-center justify-between py-4 text-2xl font-semibold tracking-tight text-fg"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="label text-accent">0{i + 1}</span>
                    {item.label}
                  </span>
                  <ArrowUpRight aria-hidden="true" className="h-5 w-5 text-subtle transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                </a>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex items-center justify-between rounded-2xl border border-line bg-ink-2 p-4">
            <span className="label">{t.nav.language}</span>
            <LanguageLinks route={route} t={t} onNavigate={close} />
          </div>
        </nav>
      </dialog>
    </header>
  );
}
