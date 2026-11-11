import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Section, Intro } from "./Section.jsx";
import { ProjectCover } from "./ProjectCover.jsx";
import { projects } from "../content/projects.js";
import { pathFor } from "../lib/routes.js";

export function ProjectIndex({ t, lang }) {
  const [preview, setPreview] = useState(projects[0].slug);
  const rows = projects.map((p) => ({
    key: p.slug,
    name: p.name,
    text: t.projectTexts[p.slug].tagline,
    stack: p.stack.slice(0, 3).join(", "),
    years: p.years,
    href: pathFor(lang, "project", p.slug),
    project: p,
  }));

  return (
    <Section id="projects" title={t.home.nav.projects}>
      <Intro heading={t.projects.title} lead={t.projects.intro} />

      <div className="mt-14 grid gap-10 lg:grid-cols-9 lg:gap-x-6">
        <ul className="border-t border-ink lg:col-span-5">
          {rows.map((r) => (
            <li key={r.key} className="border-b border-rule">
              <a
                href={r.href}
                onMouseEnter={() => setPreview(r.key)}
                onFocus={() => setPreview(r.key)}
                className="group grid grid-cols-[1fr_auto] items-baseline gap-x-6 py-6"
              >
                <span className="t-l inline-flex items-center gap-2 font-medium transition-colors group-hover:text-blue">
                  {r.name}
                  <ArrowRight aria-hidden="true" className="arrow h-5 w-5 opacity-0 transition-opacity group-hover:opacity-100" />
                </span>
                <span className="t-s tabular-nums text-grey">{r.years}</span>
                <span className="col-span-2 mt-2 max-w-[48ch] text-grey">{r.text}</span>
                <span className="t-s col-span-2 mt-3">{r.stack}</span>
              </a>
              <div className="pb-8 lg:hidden">
                <ProjectCover project={r.project} text={t.projectTexts[r.key]} lang={lang} sizes="(min-width: 640px) 80vw, 100vw" />
              </div>
            </li>
          ))}
        </ul>

        <div className="hidden lg:col-span-4 lg:block" aria-hidden="true">
          <div className="sticky top-28 aspect-[16/10]">
            {projects.map((p) => (
              <div key={p.slug} className="preview" data-on={preview === p.slug ? "true" : "false"}>
                <ProjectCover project={p} text={t.projectTexts[p.slug]} lang={lang} sizes="30vw" className="h-full w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
