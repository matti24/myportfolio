import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Github,
  Linkedin,
  Mail,
  Briefcase,
  Languages,
  ChevronDown,
} from "lucide-react";


const profileImage = "/pb.png";

const skills = [
  { name: "Soziale Stärke", value: 100 },
  { name: "Teamarbeit", value: 80 },
  { name: "Selbständiges Arbeiten", value: 80 },
  { name: "JavaScript", value: 60 },
  { name: "CSS", value: 60 },
  { name: "TypeScript", value: 50 },
  { name: "SQL", value: 50 },
  { name: "Java", value: 40 },
];

const highlights = [
  {
    title: "Applikationsentwickler in Ausbildung",
    text: "Ich entwickle mich bei Swisscom laufend weiter und arbeite an sauberen, modernen und praxisnahen Lösungen.",
    icon: Briefcase,
  },
  {
    title: "Sprachen",
    text: "Deutsch, Holländisch und Schwedisch sowie Schulkenntnisse in Englisch über 9 Jahre.",
    icon: Languages,
  },
  {
    title: "Mindset",
    text: "Konzentriert, selbständig, teamstark und mit echtem Interesse an Wirtschaft, Computern und neuen Applikationen.",
    icon: Code2,
  },
];

const hobbies = ["Tennis", "Fitness", "Skifahren"];

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
  return (
    <div className="min-h-screen bg-slate-950 text-white [scroll-behavior:smooth]">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.16),transparent_20%),linear-gradient(180deg,#020617_0%,#0f172a_45%,#020617_100%)]" />
        <div className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[24rem] w-[24rem] rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="text-sm font-semibold uppercase tracking-[0.24em] text-white/90">
            Matti Koenis
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#about" className="transition hover:text-white">Über mich</a>
            <a href="#skills" className="transition hover:text-white">Skills</a>
            <a href="#portfolio" className="transition hover:text-white">Portfolio</a>
            <a href="#contact" className="transition hover:text-white">Kontakt</a>
          </nav>

          <a
            href="mailto:matti@koenis.ch"
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-blue-400/40 hover:bg-blue-500/10"
          >
            Kontakt
          </a>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto flex min-h-[calc(100vh-73px)] max-w-7xl items-center px-6 py-16 lg:px-8">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div
              variants={section}
              initial="hidden"
              animate="show"
              className="max-w-3xl"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm text-blue-100">
                <span className="h-2 w-2 rounded-full bg-blue-400" />
                Applikationsentwickler in Ausbildung bei Swisscom
              </div>

              <h1 className="text-5xl font-semibold leading-[1.02] tracking-tight text-white md:text-7xl">
                Clean Code.
                <br />
                Starke Teamarbeit.
                <br />
                Klare Lösungen.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
                Ich bin Matti Koenis und entwickle mich in der Informatik mit Fokus auf moderne
                Applikationen, selbständiges Arbeiten und starke Zusammenarbeit im Team.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#portfolio"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
                >
                  Portfolio ansehen
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
                >
                  Kontakt aufnehmen
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <p className="text-sm text-white/50">Fokus</p>
                  <p className="mt-2 text-xl font-semibold">Applikationen</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <p className="text-sm text-white/50">Arbeitsstil</p>
                  <p className="mt-2 text-xl font-semibold">Selbständig & teamstark</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <p className="text-sm text-white/50">Interessen</p>
                  <p className="mt-2 text-xl font-semibold">Wirtschaft & Tech</p>
                </div>
              </div>

              <a
                href="#about"
                className="mt-10 inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white/80"
              >
                Mehr entdecken
                <ChevronDown className="h-4 w-4" />
              </a>
            </motion.div>

            <motion.div
              variants={section}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.15 }}
              className="relative mx-auto w-full max-w-md"
            >
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-400/30 via-cyan-300/10 to-transparent blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl shadow-blue-950/50 backdrop-blur-xl">
                <img
                  src={profileImage}
                  alt="Porträt von Matti Koenis"
                  className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        <motion.section
          id="about"
          variants={section}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto max-w-7xl px-6 py-24 lg:px-8"
        >
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-blue-200/70">Über mich</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Professionell, fokussiert und offen für Neues.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <p className="text-lg leading-8 text-white/75">
                Ich bin derzeit in der Ausbildung zum Applikationsentwickler bei Swisscom. Meine
                Stärken liegen in der konzentrierten, selbständigen und teamstarken Arbeit. Ich
                interessiere mich besonders für Wirtschaft, Computer und die Entwicklung neuer
                Applikationen.
              </p>
              <p className="mt-6 text-lg leading-8 text-white/75">
                Durch meine Sprachkenntnisse in Deutsch, Holländisch und Schwedisch sowie meine
                Schulkenntnisse in Englisch kann ich in verschiedenen Situationen sicher
                kommunizieren und mich schnell in neue Umfelder einarbeiten.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {hobbies.map((hobby) => (
                  <span
                    key={hobby}
                    className="rounded-full border border-white/10 bg-slate-900/80 px-4 py-2 text-sm text-white/75"
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-7 backdrop-blur-sm"
                  >
                    <div className="mb-5 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3 text-blue-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 leading-7 text-white/65">{item.text}</p>
                  </div>
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
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-7xl px-6 py-24 lg:px-8"
        >
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-blue-200/70">Skills</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Meine Stärken in Prozent.
              </h2>
            </div>
            <p className="max-w-xl text-white/60">
              Eine Mischung aus sozialer Stärke, Teamfähigkeit und technischem Verständnis bildet
              meine Basis für gute Zusammenarbeit und saubere Entwicklung.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="mb-2 flex items-center justify-between text-sm md:text-base">
                    <span className="font-medium text-white/90">{skill.name}</span>
                    <span className="text-white/60">{skill.value}%</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-white/8">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.value}%` }}
                      viewport={{ once: true }}
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
          id="portfolio"
          variants={section}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto max-w-7xl px-6 py-24 lg:px-8"
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-500/15 to-cyan-400/5 p-8 backdrop-blur-sm">
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-blue-200/70">Portfolio</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Bereit für den nächsten Schritt nach der Lehre.
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/70">
                Diese Seite zeigt, wie ich mich positioniere: professionell, klar, modern und mit
                echtem Interesse an guter Zusammenarbeit. Ich suche Perspektiven, in denen ich mich
                weiterentwickeln und aktiv mitgestalten kann.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
                <h3 className="text-xl font-semibold">Was ich mitbringe</h3>
                <p className="mt-3 leading-7 text-white/65">
                  Eine saubere Arbeitsweise, Konzentration, Selbständigkeit und Teamgeist. Dazu
                  technisches Interesse und der Wille, mich laufend weiterzuentwickeln.
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
                <h3 className="text-xl font-semibold">Wofür ich stehe</h3>
                <p className="mt-3 leading-7 text-white/65">
                  Für klare Kommunikation, Verlässlichkeit und moderne Applikationen mit einem
                  sauberen Auftritt.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          variants={section}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto max-w-7xl px-6 pb-24 pt-10 lg:px-8"
        >
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="grid gap-8 p-8 md:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.28em] text-blue-200/70">Kontakt</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                  Lass uns vernetzen.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
                  Für Austausch, Chancen nach der Lehre oder einen ersten Kontakt bin ich direkt
                  erreichbar.
                </p>
              </div>

              <div className="grid gap-4">
                <a
                  href="mailto:matti@koenis.ch"
                  className="group flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-5 transition hover:border-blue-400/40 hover:bg-slate-900"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-2xl bg-white/5 p-3 text-blue-200">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-white/45">E-Mail</p>
                      <p className="font-medium text-white/90">matti@koenis.ch</p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-white/35 transition group-hover:translate-x-1" />
                </a>

                <a
                  href="https://github.com/matti24"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-5 transition hover:border-blue-400/40 hover:bg-slate-900"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-2xl bg-white/5 p-3 text-blue-200">
                      <Github className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-white/45">GitHub</p>
                      <p className="font-medium text-white/90">github.com/matti24</p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-white/35 transition group-hover:translate-x-1" />
                </a>

                <a
                  href="https://www.linkedin.com/in/matti-koenis-4b6462334/"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-5 transition hover:border-blue-400/40 hover:bg-slate-900"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-2xl bg-white/5 p-3 text-blue-200">
                      <Linkedin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-white/45">LinkedIn</p>
                      <p className="font-medium text-white/90">Matti Koenis</p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-white/35 transition group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            <div className="border-t border-white/10 px-8 py-5 text-sm text-white/40 md:px-10 lg:px-12">
              Matti Koenis · Applikationsentwickler in Ausbildung
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}