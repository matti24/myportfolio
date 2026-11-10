import { ArrowUp, ArrowUpRight } from "lucide-react";
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
    <footer className="border-t border-line">
      <div className="container-x pt-16 pb-10 sm:pt-24">
        <p aria-hidden="true" data-wordmark="Matti Koenis" className="wordmark select-none text-[clamp(3.5rem,14vw,13rem)] font-medium leading-[0.85] tracking-[-0.06em] text-ink-3" />
        <div className="mt-10 grid gap-10 border-t border-line pt-8 text-sm text-muted md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-fg">Matti Koenis</p>
            <p>{t.footer.role}</p>
          </div>
          <ul className="flex flex-col gap-2 md:col-span-5">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="link-underline inline-flex items-center gap-1 hover:text-fg"
                >
                  {link.label}
                  {link.external ? <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" /> : null}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2 md:col-span-3 md:items-end">
            <a href={pathFor(route.lang, "privacy")} className="link-underline hover:text-fg">
              {t.footer.privacy}
            </a>
            <a href="#top" className="link-underline inline-flex items-center gap-1 hover:text-fg">
              {t.footer.top}
              <ArrowUp aria-hidden="true" className="h-3.5 w-3.5" />
            </a>
            <p className="label mt-4">© {year} Matti Koenis</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
