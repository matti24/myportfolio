import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  CheckCircle2,
  Code2,
  Dumbbell,
  Footprints,
  Handshake,
  Languages,
  Layers,
  Lightbulb,
  Mail,
  MapPin,
  MessageCircle,
  Snowflake,
  Sparkles,
  Target,
  Trophy,
  Users,
} from "lucide-react";
import { SectionHeader } from "../components/SectionHeader.jsx";
import { ProjectCover } from "../components/ProjectCover.jsx";
import { Picture } from "../components/Picture.jsx";
import { ContactForm } from "../components/ContactForm.jsx";
import { CopyEmail } from "../components/CopyEmail.jsx";
import { CONTACT, otherWork, projects } from "../content/projects.js";
import { pathFor } from "../lib/routes.js";

const PORTRAIT = { base: "portrait", widths: [480, 800, 1120], width: 1120, height: 1400 };
const external = { target: "_blank", rel: "noopener noreferrer" };

const HIGHLIGHT_ICONS = {
  briefcase: Briefcase,
  languages: Languages,
  code: Code2,
};

const HOBBY_ICONS = {
  trophy: Trophy,
  dumbbell: Dumbbell,
  snowflake: Snowflake,
  footprints: Footprints,
};

const SOCIAL_ICONS = {
  users: Users,
  handshake: Handshake,
  message: MessageCircle,
  target: Target,
  lightbulb: Lightbulb,
};

function Hero({ t }) {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden border-b border-line">
      <div aria-hidden="true" className="hero-grid-bg pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[8%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(0,71,255,0.09),transparent_68%)] blur-2xl"
      />

      <div className="container-x relative pt-10 pb-16 sm:pt-14 sm:pb-24 lg:pt-18 lg:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left column: Personal Introduction */}
          <div className="lg:col-span-7">
            <div className="intro-rise inline-flex flex-wrap items-center gap-2.5 rounded-full border border-line bg-ink-2/90 px-3.5 py-1.5" style={{ "--i": 0 }}>
              <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
              <span className="font-mono text-xs font-medium tracking-wide text-fg">{t.hero.badge}</span>
            </div>

            <p className="intro-rise mt-6 font-mono text-xs uppercase tracking-[0.14em] text-subtle" style={{ "--i": 1 }}>
              {t.hero.greeting}
            </p>
            <h1 id="hero-title" className="display intro-rise mt-2 tracking-[-0.048em]" style={{ "--i": 1 }}>
              {t.hero.name}
            </h1>
            <p className="intro-rise mt-4 max-w-[26ch] text-[clamp(1.35rem,1.05rem+1.2vw,2rem)] font-medium leading-[1.2] tracking-[-0.025em] text-accent" style={{ "--i": 2 }}>
              {t.hero.claim}
            </p>
            <p className="lead intro-rise mt-5 max-w-[54ch]" style={{ "--i": 2 }}>
              {t.hero.lead}
            </p>

            <div className="intro-rise mt-9 flex flex-wrap items-center gap-3" style={{ "--i": 3 }}>
              <a href="#about" className="btn btn-primary">
                {t.hero.ctaAbout}
                <ArrowDown aria-hidden="true" className="h-4 w-4" />
              </a>
              <a href="#skills" className="btn btn-ghost">
                {t.hero.ctaSkills}
                <Layers aria-hidden="true" className="h-4 w-4 text-accent" />
              </a>
              <a href="#contact" className="btn btn-ghost">
                {t.hero.ctaContact}
                <ArrowRight aria-hidden="true" className="arrow h-4 w-4" />
              </a>
            </div>

            <div className="intro-rise mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted" style={{ "--i": 4 }}>
              <span className="inline-flex items-center gap-2.5 font-medium text-fg">
                <span className="live-dot" aria-hidden="true" />
                {t.hero.status}
              </span>
              <span className="inline-flex items-center gap-1.5 text-subtle">
                <MapPin aria-hidden="true" className="h-3.5 w-3.5 text-accent" />
                {t.hero.location}
              </span>
            </div>
          </div>

          {/* Right column: Editorial Portrait Card with Character */}
          <div className="intro-rise lg:col-span-5" style={{ "--i": 2 }}>
            <div className="mx-auto max-w-md lg:ml-auto">
              <div className="bento-card group relative overflow-hidden bg-gradient-to-b from-ink-2 via-white to-ink-2 p-3 sm:p-4">
                {/* Top technical bar inside card */}
                <div className="mb-3 flex items-center justify-between px-2 pt-1">
                  <span className="inline-flex items-center gap-2 font-mono text-[0.7rem] font-semibold uppercase tracking-wider text-fg">
                    <span className="h-2 w-2 rounded-xs bg-accent" aria-hidden="true" />
                    Swisscom · Zürich
                  </span>
                  <span className="font-mono text-[0.7rem] text-subtle">DE · NL · EN · SV</span>
                </div>

                {/* Portrait container */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-gradient-to-b from-[#eef2f8] via-[#f5f7fa] to-[#e9edf5]">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_22%,rgba(0,71,255,0.12),transparent_62%)]"
                  />
                  <Picture
                    image={PORTRAIT}
                    alt={t.about.portraitAlt}
                    eager
                    sizes="(min-width: 1024px) 26rem, (min-width: 640px) 24rem, 92vw"
                    className="relative z-10 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />

                  {/* Bottom floating badge inside portrait */}
                  <div className="absolute inset-x-3 bottom-3 z-20 flex items-center justify-between gap-3 rounded-xl border border-line/90 bg-white/92 px-3.5 py-2.5 shadow-sm backdrop-blur-md">
                    <div>
                      <p className="text-xs font-semibold text-fg">Matti Koenis</p>
                      <p className="font-mono text-[0.68rem] text-muted">{t.hero.roleTag}</p>
                    </div>
                    <span className="chip chip-accent">EFZ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Personal Focus Pillars (from original Hero: Fokus, Arbeitsstil, Interessen) */}
        <dl className="intro-rise mt-14 grid gap-4 sm:grid-cols-3 lg:mt-18" style={{ "--i": 4 }}>
          {t.hero.cards.map((card, idx) => (
            <div key={card.label} className="bento-card bento-card-interactive p-5 sm:p-6">
              <dt className="flex items-center justify-between">
                <span className="label text-accent">{card.label}</span>
                <span aria-hidden="true" className="font-mono text-xs text-subtle">0{idx + 1}</span>
              </dt>
              <dd className="mt-3 text-lg font-semibold tracking-tight text-fg sm:text-xl">{card.value}</dd>
              <dd className="mt-1.5 text-sm text-muted">{card.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function About({ t }) {
  return (
    <section id="about" aria-labelledby="about-title" className="py-20 sm:py-28">
      <div className="container-x">
        <SectionHeader id="about-title" index="01" label={t.about.label} title={t.about.title} intro={t.about.intro} />

        {/* Story + 3 Personal Highlights */}
        <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="bento-card flex flex-col justify-between p-6 sm:p-9 lg:col-span-6">
            <div>
              <span className="chip chip-accent">{t.about.portraitCaption}</span>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
                {t.about.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)} className="text-fg/90">
                    {p}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-line pt-6 sm:grid-cols-3">
              <div>
                <p className="font-mono text-2xl font-semibold tracking-tight text-fg">Swisscom</p>
                <p className="mt-0.5 text-xs text-muted">Ausbildungsbetrieb</p>
              </div>
              <div>
                <p className="font-mono text-2xl font-semibold tracking-tight text-accent">4</p>
                <p className="mt-0.5 text-xs text-muted">{t.about.languagesTitle}</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="font-mono text-2xl font-semibold tracking-tight text-fg">Zürich</p>
                <p className="mt-0.5 text-xs text-muted">Arbeitsort</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 lg:col-span-6">
            {t.about.highlights.map((item) => {
              const Icon = HIGHLIGHT_ICONS[item.icon] || Sparkles;
              return (
                <div key={item.title} className="bento-card bento-card-interactive flex gap-4 p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent-soft text-accent">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-fg">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Languages & Hobbies / Interests Bento */}
        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Languages */}
          <div className="bento-card p-6 sm:p-8 lg:col-span-6">
            <div className="flex items-baseline justify-between gap-4">
              <div>
                <h3 className="h3">{t.about.languagesTitle}</h3>
                <p className="mt-1 text-sm text-muted">{t.about.languagesSubtitle}</p>
              </div>
              <Languages aria-hidden="true" className="h-5 w-5 text-accent" />
            </div>

            <ul className="mt-6 grid gap-4">
              {t.about.languageItems.map((lang) => (
                <li key={lang.code} className="rounded-xl border border-line bg-ink-2/60 p-3.5">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-7 w-9 items-center justify-center rounded-md border border-line bg-white font-mono text-xs font-bold text-fg">
                        {lang.code}
                      </span>
                      <span className="font-semibold text-fg">{lang.name}</span>
                    </div>
                    <span className="font-mono text-xs text-muted">{lang.level}</span>
                  </div>
                  <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-line" aria-hidden="true">
                    <div className="h-full rounded-full bg-accent" style={{ width: `${lang.pct}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Interests & Hobbies */}
          <div className="bento-card p-6 sm:p-8 lg:col-span-6">
            <div className="flex items-baseline justify-between gap-4">
              <div>
                <h3 className="h3">{t.about.hobbiesTitle}</h3>
                <p className="mt-1 text-sm text-muted">{t.about.hobbiesSubtitle}</p>
              </div>
              <Trophy aria-hidden="true" className="h-5 w-5 text-accent" />
            </div>

            <ul className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              {t.about.hobbies.map((hobby) => {
                const Icon = HOBBY_ICONS[hobby.icon] || Trophy;
                return (
                  <li
                    key={hobby.name}
                    className="group flex flex-col justify-between rounded-xl border border-line bg-ink-2/55 p-4 transition hover:border-accent/35 hover:bg-white hover:shadow-xs"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-white text-fg transition group-hover:border-accent/30 group-hover:bg-accent-soft group-hover:text-accent">
                        <Icon aria-hidden="true" className="h-5 w-5" />
                      </span>
                      <span className="h-1.5 w-1.5 rounded-full bg-line-strong transition group-hover:bg-accent" aria-hidden="true" />
                    </div>
                    <div className="mt-4">
                      <p className="font-semibold text-fg">{hobby.name}</p>
                      <p className="mt-1 text-xs leading-relaxed text-muted">{hobby.detail}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills({ t }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const categories = Object.entries(t.skills.categories);
  const visibleTech =
    activeCategory === "all" ? t.skills.techItems : t.skills.techItems.filter((item) => item.category === activeCategory);

  return (
    <section id="skills" aria-labelledby="skills-title" className="surface-subtle border-y border-line py-20 sm:py-28">
      <div className="container-x">
        <SectionHeader id="skills-title" index="02" label={t.skills.label} title={t.skills.title} intro={t.skills.intro} />

        {/* Technical Skills with Interactive Category Filter */}
        <div className="mt-14">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h3 className="h3">{t.skills.techTitle}</h3>
              <p className="mt-1 text-sm text-muted">{t.skills.techSubtitle}</p>
            </div>

            <div role="tablist" aria-label={t.skills.techTitle} className="flex flex-wrap gap-1.5">
              <button
                type="button"
                role="tab"
                aria-selected={activeCategory === "all"}
                onClick={() => setActiveCategory("all")}
                className={`rounded-full px-3.5 py-1.5 font-mono text-xs font-medium transition ${
                  activeCategory === "all"
                    ? "bg-fg text-white shadow-xs"
                    : "border border-line bg-white text-muted hover:border-line-strong hover:text-fg"
                }`}
              >
                {t.skills.filterAll} ({t.skills.techItems.length})
              </button>
              {categories.map(([key, label]) => {
                const count = t.skills.techItems.filter((i) => i.category === key).length;
                const active = activeCategory === key;
                return (
                  <button
                    key={key}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setActiveCategory(key)}
                    className={`rounded-full px-3.5 py-1.5 font-mono text-xs font-medium transition ${
                      active
                        ? "bg-accent text-white shadow-xs"
                        : "border border-line bg-white text-muted hover:border-line-strong hover:text-fg"
                    }`}
                  >
                    {label} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          <ul className="mt-7 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
            {visibleTech.map((skill) => (
              <li
                key={skill.name}
                className="bento-card bento-card-interactive flex flex-col justify-between p-5"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[0.68rem] uppercase tracking-wider text-accent">
                      {t.skills.categories[skill.category]}
                    </span>
                    <span className="chip">{skill.where}</span>
                  </div>
                  <h4 className="mt-3 text-lg font-semibold tracking-tight text-fg">{skill.name}</h4>
                  <p className="mt-1 text-sm text-muted">{skill.context}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Competencies & Working Style + Positioning ("Bereit für den nächsten Schritt nach der Lehre") */}
        <div className="mt-16 grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Social Skills */}
          <div className="lg:col-span-7">
            <h3 className="h3">{t.skills.socialTitle}</h3>
            <p className="mt-1 text-sm text-muted">{t.skills.socialSubtitle}</p>

            <ul className="mt-6 grid gap-3.5 sm:grid-cols-2">
              {t.skills.socialItems.map((item, idx) => {
                const Icon = SOCIAL_ICONS[item.icon] || CheckCircle2;
                return (
                  <li
                    key={item.name}
                    className={`bento-card bento-card-interactive p-5 ${idx === 0 ? "sm:col-span-2" : ""}`}
                  >
                    <div className="flex items-start gap-3.5">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-accent/20 bg-accent-soft text-accent">
                        <Icon aria-hidden="true" className="h-4 w-4" />
                      </span>
                      <div>
                        <h4 className="font-semibold text-fg">{item.name}</h4>
                        <p className="mt-1 text-sm leading-relaxed text-muted">{item.description}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Positioning Card: Bereit für den nächsten Schritt nach der Lehre */}
          <div className="lg:col-span-5">
            <div className="bento-card flex h-full flex-col justify-between border-accent/25 bg-gradient-to-br from-white via-white to-accent-soft/60 p-6 sm:p-8">
              <div>
                <span className="chip chip-accent">{t.skills.positioning.tag}</span>
                <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-fg">
                  {t.skills.positioning.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{t.skills.positioning.description}</p>

                <div className="mt-6 space-y-4 border-t border-line pt-5">
                  <div>
                    <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                      {t.skills.positioning.bringTitle}
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-fg/90">{t.skills.positioning.bringText}</p>
                  </div>
                  <div>
                    <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                      {t.skills.positioning.standTitle}
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-fg/90">{t.skills.positioning.standText}</p>
                  </div>
                </div>
              </div>

              <div className="mt-7 pt-2">
                <a href="#contact" className="btn btn-accent w-full justify-center">
                  {t.hero.ctaContact}
                  <ArrowRight aria-hidden="true" className="arrow h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience({ t }) {
  return (
    <section id="experience" aria-labelledby="experience-title" className="py-20 sm:py-28">
      <div className="container-x">
        <SectionHeader id="experience-title" index="03" label={t.experience.label} title={t.experience.title} intro={t.experience.intro} />

        <div className="timeline-scope relative mt-14 lg:ml-[16%]">
          <div aria-hidden="true" className="absolute top-3 bottom-3 left-[7px] w-0.5 bg-line">
            <div className="timeline-progress h-full w-full origin-top bg-accent" />
          </div>

          <ol className="grid gap-8">
            {t.experience.items.map((item, i) => (
              <li key={item.title} className="reveal relative pl-9 sm:pl-12">
                <span
                  aria-hidden="true"
                  className={`absolute top-6 left-0 h-4 w-4 rounded-full border-2 ${
                    i === 0 ? "border-accent bg-accent ring-4 ring-accent/15" : "border-line-strong bg-white"
                  }`}
                />
                <article className="bento-card bento-card-interactive p-6 sm:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-xs font-semibold text-accent">{item.period}</span>
                    <div className="flex items-center gap-2">
                      {i === 0 ? <span className="chip chip-accent">{t.experience.current}</span> : null}
                      <span className="font-mono text-xs text-subtle">{item.place}</span>
                    </div>
                  </div>
                  <h3 className="h3 mt-2.5">{item.title}</h3>
                  <p className="mt-2.5 max-w-[64ch] text-sm leading-relaxed text-muted sm:text-base">{item.text}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <li key={tag} className="chip">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function SupplementaryProjects({ t, lang }) {
  return (
    <section id="projects" aria-labelledby="projects-title" className="border-t border-line bg-ink-2/65 py-20 sm:py-28">
      <div className="container-x">
        <SectionHeader id="projects-title" index="04" label={t.projects.label} title={t.projects.title} intro={t.projects.intro} />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {projects.map((project, idx) => {
            const text = t.projectTexts[project.slug];
            const href = pathFor(lang, "project", project.slug);
            return (
              <article key={project.slug} className="bento-card bento-card-interactive group flex flex-col justify-between p-4 sm:p-5">
                <div>
                  <a href={href} tabIndex={-1} aria-hidden="true" className="block">
                    <ProjectCover
                      project={project}
                      text={text}
                      lang={lang}
                      sizes="(min-width: 1024px) 28vw, (min-width: 768px) 32vw, 94vw"
                      className="aspect-[16/10]"
                    />
                  </a>
                  <div className="mt-4 flex items-center justify-between font-mono text-xs text-subtle">
                    <span className="font-semibold text-accent">0{idx + 1}</span>
                    <span>{project.years}</span>
                  </div>
                  <h3 className="mt-1.5 text-xl font-semibold tracking-tight text-fg">
                    <a href={href} className="inline-flex items-center gap-1.5 hover:text-accent">
                      {project.name}
                      <ArrowRight aria-hidden="true" className="arrow h-4 w-4 text-subtle" />
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{text.tagline}</p>
                </div>

                <div className="mt-5 border-t border-line pt-4">
                  <ul className="flex flex-wrap gap-1.5" aria-label={t.caseStudy.stack}>
                    {project.stack.slice(0, 3).map((s) => (
                      <li key={s} className="chip">
                        {s}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex items-center justify-between text-xs font-medium">
                    <a href={href} className="link-underline inline-flex items-center gap-1 text-accent">
                      {t.projects.viewCase}
                      <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
                    </a>
                    <div className="flex items-center gap-3">
                      {project.live ? (
                        <a href={project.live} {...external} className="link-underline inline-flex items-center gap-0.5 text-fg">
                          {t.projects.live}
                          <ArrowUpRight aria-hidden="true" className="h-3 w-3" />
                        </a>
                      ) : null}
                      <a href={project.repo} {...external} className="link-underline inline-flex items-center gap-0.5 text-muted hover:text-fg">
                        {t.projects.code}
                        <ArrowUpRight aria-hidden="true" className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Compact row for additional module work */}
        <div className="mt-6">
          {otherWork.map((work) => (
            <a
              key={work.key}
              href={work.repo}
              {...external}
              className="bento-card bento-card-interactive group flex flex-col justify-between gap-4 p-5 sm:flex-row sm:items-center"
            >
              <div>
                <span className="label text-accent">{t.projects.otherTitle}</span>
                <h3 className="mt-1 text-base font-semibold text-fg">{t.projects.other[work.key].title}</h3>
                <p className="mt-0.5 text-sm text-muted">{t.projects.other[work.key].text}</p>
              </div>
              <div className="flex shrink-0 items-center gap-3">
                <span className="chip">{work.stack.join(" · ")}</span>
                <ArrowUpRight aria-hidden="true" className="h-4 w-4 text-subtle transition group-hover:text-accent" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ t, lang }) {
  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-line py-20 sm:py-28">
      <div className="container-x">
        <SectionHeader id="contact-title" index="05" label={t.contact.label} title={t.contact.title} intro={t.contact.intro} />

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-10">
          {/* Direct Contact Card */}
          <div className="bento-card flex flex-col justify-between p-6 sm:p-8 lg:col-span-5">
            <div>
              <span className="label text-accent">{t.contact.emailLabel}</span>
              <p className="mt-3 text-[clamp(1.5rem,1.1rem+1.4vw,2.25rem)] font-semibold tracking-tight break-all text-fg">
                <a href={`mailto:${CONTACT.email}`} className="link-underline hover:text-accent">
                  {CONTACT.email}
                </a>
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                <a href={`mailto:${CONTACT.email}`} className="btn btn-primary">
                  <Mail aria-hidden="true" className="h-4 w-4" />
                  {t.contact.emailLabel}
                </a>
                <CopyEmail email={CONTACT.email} copyLabel={t.contact.copy} copiedLabel={t.contact.copied} />
              </div>
            </div>

            <div className="mt-10 space-y-4 border-t border-line pt-6 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted">LinkedIn</span>
                <a href={CONTACT.linkedin} {...external} className="link-underline inline-flex items-center gap-1 font-medium text-fg hover:text-accent">
                  Matti Koenis
                  <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted">GitHub</span>
                <a href={CONTACT.github} {...external} className="link-underline inline-flex items-center gap-1 font-medium text-fg hover:text-accent">
                  github.com/matti24
                  <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted">{t.contact.locationLabel}</span>
                <span className="font-medium text-fg">{t.contact.locationValue}</span>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="bento-card p-6 sm:p-8 lg:col-span-7">
            <ContactForm t={t.contact} lang={lang} privacyHref={pathFor(lang, "privacy")} />
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomePage({ t, lang }) {
  return (
    <>
      <Hero t={t} />
      <About t={t} />
      <Skills t={t} />
      <Experience t={t} />
      <SupplementaryProjects t={t} lang={lang} />
      <Contact t={t} lang={lang} />
    </>
  );
}
