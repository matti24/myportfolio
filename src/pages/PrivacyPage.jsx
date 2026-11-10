import { ArrowLeft } from "lucide-react";
import { pathFor } from "../lib/routes.js";

const GITHUB_PRIVACY = "https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement";

export function PrivacyPage({ t, lang }) {
  return (
    <article className="container-x pt-10 pb-24 sm:pt-14 sm:pb-32">
      <a href={pathFor(lang)} className="group inline-flex items-center gap-2 text-sm text-muted hover:text-fg">
        <ArrowLeft aria-hidden="true" className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        {t.nav.home}
      </a>
      <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-8">
        <header className="lg:col-span-4">
          <h1 className="h2">{t.privacy.title}</h1>
          <p className="label mt-5">{t.privacy.updated}</p>
        </header>
        <div className="grid gap-10 lg:col-span-7 lg:col-start-6">
          {t.privacy.sections.map((section) => (
            <section key={section.heading} className="border-t border-line pt-6">
              <h2 className="text-xl font-medium tracking-tight">{section.heading}</h2>
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="mt-3 max-w-[65ch] text-muted">
                  {p}
                </p>
              ))}
            </section>
          ))}
          <p className="text-sm text-subtle">
            <a href={GITHUB_PRIVACY} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-fg">
              GitHub Privacy Statement
            </a>
          </p>
        </div>
      </div>
    </article>
  );
}
