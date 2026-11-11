import { ArrowUp, ArrowUpRight } from "lucide-react";
import { CONTACT } from "../content/projects.js";
import { pathFor } from "../lib/routes.js";
import { KineticName } from "./KineticName.jsx";

export function Footer({ t, route }) {
  const year = typeof __BUILD_YEAR__ !== "undefined" ? __BUILD_YEAR__ : 2026;
  const links = [
    { href: CONTACT.linkedin, label: "LinkedIn" },
    { href: CONTACT.github, label: "GitHub" },
    { href: CONTACT.sourceRepo, label: t.footer.source },
  ];

  return (
    <footer className="site-footer">
      <div className="wrap grid gap-8 pt-12 pb-10 t-s md:grid-cols-12 md:gap-6">
        <div className="md:col-span-3">
          <p className="font-medium">Matti Koenis</p>
          <p className="text-grey">{t.footer.role}</p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 md:col-span-6">
          <li>
            <a href={`mailto:${CONTACT.email}`} className="ulink">
              {CONTACT.email}
            </a>
          </li>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1 text-grey hover:text-ink">
                {link.label}
                <ArrowUpRight aria-hidden="true" className="arrow arrow-up h-3.5 w-3.5" />
              </a>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap items-start gap-x-6 gap-y-2 md:col-span-3 md:justify-end">
          <a href={pathFor(route.lang, "privacy")} className="text-grey hover:text-ink">
            {t.footer.privacy}
          </a>
          <a href="#top" className="group inline-flex items-center gap-1 text-grey hover:text-ink">
            {t.footer.top}
            <ArrowUp aria-hidden="true" className="arrow h-3.5 w-3.5" />
          </a>
          <span className="text-grey">© {year}</span>
        </div>
      </div>
      <div className="wrap pb-6 sm:pb-10">
        <KineticName as="p" decorative text="Matti Koenis" className="t-name lg:flex lg:gap-[0.22em]" />
      </div>
    </footer>
  );
}
