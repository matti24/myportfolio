import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, Check, Copy, Sparkles } from "lucide-react";
import { Picture } from "../components/Picture.jsx";
import { CONTACT } from "../content/projects.js";

const STUDIO_COLOR = { base: "studio-color", widths: [480, 800, 1120], width: 1120, height: 1400 };

const GREETINGS = [
  { word: "Grüezi", lang: "DE · Zürich" },
  { word: "Hoi", lang: "NL · Nederlands" },
  { word: "Hej", lang: "SV · Svenska" },
  { word: "Hello", lang: "EN · English" },
];

const INLINE_NOTES = {
  default: {
    tag: "Swisscom · Zürich",
    caption: "2. Lehrjahr Applikationsentwicklung EFZ — ab Aug 2026 Host im Web-Team Halo.",
  },
  swisscom: {
    tag: "Praxis bei Swisscom",
    caption: "Vier Rotationen von IT-Support & Codemix über Power Platform DevOps bis zur Web-Teamkoordination.",
  },
  languages: {
    tag: "4 Sprachen im Alltag",
    caption: "Deutsch (Muttersprache), Niederländisch, Englisch (9 J. + IT) und Schwedisch.",
  },
  balance: {
    tag: "Interessen & Ausgleich",
    caption: "Wirtschaft, Finance & neue Apps – und als sportlicher Gegenpol Tennis, Gym, Skifahren & Joggen.",
  },
};

const STATIONS = [
  {
    id: "halo",
    period: "Ab Aug 2026",
    role: "Team Halo — Host",
    org: "Swisscom · Zürich / Bern",
    summary: "Teamlead-Rolle im Web-Development-Team: Koordination, Planung, Zusammenarbeit & moderne Weblösungen.",
    activeSkills: ["React", "TypeScript", "JavaScript", "CSS & Tailwind", "Node.js", "Git & GitHub", "VS Code", "Teamarbeit", "Klare Kommunikation", "Selbständiges Arbeiten", "Soziale Stärke"],
  },
  {
    id: "power",
    period: "2025 – 2026",
    role: "Power Platform DevOps",
    org: "Swisscom · Zürich",
    summary: "Entwicklung, Automatisierung und Betrieb von PowerApps-, Power-BI- und SharePoint-Lösungen nach DevOps-Methodik.",
    activeSkills: ["PowerApps Canvas", "Power Automate", "SharePoint", "MS Power Platform", "Power BI", "Docker", "Git & GitHub", "Selbständiges Arbeiten", "Lösungsorientierung", "Klare Kommunikation"],
  },
  {
    id: "codemix",
    period: "Feb – Jul 2025",
    role: "Codemix Programmierprojekt",
    org: "Swisscom · Zürich",
    summary: "Strukturierte Einführung in Softwareentwicklung mit Fokus auf saubere Web-Grundlagen und praktische Anwendung.",
    activeSkills: ["JavaScript", "CSS & Tailwind", "Git & GitHub", "VS Code", "Selbständiges Arbeiten", "Lösungsorientierung", "Teamarbeit"],
  },
  {
    id: "future",
    period: "2024 – 2025",
    role: "Future Work Specialist",
    org: "Swisscom · Zürich / Bern",
    summary: "Gestaltung zukünftiger Arbeitsmodelle sowie direkter IT-Support im Floorwalking nah an den Mitarbeitenden.",
    activeSkills: ["SharePoint", "Soziale Stärke", "Teamarbeit", "Klare Kommunikation", "Lösungsorientierung"],
  },
  {
    id: "modules",
    period: "Laufend",
    role: "Berufsfachschule & Eigene Apps",
    org: "Zürich · Praxisvertiefung",
    summary: "Vertiefung in Backend-Architektur, relationalen/NoSQL-Datenbanken und eigenen Web-Applikationen.",
    activeSkills: ["React", "TypeScript", "Node.js", "Java", "SQL", "MariaDB", "MongoDB", "Docker", "IntelliJ IDEA", "VS Code", "Git & GitHub"],
  },
];

const SKILL_CLUSTERS = [
  {
    label: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "CSS & Tailwind", "PowerApps Canvas"],
  },
  {
    label: "Backend & Automation",
    items: ["Node.js", "Power Automate", "Java"],
  },
  {
    label: "Datenbanken",
    items: ["SharePoint", "SQL", "MongoDB", "MariaDB"],
  },
  {
    label: "Cloud & Tools",
    items: ["MS Power Platform", "Docker", "VS Code", "Git & GitHub", "IntelliJ IDEA", "Power BI"],
  },
  {
    label: "Arbeitsweise & Soziales",
    items: ["Soziale Stärke", "Teamarbeit", "Klare Kommunikation", "Selbständiges Arbeiten", "Lösungsorientierung"],
  },
];

function ZurichClock() {
  const [time, setTime] = useState("ZRH · CET");

  useEffect(() => {
    const update = () => {
      try {
        const formatted = new Intl.DateTimeFormat("de-CH", {
          timeZone: "Europe/Zurich",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }).format(new Date());
        setTime(`ZRH ${formatted}`);
      } catch {
        setTime("ZRH · CH");
      }
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return <span className="font-mono text-[11px] tabular-nums text-[#737373]">{time}</span>;
}

export function DirectionOne() {
  const [greetIdx, setGreetIdx] = useState(0);
  const [hoverTopic, setHoverTopic] = useState("default");
  const [selectedStation, setSelectedStation] = useState(null);
  const [copied, setCopied] = useState(false);

  const note = INLINE_NOTES[hoverTopic] || INLINE_NOTES.default;
  const activeStationObj = STATIONS.find((s) => s.id === selectedStation) || null;
  const highlightedSkills = activeStationObj ? new Set(activeStationObj.activeSkills) : null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${CONTACT.email}`;
    }
  };

  return (
    <div className="min-h-screen bg-[#FCFCFC] text-[#111111] selection:bg-[#0044FF] selection:text-white">
      {/* Ultraleichte Status-Kopfzeile nach Vorbild moderner Design-Engineer-Portfolios */}
      <header className="mx-auto flex max-w-[74rem] items-center justify-between px-5 pt-7 pb-4 sm:px-10">
        <a href="#da-top" className="group inline-flex items-center gap-2.5 text-sm font-medium tracking-tight text-[#111111]">
          <span
            aria-hidden="true"
            className="h-2 w-2 rounded-full bg-[#0044FF] transition-transform duration-300 group-hover:scale-125"
          />
          <span>Matti Koenis</span>
          <span className="hidden text-[#737373] sm:inline">· Applikationsentwickler</span>
        </a>

        <div className="flex items-center gap-5">
          <ZurichClock />
          <nav aria-label="Richtung A Navigation" className="hidden items-center gap-5 text-[13px] text-[#666666] md:flex">
            <a href="#da-top" className="transition-colors hover:text-[#111111]">
              Profil
            </a>
            <a href="#da-craft" className="transition-colors hover:text-[#111111]">
              Erfahrung &amp; Skills
            </a>
            <button
              type="button"
              onClick={handleCopy}
              className="group relative inline-flex h-7 items-center overflow-hidden rounded-full border border-black/10 bg-white px-3 font-mono text-[11px] font-medium text-[#111111] shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition hover:border-[#0044FF]/40"
            >
              <span
                className={`inline-flex items-center gap-1.5 transition-transform duration-300 ${
                  copied ? "-translate-y-7 opacity-0" : "translate-y-0 opacity-100"
                }`}
              >
                <Copy aria-hidden="true" className="h-3 w-3 text-[#737373]" />
                {CONTACT.email}
              </span>
              <span
                aria-live="polite"
                className={`absolute inset-0 inline-flex items-center justify-center gap-1 text-[#0044FF] transition-transform duration-300 ${
                  copied ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"
                }`}
              >
                <Check aria-hidden="true" className="h-3 w-3" />
                Kopiert
              </span>
            </button>
          </nav>
        </div>
      </header>

      {/* ABSCHNITT 1: RUHIGER, PERSÖNLICHER DESIGN-ENGINEER-EINSTIEG */}
      <section id="da-top" aria-labelledby="da-hero-heading" className="mx-auto max-w-[74rem] px-5 pt-10 pb-20 sm:px-10 sm:pt-16 sm:pb-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-12">
          {/* Linke 7 Spalten: Konzentrierte Typografie mit interaktiven Inline-Bezügen */}
          <div className="lg:col-span-7">
            <button
              type="button"
              onClick={() => setGreetIdx((i) => (i + 1) % GREETINGS.length)}
              title="Klicken für nächste Sprache"
              className="group inline-flex items-center gap-2.5 rounded-full border border-black/[0.08] bg-white px-3 py-1 text-xs text-[#595959] shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition hover:border-[#0044FF]/35 hover:text-[#111111]"
            >
              <span className="font-medium text-[#0044FF]">{GREETINGS[greetIdx].word}</span>
              <span aria-hidden="true" className="text-black/20">/</span>
              <span className="font-mono text-[11px]">{GREETINGS[greetIdx].lang}</span>
            </button>

            <h1
              id="da-hero-heading"
              className="mt-6 text-[clamp(2.1rem,1.35rem+2.6vw,3.45rem)] leading-[1.08] font-medium tracking-[-0.038em] text-[#111111]"
            >
              Ich bin Matti Koenis — ich baue saubere, verlässliche Applikationen mit Sinn für Struktur und Detail.
            </h1>

            <p className="mt-6 max-w-[54ch] text-[1.0625rem] leading-[1.72] text-[#525252]">
              Derzeit in der Ausbildung zum Applikationsentwickler bei{" "}
              <button
                type="button"
                onMouseEnter={() => setHoverTopic("swisscom")}
                onFocus={() => setHoverTopic("swisscom")}
                onClick={() => setHoverTopic("swisscom")}
                className="inline border-b border-[#0044FF]/45 font-medium text-[#111111] transition-colors hover:border-[#0044FF] hover:text-[#0044FF]"
              >
                Swisscom in Zürich
              </button>{" "}
              (ab August 2026 als Host im Web-Team Halo). Aufgewachsen mit{" "}
              <button
                type="button"
                onMouseEnter={() => setHoverTopic("languages")}
                onFocus={() => setHoverTopic("languages")}
                onClick={() => setHoverTopic("languages")}
                className="inline border-b border-black/25 font-medium text-[#111111] transition-colors hover:border-[#0044FF] hover:text-[#0044FF]"
              >
                vier Sprachen
              </button>
              , neugierig auf{" "}
              <button
                type="button"
                onMouseEnter={() => setHoverTopic("balance")}
                onFocus={() => setHoverTopic("balance")}
                onClick={() => setHoverTopic("balance")}
                className="inline border-b border-black/25 font-medium text-[#111111] transition-colors hover:border-[#0044FF] hover:text-[#0044FF]"
              >
                Wirtschaft, Strategie &amp; Sport
              </button>{" "}
              – und bereit für den nächsten Schritt nach der Lehre.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#da-craft"
                className="inline-flex min-h-10 items-center gap-2 rounded-full bg-[#111111] px-5 text-[13.5px] font-medium text-white transition hover:bg-[#0044FF]"
              >
                <span>Erfahrung &amp; Skills erkunden</span>
                <ArrowDown aria-hidden="true" className="h-3.5 w-3.5" />
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center gap-1.5 px-2 text-[13.5px] font-medium text-[#525252] transition hover:text-[#111111]"
              >
                <span>LinkedIn</span>
                <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
              </a>
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center gap-1.5 px-2 text-[13.5px] font-medium text-[#525252] transition hover:text-[#111111]"
              >
                <span>GitHub</span>
                <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Rechte 5 Spalten: Ruhig inszeniertes Original-Studioporträt mit dynamischer Kontext-Legende */}
          <div className="lg:col-span-5">
            <figure className="mx-auto max-w-[23rem] lg:ml-auto">
              <div className="overflow-hidden rounded-[10px] bg-[#1E232B] ring-1 ring-black/10 shadow-[0_24px_48px_-24px_rgba(0,0,0,0.18)]">
                <div className="aspect-[4/4.8] w-full overflow-hidden">
                  <Picture
                    image={STUDIO_COLOR}
                    alt="Porträt von Matti Koenis"
                    eager
                    sizes="(min-width: 1024px) 23rem, 90vw"
                    className="h-full w-full object-cover object-top transition-transform duration-700 ease-out hover:scale-[1.015]"
                  />
                </div>
              </div>

              <figcaption
                aria-live="polite"
                className="mt-3.5 flex items-start justify-between gap-4 border-t border-black/[0.08] pt-3 text-xs"
              >
                <div>
                  <span className="font-mono text-[10.5px] font-medium tracking-[0.06em] text-[#0044FF] uppercase">
                    {note.tag}
                  </span>
                  <p className="mt-0.5 leading-relaxed text-[#525252]">{note.caption}</p>
                </div>
                <Sparkles aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0044FF]/70" />
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Offene 4-Spalten-Faktenlinie ohne Boxen oder Kärtchen */}
        <dl className="mt-16 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-black/[0.08] pt-8 sm:grid-cols-4">
          <div>
            <dt className="font-mono text-[11px] text-[#737373]">01 · Fokus</dt>
            <dd className="mt-1.5 text-sm font-medium text-[#111111]">Moderne Web-Apps &amp; Power Platform</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] text-[#737373]">02 · Arbeitsstil</dt>
            <dd className="mt-1.5 text-sm font-medium text-[#111111]">Konzentriert, eigenständig &amp; teamstark</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] text-[#737373]">03 · Sprachen</dt>
            <dd className="mt-1.5 text-sm font-medium text-[#111111]">Deutsch, Niederländisch, Englisch, Schwedisch</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] text-[#737373]">04 · Ausgleich</dt>
            <dd className="mt-1.5 text-sm font-medium text-[#111111]">Tennis, Fitness, Skifahren &amp; Joggen</dd>
          </div>
        </dl>
      </section>

      {/* ABSCHNITT 2: SIBLING-DIMMING ERFAHRUNGS-SPUR & VERBUNDENER SKILL-INDEX */}
      <section
        id="da-craft"
        aria-labelledby="da-craft-heading"
        className="border-t border-black/[0.08] bg-white pt-20 pb-32 sm:pt-24 sm:pb-36"
      >
        <div className="mx-auto max-w-[74rem] px-5 sm:px-10">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-[11px] font-medium tracking-[0.08em] text-[#0044FF] uppercase">
                Erfahrung &amp; Kompetenzen
              </p>
              <h2
                id="da-craft-heading"
                className="mt-2 text-[clamp(1.65rem,1.25rem+1.6vw,2.4rem)] leading-[1.12] font-medium tracking-[-0.03em]"
              >
                Wo ich gelernt habe — und womit ich baue.
              </h2>
            </div>

            {selectedStation ? (
              <button
                type="button"
                onClick={() => setSelectedStation(null)}
                className="self-start font-mono text-xs text-[#0044FF] underline underline-offset-4 sm:self-auto"
              >
                Alle 23 Skills einblenden
              </button>
            ) : (
              <p className="font-mono text-xs text-[#737373]">
                Station anklicken oder überfahren zum Filtern
              </p>
            )}
          </div>

          <div className="mt-12 grid gap-14 lg:grid-cols-12 lg:gap-12">
            {/* Links (6 Spalten): Fokus-Liste mit Sibling-Dimming */}
            <div className="lg:col-span-6">
              <h3 className="font-mono text-[11px] tracking-[0.08em] text-[#737373] uppercase">
                Praxisstationen bei Swisscom &amp; Ausbildung
              </h3>

              <ul className="group/list mt-4 divide-y divide-black/[0.07] border-y border-black/[0.07]">
                {STATIONS.map((st) => {
                  const isPinned = selectedStation === st.id;
                  return (
                    <li
                      key={st.id}
                      className={`transition-opacity duration-300 ${
                        selectedStation && !isPinned
                          ? "opacity-40 hover:opacity-90"
                          : "group-hover/list:opacity-45 hover:!opacity-100"
                      }`}
                    >
                      <button
                        type="button"
                        aria-pressed={isPinned}
                        onClick={() => setSelectedStation(isPinned ? null : st.id)}
                        onMouseEnter={() => setSelectedStation(st.id)}
                        className="w-full py-5 text-left"
                      >
                        <div className="flex items-baseline justify-between gap-4">
                          <span className="flex items-center gap-2.5 text-[15.5px] font-medium tracking-tight text-[#111111]">
                            <span
                              aria-hidden="true"
                              className={`h-1.5 w-1.5 rounded-full transition-colors ${
                                isPinned ? "bg-[#0044FF]" : "bg-black/20"
                              }`}
                            />
                            {st.role}
                          </span>
                          <span className="shrink-0 font-mono text-xs tabular-nums text-[#737373]">{st.period}</span>
                        </div>
                        <p className="mt-1.5 pl-4 text-[13.5px] leading-relaxed text-[#595959]">{st.summary}</p>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Rechts (6 Spalten): Ruhiger, offener 18+5 Skill-Index ohne Kärtchen */}
            <div
              className="lg:col-span-6"
              onMouseLeave={() => {
                /* Auswahl bleibt bestehen bis man umschaltet oder zurücksetzt */
              }}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="font-mono text-[11px] tracking-[0.08em] text-[#737373] uppercase">
                  Werkzeugkasten &amp; Arbeitsweise (18 + 5)
                </h3>
                {activeStationObj ? (
                  <span className="font-mono text-[11px] font-medium text-[#0044FF]">
                    Aktiv in: {activeStationObj.role}
                  </span>
                ) : null}
              </div>

              <div className="mt-4 space-y-6 border-t border-black/[0.07] pt-5">
                {SKILL_CLUSTERS.map((cluster) => (
                  <div key={cluster.label} className="grid gap-2 sm:grid-cols-12 sm:items-baseline">
                    <h4 className="font-mono text-[11px] text-[#737373] sm:col-span-4">{cluster.label}</h4>
                    <ul className="flex flex-wrap gap-x-4 gap-y-2 sm:col-span-8">
                      {cluster.items.map((skill) => {
                        const isMatch = !highlightedSkills || highlightedSkills.has(skill);
                        return (
                          <li
                            key={skill}
                            className={`inline-flex items-center gap-1.5 text-[14px] transition-all duration-300 ${
                              isMatch
                                ? highlightedSkills
                                  ? "font-medium text-[#0044FF]"
                                  : "text-[#171717]"
                                : "text-black/22"
                            }`}
                          >
                            {highlightedSkills && isMatch ? (
                              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[#0044FF]" />
                            ) : null}
                            <span>{skill}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Ruhiges Abschluss-Statement („Bereit für den nächsten Schritt nach der Lehre“) */}
              <div className="mt-10 border-t border-black/[0.07] pt-6">
                <p className="text-[13.5px] leading-[1.7] text-[#525252]">
                  <strong className="font-medium text-[#111111]">Wofür ich stehe:</strong> Klare Kommunikation,
                  Verlässlichkeit und moderne Applikationen mit sauberem Auftritt – ich suche nach der Lehre ein Umfeld,
                  in dem ich Verantwortung übernehmen und mich gezielt weiterentwickeln kann.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
