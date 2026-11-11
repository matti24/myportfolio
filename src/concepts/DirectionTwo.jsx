import { useEffect, useRef, useState } from "react";
import { ArrowDownRight, ArrowUpRight, Plus, Minus } from "lucide-react";
import { Picture } from "../components/Picture.jsx";
import { CONTACT } from "../content/projects.js";

const STUDIO_BW = { base: "studio-bw", widths: [480, 800, 1200], width: 1200, height: 1600 };

const CHAPTER_ROWS = [
  {
    id: "halo",
    num: "01",
    title: "Team Halo — Host",
    meta: "Swisscom · Ab Aug 2026",
    kicker: "Teamlead-Rolle im Web Development",
    previewStack: "Web Development · Frontend · Teamführung · Koordination",
    description:
      "Verantwortung für Koordination, Zusammenarbeit und moderne Weblösungen im Entwicklungsteam in Zürich und Bern.",
    items: ["React", "TypeScript", "JavaScript", "CSS", "Teamführung", "Koordination", "Klare Kommunikation"],
  },
  {
    id: "power",
    num: "02",
    title: "Power Platform DevOps",
    meta: "Swisscom · 2025 – 2026",
    kicker: "Business-Applikationen & Automation",
    previewStack: "PowerApps · Power Automate · SharePoint · Power BI",
    description:
      "Entwicklung, Betrieb und Weiterentwicklung produktiver Lösungen auf der Microsoft Power Platform nach DevOps-Prinzipien.",
    items: ["Microsoft Power Platform", "PowerApps Canvas", "Power Automate", "SharePoint", "Power BI", "DevOps"],
  },
  {
    id: "engineering",
    num: "03",
    title: "Full-Stack & Datenbanken",
    meta: "18 Informatik-Skills",
    kicker: "Codemix, Berufsfachschule & eigene Apps",
    previewStack: "React · Node.js · Java · SQL · Docker · Git",
    description:
      "Breites technisches Fundament über Frontend, Backend, relationale sowie dokumentenbasierte Datenbanken und Entwicklungswerkzeuge.",
    items: ["React", "TypeScript", "JavaScript", "Node.js", "Java", "SQL", "MariaDB", "MongoDB", "Docker", "Git", "VS Code", "IntelliJ IDEA"],
  },
  {
    id: "mindset",
    num: "04",
    title: "Arbeitsweise & Haltung",
    meta: "5 Soziale Stärken",
    kicker: "Bereit für den Schritt nach der Lehre",
    previewStack: "Selbständig · Teamstark · Lösungsorientiert",
    description:
      "Konzentriert in der Einzelarbeit, verlässlich im Team und klar in der Kommunikation – vom ersten IT-Support im Floorwalking (Future Work) bis zur Projektkoordination.",
    items: ["Soziale Stärke", "Teamarbeit", "Klare Kommunikation", "Selbständiges Arbeiten", "Lösungsorientierung"],
  },
];

function MagneticCta({ href, children }) {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const onMove = (e) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) * 0.24;
    const dy = (e.clientY - (r.top + r.height / 2)) * 0.24;
    setOffset({ x: Math.max(-14, Math.min(14, dx)), y: Math.max(-14, Math.min(14, dy)) });
  };

  return (
    <a
      ref={ref}
      href={href}
      onPointerMove={onMove}
      onPointerLeave={() => setOffset({ x: 0, y: 0 })}
      style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` }}
      className="inline-flex h-28 w-28 shrink-0 flex-col items-center justify-center rounded-full bg-[#C8260E] text-center font-mono text-[11px] font-semibold tracking-[0.08em] text-white uppercase shadow-[0_18px_36px_-14px_rgba(223,48,22,0.55)] transition-[transform,background-color] duration-200 ease-out hover:bg-[#141413] sm:h-32 sm:w-32"
    >
      {children}
    </a>
  );
}

export function DirectionTwo() {
  const [expanded, setExpanded] = useState("halo");
  const [hoveredRow, setHoveredRow] = useState(null);
  const floatRef = useRef(null);
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!hoveredRow) return undefined;
    let rafId = 0;
    const tick = () => {
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.18;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.18;
      if (floatRef.current) {
        floatRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0)`;
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [hoveredRow]);

  const hoveredData = CHAPTER_ROWS.find((r) => r.id === hoveredRow) || null;

  return (
    <div className="min-h-screen bg-[#F8F7F4] text-[#141413] selection:bg-[#C8260E] selection:text-white">
      {/* Charakterstarker, offener Editorial-Header */}
      <header className="mx-auto flex max-w-[88rem] items-center justify-between px-5 pt-7 pb-5 sm:px-10 lg:px-14">
        <a href="#db-top" className="font-display text-sm font-bold tracking-[-0.02em] uppercase">
          Matti Koenis <span className="font-serif text-lg font-normal text-[#63605A] lowercase italic">— zürich</span>
        </a>

        <nav aria-label="Richtung B Navigation" className="flex items-center gap-6 text-xs font-medium tracking-[0.06em] uppercase">
          <a href="#db-top" className="text-[#63605A] transition-colors hover:text-[#141413]">
            Person
          </a>
          <a href="#db-index" className="text-[#63605A] transition-colors hover:text-[#141413]">
            Skills &amp; Weg
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="inline-flex items-center gap-1 font-semibold text-[#C8260E] transition-colors hover:text-[#141413]"
          >
            <span>Kontakt</span>
            <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
          </a>
        </nav>
      </header>

      {/* ABSCHNITT 1: KINETISCHER EDITORIAL-HERO MIT S/W-STUDIOPORTRÄT & MAGNETIC CTA */}
      <section id="db-top" aria-labelledby="db-hero-heading" className="mx-auto max-w-[88rem] px-5 pt-6 pb-20 sm:px-10 sm:pt-10 sm:pb-28 lg:px-14">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="font-mono text-xs tracking-[0.12em] text-[#C8260E] uppercase">
              Applikationsentwickler in Ausbildung · Swisscom
            </p>
            <h1
              id="db-hero-heading"
              className="mt-4 font-display text-[clamp(3rem,1.4rem+6.4vw,7.2rem)] leading-[0.92] font-bold tracking-[-0.05em] text-[#141413]"
            >
              Präzision im{" "}
              <em className="font-serif text-[1.06em] font-normal text-[#C8260E] italic">Code.</em>
              <br />
              Charakter im Auftritt.
            </h1>
          </div>

          <div className="flex items-end justify-between gap-6 lg:col-span-4 lg:justify-end">
            <MagneticCta href="#db-index">
              <span>Profil &amp;</span>
              <span>Skills</span>
              <ArrowDownRight aria-hidden="true" className="mt-1 h-4 w-4" />
            </MagneticCta>
          </div>
        </div>

        {/* Asymmetrische Bild- & Persönlichkeits-Bühne */}
        <div className="mt-12 grid gap-10 border-t border-[#141413]/15 pt-10 lg:grid-cols-12 lg:gap-12">
          {/* Links: Schwarz-Weiss-Studioporträt in starker vertikaler Proportion */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden bg-[#171717]">
              <div className="aspect-[4/4.7] w-full overflow-hidden">
                <Picture
                  image={STUDIO_BW}
                  alt="Schwarz-Weiss-Porträt von Matti Koenis"
                  eager
                  sizes="(min-width: 1024px) 36vw, 94vw"
                  className="h-full w-full object-cover object-top transition-transform duration-700 ease-out hover:scale-[1.02]"
                />
              </div>
            </div>
            <p className="mt-3 flex items-center justify-between font-mono text-[11px] text-[#63605A] uppercase">
              <span>Matti Koenis · Region Zürich</span>
              <span>Ab Aug ’26: Team Halo Host</span>
            </p>
          </div>

          {/* Rechts: Persönliche Vorstellung + Sprachen + Interessen ohne Kärtchen */}
          <div className="flex flex-col justify-between lg:col-span-7">
            <div>
              <p className="max-w-[34ch] font-display text-[clamp(1.4rem,1.1rem+1.1vw,2.1rem)] leading-[1.22] font-medium tracking-[-0.03em]">
                Ich bin Matti — konzentriert in der Entwicklung, eigenständig in der Verantwortung und stark im
                Zusammenspiel im Team.
              </p>
              <p className="mt-5 max-w-[56ch] text-base leading-[1.7] text-[#4D4A44]">
                Bei Swisscom entwickle ich mich quer durch verschiedene Praxisbereiche weiter – von direktem IT-Support
                und Web-Grundlagen über Power-Platform-Lösungen bis zur Koordination eines Web-Teams. Neben Computern
                und neuen Applikationen faszinieren mich Wirtschaft und Finanzmärkte.
              </p>
            </div>

            <div className="mt-10 grid gap-8 border-t border-[#141413]/15 pt-8 sm:grid-cols-2">
              <div>
                <h2 className="font-mono text-[11px] font-semibold tracking-[0.12em] text-[#C8260E] uppercase">
                  Vier Sprachen
                </h2>
                <ul className="mt-3 space-y-1.5 text-sm">
                  <li className="flex justify-between border-b border-[#141413]/10 pb-1.5">
                    <span className="font-medium">Deutsch</span>
                    <span className="font-serif text-base text-[#63605A] italic">Muttersprache</span>
                  </li>
                  <li className="flex justify-between border-b border-[#141413]/10 pb-1.5">
                    <span className="font-medium">Niederländisch</span>
                    <span className="font-serif text-base text-[#63605A] italic">Fliessend</span>
                  </li>
                  <li className="flex justify-between border-b border-[#141413]/10 pb-1.5">
                    <span className="font-medium">Englisch</span>
                    <span className="font-serif text-base text-[#63605A] italic">IT &amp; Alltag (9 J.)</span>
                  </li>
                  <li className="flex justify-between pb-1">
                    <span className="font-medium">Schwedisch</span>
                    <span className="font-serif text-base text-[#63605A] italic">Gute Konversation</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-mono text-[11px] font-semibold tracking-[0.12em] text-[#C8260E] uppercase">
                  Ausgleich &amp; Energie
                </h2>
                <p className="mt-3 font-serif text-2xl leading-snug text-[#141413] italic">
                  Tennis · Fitness · Skifahren · Joggen
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#4D4A44]">
                  Sportlicher Ehrgeiz und Bewegung an der frischen Luft sorgen für den klaren Kopf, den gute Software
                  braucht.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABSCHNITT 2: INTERAKTIVE GROSS-TYPOGRAFIE-LISTE MIT CURSOR-VORSCHAU */}
      <section
        id="db-index"
        aria-labelledby="db-index-heading"
        onPointerMove={(e) => {
          targetPos.current = { x: e.clientX + 24, y: e.clientY - 70 };
        }}
        className="relative border-t border-[#141413] bg-white pt-20 pb-36 sm:pt-28"
      >
        <div className="mx-auto max-w-[88rem] px-5 sm:px-10 lg:px-14">
          <div className="flex flex-col justify-between gap-4 pb-10 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-xs tracking-[0.12em] text-[#C8260E] uppercase">
                01 — Kompetenzen &amp; Stationen
              </p>
              <h2
                id="db-index-heading"
                className="mt-2 font-display text-[clamp(1.9rem,1.3rem+2.2vw,3.2rem)] leading-none font-bold tracking-[-0.04em]"
              >
                Was ich mitbringe &amp; wo es gewachsen ist.
              </h2>
            </div>
            <p className="font-mono text-xs text-[#63605A]">Zeile überfahren oder anklicken</p>
          </div>

          <div
            className="divide-y divide-[#141413]/15 border-y border-[#141413]"
            onMouseLeave={() => setHoveredRow(null)}
          >
            {CHAPTER_ROWS.map((row) => {
              const isOpen = expanded === row.id;
              return (
                <div key={row.id}>
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onMouseEnter={() => setHoveredRow(row.id)}
                      onClick={() => setExpanded(isOpen ? "" : row.id)}
                      className="group flex w-full items-baseline justify-between gap-4 py-7 text-left sm:py-9"
                    >
                      <span className="flex items-baseline gap-5 sm:gap-8">
                        <span className="font-mono text-xs font-semibold text-[#C8260E]">{row.num}</span>
                        <span className="font-display text-[clamp(1.55rem,1.1rem+2.2vw,3.1rem)] leading-none font-bold tracking-[-0.04em] transition-transform duration-300 ease-out group-hover:translate-x-3">
                          {row.title}
                        </span>
                      </span>

                      <span className="flex shrink-0 items-center gap-5">
                        <span className="hidden font-serif text-xl text-[#63605A] italic md:inline">{row.meta}</span>
                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#141413]/20 transition group-hover:border-[#C8260E] group-hover:bg-[#C8260E] group-hover:text-white">
                          {isOpen ? (
                            <Minus aria-hidden="true" className="h-4 w-4" />
                          ) : (
                            <Plus aria-hidden="true" className="h-4 w-4" />
                          )}
                        </span>
                      </span>
                    </button>
                  </h3>

                  {/* Butterweiche 0fr -> 1fr CSS-Grid-Öffnung */}
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="grid gap-6 pb-9 pl-9 sm:pl-14 lg:grid-cols-12">
                        <p className="text-base leading-relaxed text-[#4D4A44] lg:col-span-6">{row.description}</p>
                        <ul className="flex flex-wrap gap-2 lg:col-span-6 lg:justify-end">
                          {row.items.map((skill) => (
                            <li
                              key={skill}
                              className="border border-[#141413]/20 bg-[#F8F7F4] px-3 py-1 font-mono text-xs text-[#141413]"
                            >
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Schwebendes Cursor-Preview-Fenster (nur auf grossen Zeigegeräten sichtbar) */}
        <div
          ref={floatRef}
          aria-hidden="true"
          className={`pointer-events-none fixed top-0 left-0 z-40 hidden w-72 border border-[#141413] bg-[#141413] p-4 text-white shadow-2xl transition-opacity duration-200 lg:block ${
            hoveredData ? "opacity-100" : "opacity-0"
          }`}
        >
          {hoveredData ? (
            <>
              <p className="font-mono text-[10px] tracking-[0.1em] text-[#FF6A52] uppercase">{hoveredData.meta}</p>
              <p className="mt-1 font-serif text-xl italic">{hoveredData.kicker}</p>
              <p className="mt-2 border-t border-white/15 pt-2 font-mono text-[11px] leading-relaxed text-white/80">
                {hoveredData.previewStack}
              </p>
            </>
          ) : null}
        </div>
      </section>
    </div>
  );
}

