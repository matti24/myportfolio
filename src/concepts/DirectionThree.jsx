import { useState } from "react";
import { ArrowDown, ArrowUpRight, Check, Copy } from "lucide-react";
import { Picture } from "../components/Picture.jsx";
import { CONTACT } from "../content/projects.js";

const STUDIO_COLOR = { base: "studio-color", widths: [480, 800, 1120], width: 1120, height: 1400 };

const PERSPECTIVES = [
  {
    id: "dev",
    code: "01 // ENTWICKLER",
    kicker: "APPLIKATIONSENTWICKLUNG · WEB & ENTERPRISE",
    headline: "Sauberer Code für Applikationen, die im Alltag zuverlässig funktionieren.",
    body: "Bei Swisscom entwickle ich praxisnahe Geschäftslösungen mit der Microsoft Power Platform und moderne Web-Applikationen mit React, TypeScript und sauberer Schnittstellen-Architektur.",
    specs: [
      ["KERN-STACK", "React · TypeScript · Power Platform"],
      ["DATEN & LOGIK", "SharePoint · SQL · Node.js · Java"],
      ["QUALITÄT", "Strukturiert, wartbar & dokumentiert"],
    ],
    frameNote: "MODUS 01 — ENGINEERING & APPLIKATIONEN",
  },
  {
    id: "team",
    code: "02 // TEAM & ROLLE",
    kicker: "KOORDINATION · ZUSAMMENARBEIT BEI SWISSCOM",
    headline: "Selbständig in der Umsetzung, verbindlich und klar im Team.",
    body: "Ab August 2026 übernehme ich als Host im Team Halo eine Teamlead-Rolle im Web Development. Mir liegt daran, Verantwortung zu übernehmen, klar zu kommunizieren und gemeinsam Ergebnisse ins Ziel zu bringen.",
    specs: [
      ["AKTUELLE ROLLE", "Ab Aug ’26: Team Halo — Host"],
      ["ARBEITSWEISE", "Fokussiert, eigenständig & teamstark"],
      ["SPRACHEN", "DE · NL · EN · SV im direkten Austausch"],
    ],
    frameNote: "MODUS 02 — TEAMKOORDINATION & HALTUNG",
  },
  {
    id: "person",
    code: "03 // MENSCH & ANTRIEB",
    kicker: "PERSÖNLICHKEIT · INTERESSEN & AUSGLEICH",
    headline: "Neugierig auf Wirtschaft & Strategie — ausgeglichen durch Sport.",
    body: "Viersprachig in der Region Zürich zuhause. Neben Informatik beschäftige ich mich intensiv mit Finanzmärkten, Wirtschaft und neuen digitalen Konzepten – und hole mir Energie beim Tennis, im Gym, auf Ski oder beim Laufen.",
    specs: [
      ["INTERESSEN", "Wirtschaft, Finance & neue Apps"],
      ["AUSGLEICH", "Tennis · Fitness · Skifahren · Joggen"],
      ["PERSPEKTIVE", "Bereit für den Schritt nach der Lehre"],
    ],
    frameNote: "MODUS 03 — HINTERGRUND & AUSGLEICH",
  },
];

const CONTEXTS = [
  {
    id: "all",
    label: "Alle Stationen",
    period: "2024 – Heute · Gesamtprofil",
    role: "Alle 18 Informatik-Skills & 5 Sozialkompetenzen im Überblick",
    desc: "Wähle eine Praxisstation bei Swisscom oder klicke auf eine einzelne Fähigkeit, um die direkte Verbindung zwischen Erfahrung und Werkzeug zu sehen.",
  },
  {
    id: "halo",
    label: "Team Halo – Host",
    period: "Ab Aug 2026 · Zürich / Bern",
    role: "Teamlead-Rolle im Web-Development-Team bei Swisscom",
    desc: "Koordination, Planung, Zusammenarbeit im Team und Umsetzung moderner Weblösungen im Frontend.",
  },
  {
    id: "power",
    label: "Power Platform DevOps",
    period: "Aug 2025 – Aug 2026 · Zürich",
    role: "Business-Engineering & DevOps auf der Microsoft Power Platform",
    desc: "Entwicklung, Automatisierung und Betrieb von Lösungen mit PowerApps, Power Automate, Power BI und SharePoint.",
  },
  {
    id: "codemix",
    label: "Codemix Projekt",
    period: "Feb 2025 – Jul 2025 · Zürich",
    role: "Strukturiertes Programmierprojekt bei Swisscom",
    desc: "Aufbau sauberer Grundlagen in Web-Technologien, Programmierlogik und eigenständiger Projektarbeit.",
  },
  {
    id: "futurework",
    label: "Future Work Specialist",
    period: "Aug 2024 – Feb 2025 · Zürich / Bern",
    role: "Zukünftige Arbeitsmodelle & direkter IT-Support",
    desc: "Floorwalking-Support, direkte Kommunikation mit Mitarbeitenden und lösungsorientierte Hilfe im Alltag.",
  },
  {
    id: "apps",
    label: "Module & Eigene Apps",
    period: "Laufend · Berufsfachschule & Freizeit",
    role: "Vertiefung in Full-Stack, Datenbanken & Architektur",
    desc: "Praktische Umsetzung mit React, TypeScript, Node.js, Java/Quarkus, SQL/NoSQL und Docker.",
  },
];

const MATRIX_GROUPS = [
  {
    title: "Frontend",
    skills: [
      { name: "React", stations: ["halo", "apps"], detail: "Komponentenbasierte Web-Applikationen & interaktive UIs" },
      { name: "TypeScript", stations: ["halo", "apps"], detail: "Typsichere Interfaces, APIs und wartbare Frontend-Logik" },
      { name: "JavaScript", stations: ["halo", "codemix", "apps"], detail: "ES2024, asynchrone Datenflüsse & Web-Grundlagen" },
      { name: "CSS & Tailwind", stations: ["halo", "codemix", "apps"], detail: "Klare Designsysteme, Raster & responsive Umsetzung" },
      { name: "PowerApps Canvas", stations: ["power"], detail: "Individuelle Oberflächen für interne Swisscom-Prozesse" },
    ],
  },
  {
    title: "Backend & Cloud",
    skills: [
      { name: "MS Power Platform", stations: ["power"], detail: "End-to-End Business-Apps, Umgebungen & Governance" },
      { name: "Power Automate", stations: ["power"], detail: "Automatisierte Workflows & System-Verknüpfungen" },
      { name: "Node.js", stations: ["halo", "apps"], detail: "Serverseitige Skripte, Schnittstellen & Services" },
      { name: "Java", stations: ["apps"], detail: "Objektorientierte Entwicklung & REST-Backends (Modul 223)" },
      { name: "Docker", stations: ["power", "apps"], detail: "Containerisierte Entwicklungsumgebungen & Deployment" },
    ],
  },
  {
    title: "Daten & Tools",
    skills: [
      { name: "SharePoint", stations: ["power", "futurework"], detail: "Strukturierte Listen, Rechte & Kollaborationslösungen" },
      { name: "SQL & MariaDB", stations: ["apps"], detail: "Relationale Datenmodellierung & präzise Abfragen" },
      { name: "MongoDB", stations: ["apps"], detail: "Dokumentenorientierte NoSQL-Datenhaltung" },
      { name: "Power BI", stations: ["power"], detail: "Kennzahlen, Datenmodelle & übersichtliche Auswertungen" },
      { name: "Git, VS Code & IntelliJ", stations: ["halo", "power", "codemix", "apps"], detail: "Tägliche Versionskontrolle, Reviews & Entwicklungsumgebungen" },
    ],
  },
  {
    title: "Zusammenarbeit",
    skills: [
      { name: "Teamarbeit", stations: ["halo", "power", "codemix", "futurework"], detail: "Verlässlich mitziehen und gemeinsame Ziele voranbringen" },
      { name: "Klare Kommunikation", stations: ["halo", "power", "futurework"], detail: "Direkt & verständlich – auf Deutsch, Niederländisch, Englisch & Schwedisch" },
      { name: "Selbständiges Arbeiten", stations: ["halo", "power", "codemix", "apps"], detail: "Strukturiert planen, Verantwortung übernehmen und dranbleiben" },
      { name: "Lösungsorientierung", stations: ["power", "codemix", "futurework", "apps"], detail: "Pragmatisch denken und tragfähige Lösungen finden" },
      { name: "Soziale Stärke", stations: ["halo", "futurework"], detail: "Empathie und sicheres Auftreten im Team & Support" },
    ],
  },
];

function Crosshair({ className = "" }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none select-none font-mono text-xs leading-none text-[#9CA3AF] ${className}`}
    >
      +
    </span>
  );
}

export function DirectionThree() {
  const [perspectiveId, setPerspectiveId] = useState("dev");
  const [contextId, setContextId] = useState("all");
  const [inspectedSkill, setInspectedSkill] = useState(null);
  const [copied, setCopied] = useState(false);

  const perspective = PERSPECTIVES.find((p) => p.id === perspectiveId) || PERSPECTIVES[0];
  const activeContext = CONTEXTS.find((c) => c.id === contextId) || CONTEXTS[0];

  const copyMail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${CONTACT.email}`;
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#0A0D14] selection:bg-[#0038FF] selection:text-white">
      {/* Schlanke technische System-Leiste */}
      <header className="sticky top-0 z-30 border-b border-[#E4E7EE] bg-white/92 backdrop-blur-md">
        <div className="mx-auto flex max-w-[88rem] items-center justify-between gap-4 px-4 py-3 sm:px-8 lg:px-12">
          <div className="flex items-center gap-4">
            <a href="#d3-top" className="font-display text-sm font-bold tracking-[-0.02em] text-[#0A0D14]">
              MATTI KOENIS <span className="font-mono font-normal text-[#0038FF]">// ZRH</span>
            </a>
            <span className="hidden items-center gap-2 border-l border-[#E4E7EE] pl-4 font-mono text-[11px] text-[#555B68] md:inline-flex">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#0038FF]" />
              OFFEN FÜR PERSPEKTIVEN NACH DER LEHRE
            </span>
          </div>

          <div className="flex items-center gap-5 font-mono text-xs">
            <a href="#d3-matrix" className="hidden text-[#555B68] transition-colors hover:text-[#0038FF] sm:inline">
              [ MATRIX ]
            </a>
            <button
              type="button"
              onClick={copyMail}
              className="inline-flex min-h-8 items-center gap-2 border border-[#D4D8E2] bg-[#F8F9FB] px-3 py-1 text-[11px] font-medium text-[#0A0D14] transition-colors hover:border-[#0038FF] hover:text-[#0038FF]"
            >
              {copied ? <Check aria-hidden="true" className="h-3 w-3 text-[#0038FF]" /> : <Copy aria-hidden="true" className="h-3 w-3 text-[#555B68]" />}
              <span>{copied ? "KOPIERT" : CONTACT.email}</span>
            </button>
          </div>
        </div>
      </header>

      {/* ABSCHNITT 1: EINSTIEG MIT INTERAKTIVEM 3-FACETTEN-SCHALTER */}
      <section id="d3-top" aria-labelledby="d3-hero-heading" className="border-b border-[#E4E7EE]">
        <div className="mx-auto max-w-[88rem] px-4 py-10 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
          <div className="relative grid gap-12 border border-[#E4E7EE] p-5 sm:p-8 lg:grid-cols-12 lg:gap-10 lg:p-12">
            <Crosshair className="absolute -top-2 -left-1.5" />
            <Crosshair className="absolute -top-2 -right-1.5" />
            <Crosshair className="absolute -bottom-2 -left-1.5" />
            <Crosshair className="absolute -right-1.5 -bottom-2" />

            {/* Linke 7 Spalten: Name + 3-Facetten-Perspektive */}
            <div className="flex flex-col justify-between lg:col-span-7">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E4E7EE] pb-4 font-mono text-[11px] tracking-[0.08em] text-[#555B68] uppercase">
                  <span>SWISSCOM · APPLIKATIONSENTWICKLER i. A.</span>
                  <span>SPRACHEN: DE / NL / EN / SV</span>
                </div>

                <h1
                  id="d3-hero-heading"
                  className="mt-6 font-display text-[clamp(2.8rem,1.5rem+4.5vw,5.4rem)] leading-[0.94] font-bold tracking-[-0.045em] text-[#0A0D14]"
                >
                  Matti Koenis
                </h1>

                {/* Interaktiver Perspektiven-Umschalter */}
                <div
                  role="group"
                  aria-label="Perspektive auf Matti wählen"
                  className="mt-7 inline-grid w-full grid-cols-1 border border-[#0A0D14] sm:w-auto sm:grid-cols-3"
                >
                  {PERSPECTIVES.map((p) => {
                    const active = p.id === perspective.id;
                    return (
                      <button
                        key={p.id}
                        type="button"
                        aria-pressed={active}
                        onClick={() => setPerspectiveId(p.id)}
                        className={`px-4 py-2.5 text-left font-mono text-[11px] font-semibold tracking-[0.06em] transition-colors sm:border-r sm:border-[#0A0D14] sm:last:border-r-0 ${
                          active ? "bg-[#0038FF] text-white" : "bg-white text-[#0A0D14] hover:bg-[#F3F5FA]"
                        }`}
                      >
                        {p.code}
                      </button>
                    );
                  })}
                </div>

                {/* Live wechselnder Fokus-Block */}
                <div className="mt-7">
                  <p className="font-mono text-[11px] font-semibold tracking-[0.1em] text-[#0038FF] uppercase">
                    {perspective.kicker}
                  </p>
                  <p className="mt-2 max-w-[28ch] font-display text-[clamp(1.35rem,1.05rem+1vw,2rem)] leading-[1.18] font-semibold tracking-[-0.03em] text-[#0A0D14]">
                    {perspective.headline}
                  </p>
                  <p className="mt-3.5 max-w-[56ch] text-base leading-[1.65] text-[#4A505E]">{perspective.body}</p>
                </div>
              </div>

              {/* Tabellarische 3-Spalten-Spezifikation passend zur aktiven Perspektive */}
              <div className="mt-9">
                <dl className="grid gap-4 border-t border-[#E4E7EE] pt-5 sm:grid-cols-3">
                  {perspective.specs.map(([label, val]) => (
                    <div key={label} className="border-l-2 border-[#0038FF] pl-3.5">
                      <dt className="font-mono text-[10px] tracking-[0.1em] text-[#5E6573] uppercase">{label}</dt>
                      <dd className="mt-1 font-display text-sm font-semibold text-[#0A0D14]">{val}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-7 flex flex-wrap items-center gap-5">
                  <a
                    href="#d3-matrix"
                    className="inline-flex min-h-11 items-center gap-2.5 bg-[#0A0D14] px-5 font-mono text-xs font-semibold tracking-[0.08em] text-white uppercase transition-colors hover:bg-[#0038FF]"
                  >
                    <span>Vernetzte Skill-Matrix testen</span>
                    <ArrowDown aria-hidden="true" className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href={CONTACT.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-[#4A505E] hover:text-[#0038FF]"
                  >
                    <span>LinkedIn Profil</span>
                    <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Rechte 5 Spalten: Technisch gefasstes Porträt */}
            <div className="flex flex-col justify-between lg:col-span-5">
              <div className="relative border border-[#D4D8E2] bg-[#F8F9FB] p-3">
                <div className="mb-2.5 flex items-center justify-between font-mono text-[10.5px] text-[#555B68]">
                  <span>ID: MK-ZRH-2026</span>
                  <span className="text-[#0038FF]">47.3769° N, 8.5417° E</span>
                </div>
                <div className="aspect-[4/4.8] overflow-hidden bg-[#1D222B]">
                  <Picture
                    image={STUDIO_COLOR}
                    alt="Studioporträt von Matti Koenis"
                    eager
                    sizes="(min-width: 1024px) 34vw, 92vw"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div className="mt-2.5 flex items-center justify-between border-t border-[#E4E7EE] pt-2.5 font-mono text-[10.5px] font-medium text-[#0A0D14]">
                  <span>{perspective.frameNote}</span>
                  <span className="text-[#0038FF]">■ LIVE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABSCHNITT 2: VERNETZTE KOMPETENZ- & PRAXIS-MATRIX */}
      <section id="d3-matrix" aria-labelledby="d3-matrix-heading" className="pb-28">
        <div className="mx-auto max-w-[88rem] px-4 pt-16 sm:px-8 sm:pt-24 lg:px-12">
          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <p className="font-mono text-xs font-semibold tracking-[0.1em] text-[#0038FF] uppercase">
                01 // VERNETZTES PROFIL
              </p>
              <h2
                id="d3-matrix-heading"
                className="mt-2 font-display text-[clamp(1.9rem,1.3rem+2.2vw,3.1rem)] leading-[1.02] font-bold tracking-[-0.035em]"
              >
                Erfahrung trifft Werkzeugkasten.
              </h2>
            </div>
            <p className="max-w-[46ch] text-sm leading-relaxed text-[#4A505E]">
              Wähle eine meiner Stationen bei Swisscom, um live zu filtern, welche Technologien und Stärken dort konkret
              zusammenspielen.
            </p>
          </div>

          {/* Stations-Spur (Filter) */}
          <div
            role="group"
            aria-label="Praxisstation wählen"
            className="mt-8 flex flex-wrap border-t border-l border-[#D4D8E2]"
          >
            {CONTEXTS.map((ctx) => {
              const active = ctx.id === contextId;
              return (
                <button
                  key={ctx.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => {
                    setContextId(ctx.id);
                    setInspectedSkill(null);
                  }}
                  className={`border-r border-b border-[#D4D8E2] px-4 py-3 font-mono text-xs font-medium transition-colors ${
                    active
                      ? "bg-[#0038FF] font-semibold text-white"
                      : "bg-white text-[#4A505E] hover:bg-[#F5F7FB] hover:text-[#0A0D14]"
                  }`}
                >
                  {ctx.label}
                </button>
              );
            })}
          </div>

          {/* Live-Kontextzeile zur gewählten Station oder zum inspizierten Skill */}
          <div className="border-x border-b border-[#D4D8E2] bg-[#F8F9FC] px-5 py-4 sm:px-6">
            {inspectedSkill ? (
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
                <p className="font-display text-base font-bold text-[#0A0D14]">
                  <span className="mr-2 font-mono text-xs text-[#0038FF]">■ SKILL-INSPEKTOR:</span>
                  {inspectedSkill.name}
                </p>
                <p className="text-sm text-[#4A505E]">{inspectedSkill.detail}</p>
              </div>
            ) : (
              <div className="grid gap-2 lg:grid-cols-12 lg:items-baseline">
                <p className="font-mono text-xs font-semibold text-[#0038FF] lg:col-span-3">{activeContext.period}</p>
                <p className="font-display text-base font-bold text-[#0A0D14] lg:col-span-4">{activeContext.role}</p>
                <p className="text-sm text-[#4A505E] lg:col-span-5">{activeContext.desc}</p>
              </div>
            )}
          </div>

          {/* Offene 4-Spalten-Matrix ohne Kärtchen-Optik */}
          <div className="grid divide-y divide-[#E4E7EE] border-x border-b border-[#D4D8E2] sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            {MATRIX_GROUPS.map((group) => (
              <div key={group.title} className="p-5 sm:p-6">
                <h3 className="border-b border-[#0A0D14] pb-2.5 font-mono text-xs font-bold tracking-[0.1em] text-[#0A0D14] uppercase">
                  {group.title}
                </h3>

                <ul className="mt-3 divide-y divide-[#EFF1F5]">
                  {group.skills.map((skill) => {
                    const highlighted = contextId === "all" || skill.stations.includes(contextId);
                    const isSelected = inspectedSkill?.name === skill.name;
                    return (
                      <li key={skill.name}>
                        <button
                          type="button"
                          onClick={() => setInspectedSkill(isSelected ? null : skill)}
                          onMouseEnter={() => setInspectedSkill(skill)}
                          className={`flex w-full items-center justify-between gap-3 py-3 text-left transition-opacity ${
                            highlighted ? "opacity-100" : "opacity-30 hover:opacity-75"
                          }`}
                        >
                          <span className="flex items-center gap-2.5">
                            <span
                              aria-hidden="true"
                              className={`h-2 w-2 shrink-0 ${
                                highlighted && contextId !== "all"
                                  ? "bg-[#0038FF]"
                                  : isSelected
                                    ? "bg-[#0038FF]"
                                    : "bg-[#0A0D14]"
                              }`}
                            />
                            <span className="font-display text-[0.95rem] font-semibold tracking-tight text-[#0A0D14]">
                              {skill.name}
                            </span>
                          </span>
                          <span className="font-mono text-[10px] text-[#5E6573]">{skill.stations.length}×</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
