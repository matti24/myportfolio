import { ArrowLeft } from "lucide-react";
import { pathFor } from "../lib/routes.js";

const GITHUB_PRIVACY = "https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement";

export function PrivacyPage({ t, lang }) {
  return (
    <article className="wrap pb-24">
      <a href={pathFor(lang)} className="group t-s mt-8 inline-flex items-center gap-2 text-grey hover:text-ink">
        <ArrowLeft aria-hidden="true" className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        {t.nav.home}
      </a>
      <header className="grid gap-y-4 pt-12 pb-14 lg:grid-cols-12 lg:gap-x-6">
        <p className="t-s text-grey lg:col-span-3 lg:pt-3">{t.privacy.updated}</p>
        <h1 className="t-xl lg:col-span-9">{t.privacy.title}</h1>
      </header>
      {t.privacy.sections.map((section) => (
        <section key={section.heading} className="grid gap-y-3 border-t border-rule pt-6 pb-10 lg:grid-cols-12 lg:gap-x-6">
          <h2 className="rail lg:col-span-3">{section.heading}</h2>
          <div className="lg:col-span-9">
            {section.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="max-w-[62ch] text-grey">
                {p}
              </p>
            ))}
          </div>
        </section>
      ))}
      <p className="t-s border-t border-rule pt-6 lg:pl-[25%]">
        <a href={GITHUB_PRIVACY} target="_blank" rel="noopener noreferrer" className="ulink">
          GitHub Privacy Statement
        </a>
      </p>
    </article>
  );
}
