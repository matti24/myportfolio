import { ArrowUp, ArrowUpRight, Mail } from "lucide-react";
import { CONTACT } from "../content/projects.js";
import { pathFor } from "../lib/routes.js";

export function Footer({ t, route }) {
  const year = typeof __BUILD_YEAR__ !== "undefined" ? __BUILD_YEAR__ : 2026;
  const links = [
    { href: `mailto:${CONTACT.email}`, label: CONTACT.email },
    { href: CONTACT.linkedin, label: "LinkedIn", external: true },
    { href: CONTACT.github, label: "GitHub", external: true },
    { href: CONTACT.sourceRepo, label: t.footer.source, external: true },
  ];

  return (
    <footer className="border-t border-line bg-ink-2">
      <div className="container-x pt-16 pb-12 sm:pt-20">
        <div className="flex flex-col justify-between gap-8 pb-12 lg:flex-row lg:items-end">
          <div>
            <p className="label text-accent">Matti Koenis</p>
            <p className="mt-3 text-2xl font-semibold tracking-tight text-fg sm:text-3xl">{t.footer.ctaTitle}</p>
            <p className="mt-2 max-w-[48ch] text-muted">{t.footer.ctaText}</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a href={`mailto:${CONTACT.email}`} className="btn btn-primary">
              <Mail aria-hidden="true" className="h-4 w-4" />
              {CONTACT.email}
            </a>
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              LinkedIn
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>

        <p
          aria-hidden="true"
          data-wordmark="Matti Koenis"
          className="wordmark select-none border-t border-line pt-8 text-[clamp(3.2rem,13.5vw,12rem)] font-semibold leading-[0.86] tracking-[-0.06em] text-line/90"
        />

        <div className="mt-8 grid gap-8 border-t border-line pt-8 text-sm text-muted md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-semibold text-fg">Matti Koenis</p>
            <p className="mt-1">{t.footer.role}</p>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 md:col-span-4 md:items-center">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="link-underline inline-flex items-center gap-1 font-medium text-fg/85 hover:text-accent"
                >
                  {link.label}
                  {link.external ? <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" /> : null}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-6 md:col-span-3 md:justify-end">
            <a href={pathFor(route.lang, "privacy")} className="link-underline hover:text-fg">
              {t.footer.privacy}
            </a>
            <a href="#top" className="link-underline inline-flex items-center gap-1 font-medium text-fg hover:text-accent">
              {t.footer.top}
              <ArrowUp aria-hidden="true" className="h-3.5 w-3.5" />
            </a>
            <p className="label">© {year}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
