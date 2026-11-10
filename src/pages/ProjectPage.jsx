import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { ProjectCover } from "../components/ProjectCover.jsx";
import { Picture } from "../components/Picture.jsx";
import { projects } from "../content/projects.js";
import { pathFor } from "../lib/routes.js";

const external = { target: "_blank", rel: "noopener noreferrer" };

function Section({ section, index }) {
  return (
    <section className="reveal grid gap-6 border-t border-line pt-10 lg:grid-cols-12 lg:gap-8">
      <h2 className="lg:col-span-4">
        <span aria-hidden="true" className="label block text-accent">{String(index + 1).padStart(2, "0")}</span>
        <span className="h3 mt-3 block">{section.heading}</span>
      </h2>
      <div className="text-lg leading-relaxed lg:col-span-8">
        {section.paragraphs?.map((p) => (
          <p key={p.slice(0, 32)} className="mb-5 max-w-[65ch] text-fg/90 last:mb-0">
            {p}
          </p>
        ))}
        {section.items ? (
          <ol className="grid gap-8 sm:grid-cols-2">
            {section.items.map((item, i) => (
              <li key={item.title} className="border-t border-line-strong pt-5">
                <p className="label">{String.fromCharCode(65 + i)}</p>
                <h3 className="mt-2 text-xl font-medium tracking-tight">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted">{item.text}</p>
              </li>
            ))}
          </ol>
        ) : null}
        {section.list ? (
          <ul className="divide-y divide-line border-y border-line">
            {section.list.map((entry) => (
              <li key={entry} className="flex gap-4 py-3.5 text-base">
                <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-accent" />
                <span className="text-fg/90">{entry}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
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
    <article>
      <header className="container-x pt-10 pb-12 sm:pt-14">
        <a href={`${pathFor(lang)}#projects`} className="group inline-flex items-center gap-2 text-sm text-muted hover:text-fg">
          <ArrowLeft aria-hidden="true" className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          {t.caseStudy.back}
        </a>
        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <p className="label intro-rise">
              <span className="text-accent">Case Study</span> · {project.years}
            </p>
            <h1 className="display intro-rise mt-5" style={{ "--i": 1 }}>
              {project.name}
            </h1>
            <p className="lead intro-rise mt-6 max-w-[48ch]" style={{ "--i": 2 }}>
              {text.tagline}
            </p>
          </div>
        </div>

        <dl className="intro-rise mt-14 grid gap-8 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-12" style={{ "--i": 3 }}>
          <div className="lg:col-span-3">
            <dt className="label">{t.caseStudy.role}</dt>
            <dd className="mt-2 text-sm text-fg/90">{text.role}</dd>
          </div>
          <div className="lg:col-span-2">
            <dt className="label">{t.caseStudy.period}</dt>
            <dd className="mt-2 font-mono text-sm text-fg/90">{project.years}</dd>
          </div>
          <div className="lg:col-span-4">
            <dt className="label">{t.caseStudy.stack}</dt>
            <dd className="mt-2">
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <li key={s} className="chip">
                    {s}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
          <div className="lg:col-span-3">
            <dt className="label">{t.caseStudy.links}</dt>
            <dd className="mt-2 grid gap-1.5 text-sm">
              {project.live ? (
                <a href={project.live} {...external} className="link-underline inline-flex w-fit items-center gap-1">
                  {t.projects.live}: {project.liveLabel}
                  <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
                </a>
              ) : (
                <span className="text-subtle">{t.projects.liveUnavailable}</span>
              )}
              <a href={project.repo} {...external} className="link-underline inline-flex w-fit items-center gap-1 text-muted hover:text-fg">
                {t.projects.code}
                <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
              </a>
            </dd>
          </div>
        </dl>
      </header>

      <div className="container-x">
        <ProjectCover project={project} text={text} lang={lang} eager sizes="(min-width: 1408px) 1312px, 100vw" className="aspect-[16/10]" />
      </div>

      <div className="container-x mt-20 grid gap-16 sm:mt-28">
        {text.sections.map((section, i) => (
          <Section key={section.heading} section={section} index={i} />
        ))}

        {project.gallery.map((image, i) => (
          <figure key={image.base} className="reveal grid gap-4 lg:grid-cols-12 lg:gap-8">
            <figcaption className="label lg:col-span-4">{t.caseStudy.gallery}</figcaption>
            <div className="media-frame lg:col-span-8">
              <Picture image={image} alt={text.galleryAlt?.[i] || ""} sizes="(min-width: 1024px) 60vw, 100vw" />
            </div>
          </figure>
        ))}

        <section className="reveal grid gap-6 border-t border-line pt-10 lg:grid-cols-12 lg:gap-8">
          <h2 className="label text-accent lg:col-span-4">{t.caseStudy.result}</h2>
          <p className="h3 max-w-[34ch] lg:col-span-8">{text.result}</p>
        </section>
      </div>

      <nav aria-label={t.caseStudy.next} className="mt-24 border-t border-line sm:mt-32">
        <a href={pathFor(lang, "project", next.slug)} className="group container-x grid gap-6 py-14 sm:py-20 lg:grid-cols-12 lg:items-center lg:gap-8">
          <span className="label lg:col-span-4">{t.caseStudy.next}</span>
          <span className="lg:col-span-8">
            <span className="flex items-center gap-4 text-[clamp(2.5rem,1.6rem+4vw,5rem)] font-medium leading-none tracking-[-0.045em]">
              {next.name}
              <ArrowRight aria-hidden="true" className="arrow h-[0.6em] w-[0.6em] text-accent" />
            </span>
            <span className="mt-4 block max-w-[52ch] text-muted">{nextText.summary}</span>
          </span>
        </a>
      </nav>
    </article>
  );
}
