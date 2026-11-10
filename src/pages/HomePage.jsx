import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { HeroGlobe } from "../components/HeroGlobe.jsx";
import { SectionHeader } from "../components/SectionHeader.jsx";
import { ProjectCover } from "../components/ProjectCover.jsx";
import { Picture } from "../components/Picture.jsx";
import { ContactForm } from "../components/ContactForm.jsx";
import { CopyEmail } from "../components/CopyEmail.jsx";
import { CONTACT, getProject, otherWork, projects } from "../content/projects.js";
import { pathFor } from "../lib/routes.js";

const PORTRAIT = { base: "portrait", widths: [480, 800, 1120], width: 1120, height: 1400 };

const external = { target: "_blank", rel: "noopener noreferrer" };

function ExternalLinks({ project, t, className = "" }) {
  return (
    <div className={`flex flex-wrap items-center gap-x-5 gap-y-2 text-sm ${className}`}>
      {project.live ? (
        <a href={project.live} {...external} className="link-underline inline-flex items-center gap-1 text-fg">
          {t.projects.live}
          <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
        </a>
      ) : (
        <span className="text-subtle">{t.projects.liveUnavailable}</span>
      )}
      <a href={project.repo} {...external} className="link-underline inline-flex items-center gap-1 text-muted hover:text-fg">
        {t.projects.code}
        <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
      </a>
    </div>
  );
}

function Hero({ t }) {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="container-x grid min-h-[calc(100svh-4rem)] items-center gap-10 py-14 lg:grid-cols-12 lg:gap-8 lg:py-20">
        <div className="lg:col-span-7">
          <p className="label intro-rise flex items-center gap-3" style={{ "--i": 0 }}>
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            {t.hero.eyebrow}
          </p>
          <h1 id="hero-title" className="display intro-rise mt-7 max-w-[17ch]" style={{ "--i": 1 }}>
            {t.hero.title}
          </h1>
          <p className="lead intro-rise mt-7 max-w-[52ch]" style={{ "--i": 2 }}>
            {t.hero.lead}
          </p>
          <div className="intro-rise mt-10 flex flex-wrap items-center gap-3" style={{ "--i": 3 }}>
            <a href="#projects" className="btn btn-primary">
              {t.hero.ctaProjects}
              <ArrowDown aria-hidden="true" className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn btn-ghost">
              {t.hero.ctaContact}
              <ArrowRight aria-hidden="true" className="arrow h-4 w-4" />
            </a>
          </div>
          <p className="intro-rise mt-10 flex items-center gap-3 text-sm text-muted" style={{ "--i": 4 }}>
            <span className="live-dot" aria-hidden="true" />
            {t.hero.status}
          </p>
        </div>
        <div className="intro-rise lg:col-span-5" style={{ "--i": 2 }}>
          <HeroGlobe label={t.hero.globeLabel} hint={t.hero.globeHint} />
        </div>
      </div>
    </section>
  );
}

function Facts({ t }) {
  return (
    <div className="border-y border-line">
      <dl className="container-x grid divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {t.facts.map((fact) => (
          <div key={fact.label} className="flex flex-row-reverse items-baseline justify-end gap-5 py-6 sm:flex-col-reverse sm:items-start sm:gap-2 sm:px-8 sm:py-10 sm:first:pl-0">
            <dt className="text-sm text-muted">{fact.label}</dt>
            <dd className="text-5xl font-medium tracking-[-0.05em] sm:text-6xl">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function FeaturedProject({ project, t, lang }) {
  const text = t.projectTexts[project.slug];
  const href = pathFor(lang, "project", project.slug);
  return (
    <article className="group reveal grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
      <a href={href} className="block lg:col-span-8" tabIndex={-1} aria-hidden="true">
        <ProjectCover project={project} text={text} lang={lang} sizes="(min-width: 1024px) 62vw, 100vw" />
      </a>
      <div className="lg:col-span-4">
        <p className="label">
          <span className="text-accent">01</span> · {t.projects.featured} · {project.years}
        </p>
        <h3 className="mt-4 text-[clamp(2.25rem,1.6rem+2.4vw,3.5rem)] font-medium leading-none tracking-[-0.04em]">
          <a href={href} className="focus-visible:outline-offset-8">
            {project.name}
          </a>
        </h3>
        <p className="mt-5 text-lg leading-relaxed text-muted">{text.tagline}</p>
        <ul className="mt-6 flex flex-wrap gap-2" aria-label={t.caseStudy.stack}>
          {project.stack.slice(0, 5).map((s) => (
            <li key={s} className="chip">
              {s}
            </li>
          ))}
        </ul>
        <a href={href} className="btn btn-primary mt-8">
          {t.projects.viewCase}
          <ArrowRight aria-hidden="true" className="arrow h-4 w-4" />
        </a>
        <ExternalLinks project={project} t={t} className="mt-6" />
      </div>
    </article>
  );
}

function ProjectTile({ project, index, t, lang }) {
  const text = t.projectTexts[project.slug];
  const href = pathFor(lang, "project", project.slug);
  return (
    <article className="group reveal flex flex-col">
      <a href={href} tabIndex={-1} aria-hidden="true" className="block">
        <ProjectCover project={project} text={text} lang={lang} sizes="(min-width: 768px) 45vw, 100vw" />
      </a>
      <p className="label mt-6">
        <span className="text-accent">{String(index).padStart(2, "0")}</span> · {project.years}
      </p>
      <h3 className="h3 mt-3">
        <a href={href} className="inline-flex items-center gap-2">
          {project.name}
          <ArrowRight aria-hidden="true" className="arrow h-5 w-5 text-subtle" />
        </a>
      </h3>
      <p className="mt-3 max-w-[48ch] text-muted">{text.summary}</p>
      <ul className="mt-5 flex flex-wrap gap-2" aria-label={t.caseStudy.stack}>
        {project.stack.slice(0, 4).map((s) => (
          <li key={s} className="chip">
            {s}
          </li>
        ))}
      </ul>
      <ExternalLinks project={project} t={t} className="mt-6" />
    </article>
  );
}

function Projects({ t, lang }) {
  const [featured, ...rest] = projects;
  return (
    <section id="projects" aria-labelledby="projects-title" className="py-24 sm:py-32">
      <div className="container-x">
        <SectionHeader id="projects-title" index="01" label={t.projects.label} title={t.projects.title} intro={t.projects.intro} />
        <div className="mt-16 sm:mt-20">
          <FeaturedProject project={featured} t={t} lang={lang} />
        </div>
        <div className="mt-20 grid gap-16 md:grid-cols-2 md:gap-10 lg:gap-14">
          {rest.map((project, i) => (
            <ProjectTile key={project.slug} project={project} index={i + 2} t={t} lang={lang} />
          ))}
        </div>

        <div className="mt-24">
          <h3 className="label">{t.projects.otherTitle}</h3>
          <ul className="mt-6 border-t border-line">
            {otherWork.map((work) => (
              <li key={work.key} className="border-b border-line">
                <a href={work.repo} {...external} className="group grid gap-3 py-6 sm:grid-cols-12 sm:items-baseline sm:gap-8">
                  <span className="text-xl font-medium tracking-tight sm:col-span-3">{t.projects.other[work.key].title}</span>
                  <span className="text-muted sm:col-span-6">{t.projects.other[work.key].text}</span>
                  <span className="flex items-center justify-between gap-4 sm:col-span-3 sm:justify-end">
                    <span className="label">{work.stack.slice(0, 2).join(" · ")}</span>
                    <ArrowUpRight aria-hidden="true" className="arrow h-4 w-4 text-subtle group-hover:text-fg" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Experience({ t }) {
  return (
    <section id="experience" aria-labelledby="experience-title" className="border-t border-line py-24 sm:py-32">
      <div className="container-x">
        <SectionHeader id="experience-title" index="02" label={t.experience.label} title={t.experience.title} intro={t.experience.intro} />
        <div className="timeline-scope relative mt-16 lg:ml-[25%]">
          <div aria-hidden="true" className="absolute top-2 bottom-2 left-[5px] w-px bg-line">
            <div className="timeline-progress h-full w-full origin-top bg-accent" />
          </div>
          <ol className="grid gap-14">
            {t.experience.items.map((item, i) => (
              <li key={item.title} className="reveal relative grid gap-3 pl-10 md:grid-cols-12 md:gap-8">
                <span
                  aria-hidden="true"
                  className={`absolute top-2 left-0 h-[11px] w-[11px] border ${i === 0 ? "border-accent bg-accent" : "border-line-strong bg-ink"}`}
                />
                <div className="md:col-span-4">
                  <p className="font-mono text-sm text-muted">{item.period}</p>
                  {i === 0 ? <p className="label mt-2 text-accent">{t.experience.current}</p> : null}
                </div>
                <div className="md:col-span-8">
                  <h3 className="h3">{item.title}</h3>
                  <p className="label mt-2">{item.place}</p>
                  <p className="mt-4 max-w-[58ch] text-muted">{item.text}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <li key={tag} className="chip">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function evidenceLink(key, lang, t) {
  const project = getProject(key);
  if (project) return { href: pathFor(lang, "project", key), label: project.name };
  if (key === "punchclock") return { href: otherWork[0].repo, label: t.skills.evidenceNames.punchclock, external: true };
  return { href: "#experience", label: t.skills.evidenceNames[key] };
}

function About({ t, lang }) {
  return (
    <section id="about" aria-labelledby="about-title" className="border-t border-line py-24 sm:py-32">
      <div className="container-x">
        <SectionHeader id="about-title" index="03" label={t.about.label} title={t.about.title} />
        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="reveal lg:col-span-4 lg:col-start-1">
            <div className="media-frame aspect-[4/5] max-w-sm">
              <Picture image={PORTRAIT} alt={t.about.portraitAlt} sizes="(min-width: 1024px) 28vw, (min-width: 640px) 24rem, 90vw" />
            </div>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="grid gap-5 text-lg leading-relaxed text-fg/90">
              {t.about.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="reveal">
                  {p}
                </p>
              ))}
            </div>
            <dl className="mt-12 grid gap-8 border-t border-line pt-8 sm:grid-cols-2">
              <div>
                <dt className="label">{t.about.languagesTitle}</dt>
                <dd className="mt-3">
                  <ul className="flex flex-wrap gap-2">
                    {t.about.languages.map((l) => (
                      <li key={l} className="chip text-fg">
                        {l}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
              <div>
                <dt className="label">{t.about.interestsTitle}</dt>
                <dd className="mt-3 text-muted">{t.about.interests}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-24">
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
            <h3 className="h3 lg:col-span-4">{t.skills.title}</h3>
            <p className="text-muted lg:col-span-7 lg:col-start-6">{t.skills.intro}</p>
          </div>
          <div className="mt-10 grid gap-x-8 gap-y-12 border-t border-line pt-10 sm:grid-cols-2 xl:grid-cols-4">
            {t.skills.groups.map((group) => (
              <div key={group.title} className="reveal">
                <h4 className="label text-fg">{group.title}</h4>
                <ul className="mt-5 divide-y divide-line border-t border-line">
                  {group.items.map((item) => (
                    <li key={item.name} className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 py-3">
                      <span className="font-medium">{item.name}</span>
                      <span className="flex flex-wrap gap-x-2 text-xs text-subtle">
                        <span className="sr-only">{t.skills.evidenceLabel}:</span>
                        {item.evidence.map((key) => {
                          const link = evidenceLink(key, lang, t);
                          return (
                            <a
                              key={key}
                              href={link.href}
                              {...(link.external ? external : {})}
                              className="font-mono underline decoration-line-strong underline-offset-4 hover:text-fg"
                            >
                              {link.label}
                            </a>
                          );
                        })}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-10 text-sm text-muted">
            <span className="label mr-3">{t.skills.moreTitle}</span>
            {t.skills.more}
          </p>
        </div>
      </div>
    </section>
  );
}

function Contact({ t, lang }) {
  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-line py-24 sm:py-32">
      <div className="container-x grid gap-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <p className="label">
            <span className="text-accent">04</span>
            <span aria-hidden="true"> — </span>
            {t.contact.label}
          </p>
          <h2 id="contact-title" className="display reveal mt-6">
            {t.contact.title}
          </h2>
          <p className="lead mt-6 max-w-[42ch]">{t.contact.intro}</p>
          <div className="mt-10 border-t border-line pt-8">
            <p className="label">{t.contact.emailLabel}</p>
            <a
              href={`mailto:${CONTACT.email}`}
              className="link-underline mt-2 inline-block text-[clamp(1.5rem,1.1rem+1.6vw,2.25rem)] font-medium tracking-tight"
            >
              {CONTACT.email}
            </a>
            <div className="mt-5 flex flex-wrap gap-3">
              <CopyEmail email={CONTACT.email} copyLabel={t.contact.copy} copiedLabel={t.contact.copied} />
              <a href={CONTACT.linkedin} {...external} className="btn btn-ghost min-h-11 text-sm">
                {t.contact.linkedin}
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </a>
              <a href={CONTACT.github} {...external} className="btn btn-ghost min-h-11 text-sm">
                {t.contact.github}
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 lg:pt-24">
          <ContactForm t={t.contact} lang={lang} privacyHref={pathFor(lang, "privacy")} />
        </div>
      </div>
    </section>
  );
}

export function HomePage({ t, lang }) {
  return (
    <>
      <Hero t={t} />
      <Facts t={t} />
      <Projects t={t} lang={lang} />
      <Experience t={t} />
      <About t={t} lang={lang} />
      <Contact t={t} lang={lang} />
    </>
  );
}
