import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useI18n } from "./i18n/useI18n";
import {
  ArrowRight,
  Code2,
  Github,
  Linkedin,
  Mail,
  Briefcase,
  Languages,
  ChevronDown,
  Dumbbell,
  Trophy,
  Snowflake,
  Layers,
  Sparkles,
  Target,
  Users,
  MessageSquare,
} from "lucide-react";


const profileImage = "1-4-removebg-preview.png";

const skills = [
  { key: "data.skills.social", value: 90 },
  { key: "data.skills.team", value: 80 },
  { key: "data.skills.powerPlatform", value: 80 },
  { key: "data.skills.independent", value: 75 },
  { key: "data.skills.scrum", value: 70 },
  { key: "data.skills.javascript", value: 60 },
  { key: "data.skills.css", value: 60 },
  { key: "data.skills.typescript", value: 50 },
  { key: "data.skills.sql", value: 50 },
  { key: "data.skills.java", value: 40 },
];

const highlights = [
  {
    titleKey: "data.highlights.devTitle",
    textKey: "data.highlights.devText",
    icon: Briefcase,
  },
  {
    titleKey: "data.highlights.langTitle",
    textKey: "data.highlights.langText",
    icon: Languages,
  },
  {
    titleKey: "data.highlights.mindsetTitle",
    textKey: "data.highlights.mindsetText",
    icon: Code2,
  },
];

const hobbies = [
  { key: "data.hobbies.tennis", icon: Trophy },
  { key: "data.hobbies.fitness", icon: Dumbbell },
  { key: "data.hobbies.ski", icon: Snowflake },
];

const languages = [
  { key: "common.german", level: 100, flag: "🇩🇪" },
  { key: "common.dutch", level: 90, flag: "🇳🇱" },
  { key: "common.english", level: 80, flag: "🇬🇧" },
  { key: "common.swedish", level: 70, flag: "🇸🇪" },
];

const experiences = [
  {
    titleKey: "data.experiences.powerPlatform.title",
    periodKey: "data.experiences.powerPlatform.period",
    descriptionKey: "data.experiences.powerPlatform.description",
    skills: ["PowerApps", "Power BI", "Power Automate", "SharePoint", "DevOps"],
  },
  {
    titleKey: "data.experiences.codemix.title",
    periodKey: "data.experiences.codemix.period",
    descriptionKey: "data.experiences.codemix.description",
    skills: ["HTML", "CSS", "JavaScript", "Basiskonzepte"],
  },
  {
    titleKey: "data.experiences.futureWork.title",
    periodKey: "data.experiences.futureWork.period",
    descriptionKey: "data.experiences.futureWork.description",
    skills: ["IT-Support", "Kommunikation", "Teamarbeit"],
  },
];

const section = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function MattiKoenisOnepage() {
  const { locale, setLocale, t } = useI18n();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };

    // Sofort ausführen und nach dem ersten Paint erneut, um Browser-Scroll-Restore zu übersteuern.
    scrollToTop();
    const rafId = window.requestAnimationFrame(scrollToTop);

    const handlePageShow = () => scrollToTop();
    window.addEventListener("pageshow", handlePageShow);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, []);

  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => link.addEventListener('click', handleSmoothScroll));

    return () => {
      links.forEach(link => link.removeEventListener('click', handleSmoothScroll));
    };
  }, []);

  const localeLabel = {
    de: "DE",
    en: "EN",
    nl: "NL",
    sv: "SV",
  };

  const localeNameKey = {
    de: "common.german",
    en: "common.english",
    nl: "common.dutch",
    sv: "common.swedish",
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-white [scroll-behavior:smooth]">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#0f172a_0%,#1e1b4b_50%,#0f172a_100%)]" />
        <div className="absolute left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-blue-700/15 blur-3xl" />
        <div className="absolute top-1/3 -left-32 h-[28rem] w-[28rem] rounded-full bg-slate-800/15 blur-3xl" />
        <div className="absolute top-1/4 right-1/4 h-[25rem] w-[25rem] rounded-full bg-amber-500/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/60 backdrop-blur-xl relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a href="#top" className="text-sm font-semibold uppercase tracking-[0.24em] bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent hover:from-amber-200 hover:to-white transition">
              Matti Koenis
            </a>

            <div className="flex items-center gap-4">
              <div className="hidden items-center gap-2 md:inline-flex">
                <label className="sr-only" htmlFor="locale">
                  {t("common.language")}
                </label>
                <select
                  id="locale"
                  value={locale}
                  onChange={(e) => setLocale(e.target.value)}
                  className="h-9 rounded-md border border-white/20 bg-slate-950/30 px-3 text-xs font-semibold text-white/85 backdrop-blur-sm outline-none transition hover:border-white/35 focus:border-white/45"
                >
                  {Object.keys(localeLabel).map((l) => (
                    <option key={l} value={l} className="bg-slate-950">
                      {localeLabel[l]} — {t(localeNameKey[l])}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:hidden">
                <div className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 p-1 backdrop-blur-sm">
                  {Object.keys(localeLabel).map((l) => {
                    const isActive = locale === l;
                    return (
                      <button
                        key={l}
                        type="button"
                        onClick={() => setLocale(l)}
                        aria-pressed={isActive}
                        className={
                          "h-8 min-w-10 px-3 rounded-full text-xs font-semibold transition " +
                          (isActive
                            ? "bg-white text-slate-950"
                            : "text-white/80 hover:bg-white/10")
                        }
                      >
                        {localeLabel[l]}
                      </button>
                    );
                  })}
                </div>
              </div>

              <nav className="hidden items-center gap-8 text-sm md:flex">
              <a href="#about" className="relative text-white/80 transition group">
                {t("nav.about")}
                <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-amber-400/50 via-amber-400/0 to-transparent" />
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300" />
              </a>
              <a href="#skills" className="relative text-white/80 transition group">
                {t("nav.skills")}
                <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-amber-400/50 via-amber-400/0 to-transparent" />
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300" />
              </a>
              <a href="#portfolio" className="relative text-white/80 transition group">
                {t("nav.portfolio")}
                <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-amber-400/50 via-amber-400/0 to-transparent" />
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300" />
              </a>
              <a href="#contact" className="relative text-white/80 transition group">
                {t("nav.contact")}
                <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-amber-400/50 via-amber-400/0 to-transparent" />
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300" />
              </a>
              </nav>
            </div>
          </div>

          <nav className="mt-3 md:hidden">
            <div className="rounded-xl border border-white/15 bg-white/5 p-1 backdrop-blur-sm">
              <div className="grid grid-cols-4 gap-1">
                {["about", "skills", "portfolio", "contact"].map((id) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="inline-flex h-10 items-center justify-center rounded-lg px-1 text-[11px] font-semibold tracking-[0.01em] text-white/85 transition hover:bg-white/10 active:scale-[0.98]"
                  >
                    <span className="w-full select-none truncate text-center whitespace-nowrap">
                      {t(`nav.${id}`)}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto flex min-h-[calc(100vh-73px)] max-w-7xl items-center px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid w-full items-center gap-12 lg:grid-cols-1">
            <motion.div
              variants={section}
              initial="hidden"
              animate="show"
              className="max-w-3xl"
            >
              <div className="mb-6 inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-2 text-xs text-blue-100 sm:px-4 sm:text-sm">
                <span className="h-2 w-2 rounded-full bg-blue-400" />
                {t("hero.badge")}
              </div>

              <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-7xl">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent">
                  Clean Code.
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-200 bg-clip-text text-transparent">
                  {t("hero.lines.team")}
                </span>
                <br />
                <span className="bg-gradient-to-r from-white via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  {t("hero.lines.solutions")}
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
                {t("hero.lead")}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#portfolio"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-white to-slate-100 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02] hover:shadow-lg hover:shadow-white/25"
                >
                  {t("hero.ctaPortfolio")}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-white/35 hover:bg-white/10"
                >
                  {t("hero.ctaContact")}
                  <ArrowRight className="h-4 w-4 text-white/60 transition group-hover:translate-x-1" />
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="group rounded-lg border border-blue-400/30 bg-gradient-to-br from-blue-400/10 to-blue-400/5 p-5 backdrop-blur-sm transition hover:border-blue-300/60 hover:bg-blue-400/15 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <p className="text-sm text-blue-200/70">{t("hero.tiles.focus")}</p>
                  <p className="mt-2 text-lg font-semibold text-white sm:text-xl">{t("hero.tiles.focusValue")}</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="group rounded-lg border border-cyan-400/30 bg-gradient-to-br from-cyan-400/10 to-cyan-400/5 p-5 backdrop-blur-sm transition hover:border-cyan-300/60 hover:bg-cyan-400/15 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  <p className="text-sm text-cyan-200/70">{t("hero.tiles.style")}</p>
                  <p className="mt-2 text-lg font-semibold text-white sm:text-xl">{t("hero.tiles.styleValue")}</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="group rounded-lg border border-white/30 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-sm transition hover:border-white/60 hover:bg-white/15 hover:shadow-lg hover:shadow-white/20"
                >
                  <p className="text-sm text-white/70">{t("hero.tiles.interests")}</p>
                  <p className="mt-2 text-lg font-semibold text-white sm:text-xl">{t("hero.tiles.interestsValue")}</p>
                </motion.div>
              </div>

              <motion.a
                href="#about"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mt-10 inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white/80"
              >
                {t("common.discoverMore")}
                <ChevronDown className="h-4 w-4" />
              </motion.a>
            </motion.div>
          </div>
        </section>

        <motion.section
          id="about"
          variants={section}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8"
        >
          <div className="mb-16 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-blue-200/70">{t("about.kicker")}</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              {t("about.title")}
            </h2>
          </div>

          <div className="grid gap-10 items-start lg:grid-cols-[1fr_1.2fr_1fr]">
            {/* Linke Spalte: Hobbys und Sprachen */}
            <div className="space-y-6">
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-blue-200/70">{t("about.languagesTitle")}</h3>
                <div className="space-y-3">
                  {languages.map((lang) => (
                    <div key={lang.key}>
                      <div className="mb-1.5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{lang.flag}</span>
                          <span className="text-sm font-medium text-white/90">{t(lang.key)}</span>
                        </div>
                        <span className="text-xs text-white/50">{lang.level}%</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-white/8">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${lang.level}%` }}
                          viewport={{ once: false }}
                          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                          className="h-full rounded-full bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-blue-200/70">{t("about.hobbiesTitle")}</h3>
                <div className="grid grid-cols-3 gap-2">
                  {hobbies.map((hobby, idx) => {
                    const Icon = hobby.icon;
                    const borderClasses = [
                      "border-blue-400/30 bg-gradient-to-br from-blue-400/10 to-blue-400/5 hover:shadow-blue-500/20",
                      "border-cyan-400/30 bg-gradient-to-br from-cyan-400/10 to-cyan-400/5 hover:shadow-cyan-500/20",
                      "border-white/30 bg-gradient-to-br from-white/10 to-white/5 hover:shadow-white/20"
                    ];
                    const iconClasses = [
                      "text-blue-300 group-hover:text-blue-200",
                      "text-cyan-300 group-hover:text-cyan-200",
                      "text-white/70 group-hover:text-white"
                    ];
                    
                    return (
                      <motion.div
                        key={hobby.key}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: idx * 0.1 }}
                        className={`group rounded-lg border backdrop-blur-sm p-3 text-center transition hover:border-opacity-60 hover:shadow-lg ${borderClasses[idx]}`}
                      >
                        <Icon className={`mx-auto mb-1 h-5 w-5 transition group-hover:scale-125 ${iconClasses[idx]}`} />
                        <p className="text-xs font-semibold text-white/90">{t(hobby.key)}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                className="rounded-2xl border border-white/15 bg-white/7 p-5 backdrop-blur-sm transition hover:border-white/30 hover:bg-white/12"
              >
                <div className="mb-3 inline-flex rounded-xl border border-white/20 bg-white/10 p-2.5 text-white/85">
                  <Briefcase className="h-4 w-4" />
                </div>
                <h3 className="text-base font-semibold text-white">{t("about.profileTitle")}</h3>
                <p className="mt-2 text-sm leading-6 text-white/72">{t("about.profileText")}</p>
              </motion.div>
            </div>

            {/* Mitte: Großes Bild */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7 }}
              className="relative order-first group flex justify-center lg:order-none"
            >
              <div className="absolute -inset-8 rounded-3xl bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-transparent blur-3xl" />
              <div className="relative w-full max-w-[17rem] sm:max-w-xs lg:max-w-sm">
                <img
                  src={profileImage}
                  alt="Porträt von Matti Koenis"
                  className="w-full drop-shadow-2xl"
                />
              </div>
            </motion.div>

            {/* Rechte Spalte: Highlights */}
            <div className="space-y-4">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.titleKey}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="rounded-2xl border border-white/15 bg-white/7 p-5 backdrop-blur-sm transition hover:border-white/30 hover:bg-white/12"
                  >
                    <div className="mb-3 inline-flex rounded-xl border border-white/20 bg-white/10 p-2.5 text-white/85">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="text-base font-semibold text-white">{t(item.titleKey)}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/72">{t(item.textKey)}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </motion.section>

        <motion.section
          id="skills"
          variants={section}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8"
        >
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-blue-200/70">{t("skills.kicker")}</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                {t("skills.title")}
              </h2>
            </div>
            <p className="max-w-xl text-white/60">{t("skills.lead")}</p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.key}>
                  <div className="mb-2 flex items-center justify-between text-sm md:text-base">
                    <span className="font-medium text-white/90">{t(skill.key)}</span>
                    <span className="text-white/60">{skill.value}%</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-white/8">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.value}%` }}
                      viewport={{ once: false }}
                      transition={{ duration: 1, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full bg-gradient-to-r from-blue-400 via-cyan-300 to-white"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="experience"
          variants={section}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-24 lg:px-8"
        >
          <div className="mb-16 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-blue-200/70">{t("experience.kicker")}</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              {t("experience.title")}
            </h2>
          </div>

          <div className="relative space-y-0">
            {/* Vertikale Linie */}
            <div className="absolute left-3 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500/20 via-blue-500/50 to-cyan-400/20 md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.titleKey}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-row gap-6 pl-10 md:gap-8 md:pl-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline Punkt */}
                  <div className="absolute left-3 top-8 -translate-x-1/2 md:left-1/2 md:top-6">
                    <div className="h-5 w-5 rounded-full border-4 border-slate-950 bg-blue-400 shadow-lg shadow-blue-500/50" />
                  </div>

                  {/* Inhaltskarte */}
                  <div className={`w-full md:w-[calc(50%-1.5rem)] ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="rounded-xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-6 backdrop-blur-sm transition hover:border-blue-400/40 hover:bg-white/8">
                      <div className="mb-3 inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-semibold text-blue-200">
                        {t(exp.periodKey)}
                      </div>
                      <h3 className="text-xl font-semibold leading-tight">{t(exp.titleKey)}</h3>
                      <p className="mt-4 leading-6 text-white/70">{t(exp.descriptionKey)}</p>
                      <div className={`mt-5 flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs text-white/60"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="portfolio"
          variants={section}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8"
        >
          <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.38em] text-white/55">{t("portfolio.kicker")}</p>
              <h2 className="mt-4 text-3xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl">
                {t("portfolio.title")}
                <span className="text-white/60">&nbsp;{t("portfolio.titleMuted")}</span>
              </h2>

              <div className="mt-6 max-w-xl border-l border-white/20 pl-5">
                <p className="text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                  {t("portfolio.lead")}
                  <span className="text-white/60">&nbsp;{t("portfolio.leadMuted")}</span>
                </p>
              </div>

              <div className="mt-6 flex">
                <a
                  href="https://github.com/matti24"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-white/35 hover:bg-white/8"
                >
                  {t("portfolio.ctaGithub")}
                  <ArrowRight className="h-4 w-4 text-white/60 transition group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              {[
                {
                  icon: Briefcase,
                  accent: "from-blue-400/18 via-blue-400/8 to-transparent",
                  titleKey: "portfolio.cards.bring.title",
                  textKey: "portfolio.cards.bring.text",
                },
                {
                  icon: Sparkles,
                  accent: "from-cyan-300/18 via-cyan-300/8 to-transparent",
                  titleKey: "portfolio.cards.standFor.title",
                  textKey: "portfolio.cards.standFor.text",
                },
                {
                  icon: Users,
                  accent: "from-white/14 via-white/6 to-transparent",
                  titleKey: "portfolio.cards.social.title",
                  textKey: "portfolio.cards.social.text",
                },
              ].map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.titleKey}
                    className="group relative overflow-hidden rounded-[1.75rem] border border-white/12 bg-white/4 p-6 backdrop-blur-sm transition hover:border-white/25 hover:bg-white/7"
                  >
                    <div
                      className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${card.accent} opacity-0 transition group-hover:opacity-100`}
                    />
                    <div className="relative">
                      <div className="mb-4 inline-flex rounded-2xl border border-white/12 bg-white/5 p-3 text-white/90">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-semibold text-white sm:text-xl">{t(card.titleKey)}</h3>
                      <p className="mt-3 leading-7 text-white/72">{t(card.textKey)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          variants={section}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 md:pb-24 md:pt-10 lg:px-8"
        >
          <div className="overflow-hidden rounded-[2rem] border border-white/30 bg-white/8 backdrop-blur-sm">
            <div className="grid gap-8 p-8 md:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.28em] text-blue-200/70">{t("contact.kicker")}</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                  {t("contact.title")}
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">{t("contact.lead")}</p>
              </div>

              <div className="grid gap-4">
                <a
                  href="mailto:matti@koenis.ch"
                  className="group flex items-center justify-between rounded-[1.5rem] border border-white/30 bg-white/10 p-5 transition hover:border-white/60 hover:bg-white/20"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-2xl bg-white/15 p-3 text-white">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-white/50">{t("contact.email")}</p>
                      <p className="font-medium text-white/90">matti@koenis.ch</p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-white/50 transition group-hover:translate-x-1" />
                </a>

                <a
                  href="https://github.com/matti24"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-[1.5rem] border border-white/30 bg-white/10 p-5 transition hover:border-white/60 hover:bg-white/20"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-2xl bg-white/15 p-3 text-white">
                      <Github className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-white/50">{t("common.github")}</p>
                      <p className="font-medium text-white/90">github.com/matti24</p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-white/50 transition group-hover:translate-x-1" />
                </a>

                <a
                  href="https://www.linkedin.com/in/matti-koenis-4b6462334/"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-[1.5rem] border border-white/30 bg-white/10 p-5 transition hover:border-white/60 hover:bg-white/20"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-2xl bg-white/15 p-3 text-white">
                      <Linkedin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-white/50">{t("common.linkedin")}</p>
                      <p className="font-medium text-white/90">Matti Koenis</p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-white/50 transition group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            <div className="border-t border-white/10 px-8 py-5 text-sm text-white/40 md:px-10 lg:px-12">
              {t("footer.credit")}
            </div>
          </div>
        </motion.section>
      </main>

      <footer id="contact" className="border-t border-white/10 bg-slate-950 px-4 py-20 sm:px-6 md:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-blue-200/70 mb-6">{t("footer.kicker")}</p>
            <h2 className="text-4xl md:text-6xl font-semibold leading-tight mb-8">
              {t("footer.title")}
            </h2>
            <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto">
              {t("footer.lead")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:matti@koenis.ch"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-slate-950 transition hover:scale-[1.02]"
              >
                <Mail className="h-5 w-5" />
                {t("footer.ctaEmail")}
              </a>
              <a
                href="https://www.linkedin.com/in/matti-koenis-4b6462334/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-white transition hover:border-blue-400/40 hover:bg-blue-500/10"
              >
                <Linkedin className="h-5 w-5" />
                {t("footer.ctaLinkedIn")}
              </a>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}