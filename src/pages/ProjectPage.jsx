import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { ProjectCover } from "../components/ProjectCover.jsx";
import { Picture } from "../components/Picture.jsx";
import { projects } from "../content/projects.js";
import { pathFor } from "../lib/routes.js";

const external = { target: "_blank", rel: "noopener noreferrer" };

function Block({ title, children }) {
  return (
    <section className="grid gap-y-6 border-t border-rule pt-8 pb-16 lg:grid-cols-12 lg:gap-x-6">
      <h2 className="rail lg:col-span-3">{title}</h2>
      <div className="lg:col-span-9">{children}</div>
    </section>
  );
}

export function ProjectPage({ t, lang, slug }) {
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];
  const text = t.projectTexts[slug];
  const next = projects[(index + 1) % projects.length];
  const nextText = t.projectTexts[next.slug];

  return (
    <article className="wrap">
      <a href={`${pathFor(lang)}#projects`} className="group t-s mt-8 inline-flex items-center gap-2 text-grey hover:text-ink">
        <ArrowLeft aria-hidden="true" className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        {t.caseStudy.back}
      </a>

      <header className="grid gap-y-6 pt-12 pb-14 lg:grid-cols-12 lg:gap-x-6">
        <p className="t-s tabular-nums text-grey lg:col-span-3 lg:pt-4">{project.years}</p>
        <div className="lg:col-span-9">
          <h1 className="t-title">
            <span className="line">
              <span className="line-in">{project.name}</span>
            </span>
          </h1>
          <p className="t-l fade-up mt-6 max-w-[32ch] text-grey" style={{ "--d": "120ms" }}>
            {text.tagline}
          </p>
          <dl className="fade-up mt-12 grid gap-6 border-t border-ink pt-5 sm:grid-cols-3" style={{ "--d": "200ms" }}>
            <div>
              <dt className="t-s text-grey">{t.caseStudy.role}</dt>
              <dd className="mt-1">{text.role}</dd>
            </div>
            <div>
              <dt className="t-s text-grey">{t.caseStudy.stack}</dt>
              <dd className="mt-1">{project.stack.join(", ")}</dd>
            </div>
            <div>
              <dt className="t-s text-grey">{t.caseStudy.links}</dt>
              <dd className="mt-1 flex flex-col items-start gap-1">
                {project.live ? (
                  <a href={project.live} {...external} className="group inline-flex items-center gap-1 hover:text-blue">
                    {t.projects.live}
                    <ArrowUpRight aria-hidden="true" className="arrow arrow-up h-4 w-4" />
                  </a>
                ) : (
                  <span className="text-grey">{t.projects.liveUnavailable}</span>
                )}
                <a href={project.repo} {...external} className="group inline-flex items-center gap-1 hover:text-blue">
                  {t.projects.code}
                  <ArrowUpRight aria-hidden="true" className="arrow arrow-up h-4 w-4" />
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </header>

      <div className="photo-reveal">
        <ProjectCover project={project} text={text} lang={lang} eager sizes="(min-width: 1472px) 1376px, 100vw" />
      </div>

      <div className="mt-20">
        {text.sections.map((section) => (
          <Block key={section.heading} title={section.heading}>
            {section.paragraphs?.map((p) => (
              <p key={p.slice(0, 32)} className="mb-5 max-w-[62ch] last:mb-0">
                {p}
              </p>
            ))}
            {section.items ? (
              <dl className="border-t border-ink">
                {section.items.map((item) => (
                  <div key={item.title} className="grid gap-1 border-b border-rule py-5 md:grid-cols-9 md:gap-6">
                    <dt className="font-medium md:col-span-3">{item.title}</dt>
                    <dd className="text-grey md:col-span-6">{item.text}</dd>
                  </div>
                ))}
              </dl>
            ) : null}
            {section.list ? (
              <ul className="border-t border-ink">
                {section.list.map((entry) => (
                  <li key={entry} className="border-b border-rule py-3">
                    {entry}
                  </li>
                ))}
              </ul>
            ) : null}
          </Block>
        ))}

        {project.gallery.map((image, i) => (
          <Block key={image.base} title={t.caseStudy.gallery}>
            <div className="overflow-hidden bg-[#f4f4f2]">
              <Picture image={image} alt={text.galleryAlt?.[i] || ""} sizes="(min-width: 1024px) 70vw, 100vw" className="h-auto w-full" />
            </div>
          </Block>
        ))}

        <Block title={t.caseStudy.result}>
          <p className="t-l max-w-[34ch]">{text.result}</p>
        </Block>
      </div>

      <nav aria-label={t.caseStudy.next} className="border-t border-ink">
        <a href={pathFor(lang, "project", next.slug)} className="group grid gap-y-4 py-14 sm:py-20 lg:grid-cols-12 lg:gap-x-6">
          <span className="rail lg:col-span-3">{t.caseStudy.next}</span>
          <span className="lg:col-span-9">
            <span className="t-title flex items-center gap-4 transition-colors group-hover:text-blue">
              {next.name}
              <ArrowRight aria-hidden="true" className="arrow h-[0.5em] w-[0.5em]" />
            </span>
            <span className="mt-4 block max-w-[52ch] text-grey">{nextText.summary}</span>
          </span>
        </a>
      </nav>
    </article>
  );
}
