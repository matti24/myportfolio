import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Picture } from "../components/Picture.jsx";
import { Section, Intro } from "../components/Section.jsx";
import { VocabularyPath } from "../components/VocabularyPath.jsx";
import { ProjectIndex } from "../components/ProjectIndex.jsx";
import { ContactForm } from "../components/ContactForm.jsx";
import { CopyEmail } from "../components/CopyEmail.jsx";
import { CONTACT } from "../content/projects.js";
import { JOB_TITLES, SKILL_GROUPS } from "../content/profile.js";
import { pathFor } from "../lib/routes.js";

const PORTRAIT = { base: "studio-color", widths: [480, 800, 1120], width: 1120, height: 1400 };
const PORTRAIT_BW = { base: "studio-bw", widths: [480, 800, 1200], width: 1200, height: 1600 };

function Hero({ t, lang }) {
  const h = t.home.hero;
  return (
    <section aria-labelledby="hero-name" className="wrap pt-6 pb-24 sm:pt-10 lg:pb-32">
      <div className="grid lg:grid-cols-12 lg:gap-x-6">
        <h1 id="hero-name" className="t-name lg:col-span-8 lg:row-start-1">
          <span className="line">
            <span className="line-in">Matti</span>
          </span>
          <span className="line">
            <span className="line-in" style={{ "--d": "90ms" }}>
              Koenis
            </span>
          </span>
        </h1>

        <figure className="-mx-5 mt-8 sm:mx-0 lg:col-span-4 lg:col-start-9 lg:row-span-3 lg:row-start-1 lg:mt-4">
          <div className="photo-reveal aspect-[4/5] overflow-hidden bg-[#2b3036]">
            <Picture
              image={PORTRAIT}
              alt={h.portraitAlt}
              eager
              sizes="(min-width: 1472px) 432px, (min-width: 1024px) 30vw, (min-width: 640px) 90vw, 100vw"
              className="h-full w-full object-cover"
            />
          </div>
          <figcaption className="t-s mt-3 flex flex-wrap justify-between gap-x-4 px-5 sm:px-0">
            <span>{h.portraitCaption}</span>
            <span className="text-grey">{h.current}</span>
          </figcaption>
        </figure>

        <nav aria-label={h.titlesLabel} className="fade-up mt-12 lg:col-span-3 lg:row-start-2 lg:mt-16" style={{ "--d": "260ms" }}>
          <ul>
            {JOB_TITLES.map((job) => {
              const current = job.lang === lang;
              return (
                <li key={job.lang}>
                  <a
                    href={pathFor(job.lang)}
                    hrefLang={job.lang}
                    lang={job.lang}
                    aria-current={current ? "page" : undefined}
                    className={`group flex min-h-9 items-baseline gap-3 transition-colors ${current ? "text-ink" : "text-grey hover:text-ink"}`}
                  >
                    <span className="t-s w-6 shrink-0">{job.code}</span>
                    <span className="t-m transition-transform duration-300 group-hover:translate-x-1">{job.title}</span>
                    {current ? <span aria-hidden="true" className="status-dot -translate-y-1" /> : null}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="fade-up mt-10 lg:col-span-5 lg:col-start-4 lg:row-start-2 lg:mt-16" style={{ "--d": "340ms" }}>
          <p className="t-l max-w-[30ch]">{h.intro}</p>
          <p className="t-s mt-6 flex items-center gap-2.5 text-grey">
            <span aria-hidden="true" className="status-dot" />
            {h.status}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 font-medium">
            <a href="#path" className="group ulink inline-flex items-center gap-2">
              {h.ctaPath}
              <ArrowDown aria-hidden="true" className="arrow arrow-down h-4 w-4" />
            </a>
            <a href={`mailto:${CONTACT.email}`} className="ulink text-grey hover:text-ink">
              {CONTACT.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function About({ t }) {
  const a = t.home.about;
  return (
    <Section id="about" title={a.title}>
      <Intro heading={a.motto} lead={a.lead} />
      <div className="mt-16 grid gap-12 md:grid-cols-9 md:gap-x-6">
        <figure className="md:col-span-4">
          <div className="aspect-[3/4] overflow-hidden bg-[#1c1c1c]">
            <Picture
              image={PORTRAIT_BW}
              alt={a.photoAlt}
              sizes="(min-width: 1472px) 432px, (min-width: 1024px) 30vw, (min-width: 768px) 44vw, 100vw"
              className="zoom-on-view h-full w-full object-cover"
            />
          </div>
        </figure>
        <div className="md:col-span-5">
          <dl className="border-t border-ink">
            {a.facts.map((f) => (
              <div key={f.term} className="reveal grid gap-1 border-b border-rule py-5 sm:grid-cols-5 sm:gap-6">
                <dt className="font-medium sm:col-span-2">{f.term}</dt>
                <dd className="text-grey sm:col-span-3">{f.text}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 sm:gap-6">
            <div className="reveal">
              <h3 className="font-medium">{a.bringTitle}</h3>
              <p className="mt-2 text-grey">{a.bringText}</p>
            </div>
            <div className="reveal">
              <h3 className="font-medium">{a.standTitle}</h3>
              <p className="mt-2 text-grey">{a.standText}</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Skills({ t }) {
  const s = t.home.skills;
  return (
    <Section id="skills" title={s.title}>
      <Intro heading={s.heading} lead={s.lead} />
      <dl className="mt-14 border-t border-ink">
        {SKILL_GROUPS.map((g) => (
          <div key={g.key} className="reveal group grid gap-1 border-b border-rule py-5 md:grid-cols-9 md:gap-6">
            <dt className="text-grey transition-colors group-hover:text-blue md:col-span-3 md:pt-1">{s.groups[g.key]}</dt>
            <dd className="t-m md:col-span-6">{g.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
      <h3 className="mt-20 font-medium">{s.socialTitle}</h3>
      <dl className="mt-5 border-t border-ink">
        {s.social.map((x) => (
          <div key={x.name} className="reveal grid gap-1 border-b border-rule py-5 md:grid-cols-9 md:gap-6">
            <dt className="t-m md:col-span-3">{x.name}</dt>
            <dd className="text-grey md:col-span-6 md:pt-1">{x.description}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

function Contact({ t, lang }) {
  const c = t.contact;
  const rows = [
    { label: c.linkedin, value: "Matti Koenis", href: CONTACT.linkedin },
    { label: c.github, value: "github.com/matti24", href: CONTACT.github },
    { label: c.locationLabel, value: c.locationValue },
  ];
  return (
    <Section id="contact" title={c.label}>
      <Intro heading={c.title} lead={c.intro} />
      <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4">
        <a href={`mailto:${CONTACT.email}`} className="ulink t-xl break-all transition-colors hover:text-blue">
          {CONTACT.email}
        </a>
        <CopyEmail email={CONTACT.email} copyLabel={c.copy} copiedLabel={c.copied} />
      </div>
      <dl className="mt-12 border-t border-ink md:max-w-[75%]">
        {rows.map((r) => (
          <div key={r.label} className="grid grid-cols-[8rem_1fr] gap-4 border-b border-rule py-4 sm:grid-cols-[12rem_1fr]">
            <dt className="text-grey">{r.label}</dt>
            <dd>
              {r.href ? (
                <a href={r.href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1 hover:text-blue">
                  {r.value}
                  <ArrowUpRight aria-hidden="true" className="arrow arrow-up h-4 w-4" />
                </a>
              ) : (
                r.value
              )}
            </dd>
          </div>
        ))}
      </dl>
      <div className="mt-20 md:max-w-[75%]">
        <ContactForm t={c} lang={lang} privacyHref={pathFor(lang, "privacy")} />
      </div>
    </Section>
  );
}

export function HomePage({ t, lang }) {
  return (
    <>
      <Hero t={t} lang={lang} />
      <About t={t} />
      <VocabularyPath t={t} lang={lang} />
      <Skills t={t} />
      <ProjectIndex t={t} lang={lang} />
      <Contact t={t} lang={lang} />
    </>
  );
}
