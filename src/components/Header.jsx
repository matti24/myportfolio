import { useEffect, useRef, useState } from "react";
import { alternatesFor, pathFor } from "../lib/routes.js";
import { LANG_NAMES } from "../content/i18n/index.js";
import { JOB_TITLES } from "../content/profile.js";

const ORDER = ["de", "nl", "sv", "en"];
const SECTIONS = ["about", "path", "skills", "projects", "contact"];

const sectionHref = (route, id) => (route.page === "home" ? `#${id}` : `${pathFor(route.lang)}#${id}`);

function languagePaths(route) {
  const list = route.page === "notFound" ? ORDER.map((lang) => ({ lang, path: pathFor(lang) })) : alternatesFor(route);
  return ORDER.map((lang) => list.find((l) => l.lang === lang));
}

function LanguageLinks({ route, t }) {
  return (
    <ul className="flex items-center gap-3 t-s" aria-label={t.nav.language}>
      {languagePaths(route).map(({ lang, path }) => {
        const active = lang === route.lang;
        return (
          <li key={lang}>
            <a
              href={path}
              hrefLang={lang}
              lang={lang}
              aria-current={active ? "true" : undefined}
              className={`inline-flex min-h-8 items-center uppercase transition-colors ${
                active ? "text-ink underline decoration-blue decoration-2 underline-offset-[6px]" : "text-grey hover:text-ink"
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
  const [active, setActive] = useState(null);
  const items = SECTIONS.map((id) => ({ id, label: t.home.nav[id] }));
  const close = () => dialogRef.current?.close();
  const isHome = route.page === "home";

  // Abschnitt in der Bildschirmmitte als aktiv markieren
  useEffect(() => {
    if (!isHome) return undefined;
    const els = SECTIONS.map((id) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-48% 0px -48% 0px" }
    );
    els.forEach((el) => io.observe(el));
    const onTop = () => window.scrollY < 300 && setActive(null);
    window.addEventListener("scroll", onTop, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onTop);
    };
  }, [isHome]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 48rem)");
    const onChange = (e) => e.matches && dialogRef.current?.close();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="site-header sticky top-0 z-40 bg-paper/95 backdrop-blur-md">
      <div className="wrap flex h-16 items-center justify-between gap-6">
        <a href={pathFor(route.lang)} className={`text-[1.0625rem] font-semibold tracking-[-0.015em] ${isHome ? "home-mark" : ""}`}>
          Matti Koenis
        </a>

        <div className="hidden items-center gap-10 md:flex">
          <nav aria-label={t.nav.primary}>
            <ul className="flex items-center gap-7">
              {items.map((item) => (
                <li key={item.id}>
                  <a href={sectionHref(route, item.id)} className="nav-link" aria-current={active === item.id ? "true" : undefined}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <LanguageLinks route={route} t={t} />
        </div>

        <button
          type="button"
          className="-mr-2 inline-flex min-h-11 items-center px-2 font-medium md:hidden"
          aria-haspopup="dialog"
          onClick={() => dialogRef.current?.showModal()}
        >
          {t.nav.menu}
        </button>
      </div>

      <dialog
        ref={dialogRef}
        className="menu-sheet"
        aria-label={t.nav.menu}
        onClick={(e) => e.target === e.currentTarget && close()}
      >
        <div className="wrap flex h-16 items-center justify-between">
          <span className="text-[1.0625rem] font-semibold tracking-[-0.015em]">Matti Koenis</span>
          <button type="button" onClick={close} className="-mr-2 inline-flex min-h-11 items-center px-2 font-medium">
            {t.nav.closeMenu}
          </button>
        </div>
        <nav aria-label={t.nav.primary} className="wrap pt-8">
          <ul>
            {items.map((item, i) => (
              <li key={item.id} className="menu-item border-b border-rule" style={{ "--i": i }}>
                <a href={sectionHref(route, item.id)} onClick={close} className="block py-3 t-xl">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="wrap mt-10">
          <p className="t-s text-grey">{t.nav.language}</p>
          <ul className="mt-2">
            {languagePaths(route).map(({ lang, path }, i) => {
              const job = JOB_TITLES.find((j) => j.lang === lang);
              const active = lang === route.lang;
              return (
                <li key={lang} className="menu-item" style={{ "--i": i + items.length }}>
                  <a
                    href={path}
                    hrefLang={lang}
                    lang={lang}
                    aria-current={active ? "true" : undefined}
                    className={`flex min-h-11 items-baseline gap-4 ${active ? "text-ink" : "text-grey"}`}
                  >
                    <span className="w-6 t-s uppercase">{lang}</span>
                    <span className="t-m">{job.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </dialog>
    </header>
  );
}
