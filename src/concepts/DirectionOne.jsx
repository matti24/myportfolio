import { useState } from "react";
import { ArrowDown, ArrowUpRight, Plus, Minus } from "lucide-react";
import { Picture } from "../components/Picture.jsx";
import { CONTACT } from "../content/projects.js";

const STUDIO_BW = { base: "studio-bw", widths: [480, 800, 1200], width: 1200, height: 1600 };

const REGISTER_SECTIONS = [
  {
    id: "frontend",
    index: "01",
    title: "Web & Frontend",
    summary: "5 Technologien · Fokus Team Halo & Web-Apps",
    lead: "Moderne, schnelle Benutzeroberflächen mit klarer Struktur – von internen Swisscom-Applikationen bis zu interaktiven Web-Anwendungen.",
    items: [
      { name: "React", where: "Praxis & Web-Apps", detail: "Komponentenarchitektur, Hooks & zustandsgesteuerte Interfaces" },
      { name: "TypeScript", where: "Web-Entwicklung", detail: "Typsichere Datenmodelle und wartbare Codebasen" },
      { name: "JavaScript (ES2024)", where: "Codemix & Alltag", detail: "Asynchrone Logik, Schnittstellen & Browser-APIs" },
      { name: "CSS & Tailwind CSS", where: "Alle Frontends", detail: "Präzise Raster, Responsivität & reduzierte Bewegung" },
      { name: "PowerApps Canvas", where: "Swisscom Alltag", detail: "Massgeschneiderte Oberflächen für Geschäftsprozesse" },
    ],
  },
  {
    id: "power",
    index: "02",
    title: "Power Platform & Cloud",
    summary: "3 Kernbereiche · Täglicher Einsatz bei Swisscom",
    lead: "End-to-End-Digitalisierung und Automatisierung von Workflows im Enterprise-Umfeld nach sauberen DevOps-Prinzipien.",
    items: [
      { name: "Microsoft Power Platform", where: "Swisscom Kernfokus", detail: "Lösungsarchitektur, Umgebungen & Governance im Betrieb" },
      { name: "Power Automate", where: "Swisscom DevOps", detail: "Automatisierte Abläufe, Genehmigungen & System-Integrationen" },
      { name: "Docker", where: "DevOps & Module", detail: "Reproduzierbare Container- und Devcontainer-Umgebungen" },
    ],
  },
  {
    id: "backend",
    index: "03",
    title: "Backend & Datenbanken",
    summary: "6 Technologien · Services, SQL & Datenhaltung",
    lead: "Strukturierte Datenhaltung, relationale Abfragen und saubere Schnittstellen zwischen Frontend und Systemlogik.",
    items: [
      { name: "SharePoint", where: "Swisscom DevOps", detail: "Datenlisten, Berechtigungskonzepte & Prozessanbindung" },
      { name: "Node.js", where: "Full-Stack", detail: "REST-Services, Skripte & serverseitige Logik" },
      { name: "SQL & MariaDB", where: "Ausbildung & Praxis", detail: "Relationale Schemata, Joins & Datenintegrität" },
      { name: "Java (Quarkus)", where: "Modul 223", detail: "Objektorientierte Backend-Entwicklung & REST-Endpunkte" },
      { name: "MongoDB", where: "Datenbank-Module", detail: "Dokumentenbasierte NoSQL-Datenmodelle" },
    ],
  },
  {
    id: "tools",
    index: "04",
    title: "Werkzeuge & Analytics",
    summary: "4 Werkzeuge · Täglicher Entwicklungs-Workflow",
    lead: "Saubere Versionskontrolle, strukturierte Entwicklungsumgebungen und faktenbasierte Datenaufbereitung.",
    items: [
      { name: "Git & GitHub", where: "Täglicher Einsatz", detail: "Branch-Workflows, Code-Reviews & Automatisierung" },
      { name: "VS Code", where: "Haupt-Editor", detail: "Web-, TypeScript- & Scripting-Umgebung" },
      { name: "IntelliJ IDEA", where: "Ausbildung", detail: "Entwicklungsumgebung für Java- und Backend-Projekte" },
      { name: "Power BI", where: "Swisscom DevOps", detail: "Datenmodellierung, Auswertungen & übersichtliche Reports" },
    ],
  },
  {
    id: "social",
    index: "05",
    title: "Arbeitsweise & Teamstärke",
    summary: "5 Stärken · Wie ich im Team funktioniere",
    lead: "Technik allein reicht nicht: Ich arbeite konzentriert und eigenständig, ziehe im Team verlässlich mit und kommuniziere direkt.",
    items: [
      { name: "Selbständiges Arbeiten", where: "Haltung", detail: "Aufgaben strukturiert anpacken und Verantwortung bis zum Ergebnis tragen" },
      { name: "Teamarbeit & Koordination", where: "Team Halo", detail: "Gemeinsame Ziele voranbringen – ab Aug 2026 als Host im Web-Team" },
      { name: "Klare Kommunikation", where: "4 Sprachen", detail: "Technisches verständlich auf den Punkt bringen (DE, NL, EN, SV)" },
      { name: "Lösungsorientierung", where: "Praxis", detail: "Pragmatisch denken und ruhige, wartbare Lösungen bauen" },
      { name: "Soziale Stärke", where: "Alltag", detail: "Empathie, Verlässlichkeit und offener Umgang mit Stakeholdern" },
    ],
  },
  {
    id: "stations",
    index: "06",
    title: "Stationen bei Swisscom",
    summary: "4 Rotationen · 2024 bis heute in Zürich & Bern",
    lead: "Schrittweiser Aufbau in der Praxis: vom direkten Kontakt im IT-Support über Business-Engineering bis zur Teamkoordination.",
    items: [
      { name: "Team Halo – Host", where: "Ab Aug 2026 · ZH/BE", detail: "Teamlead-Rolle im Web-Development-Team: Koordination, Planung & moderne Weblösungen" },
      { name: "Power Platform DevOps", where: "2025 – 2026 · Zürich", detail: "Entwicklung und Betrieb von PowerApps-, Power-BI- und SharePoint-Lösungen" },
      { name: "Codemix Programmierprojekt", where: "Feb – Jul 2025 · Zürich", detail: "Fundament in HTML, CSS, JavaScript und strukturierter Softwareentwicklung" },
      { name: "Future Work Specialist", where: "2024 – 2025 · ZH/BE", detail: "Gestaltung moderner Arbeitsmodelle und direkter IT-Support im Floorwalking" },
    ],
  },
];

export function DirectionOne() {
  const [openId, setOpenId] = useState("frontend");

  return (
    <div className="min-h-screen bg-white text-[#0A0A0A] selection:bg-[#E02400] selection:text-white">
      {/* Architektonische Kopfleiste: Kante zu Kante, 0px Radius */}
      <header className="sticky top-0 z-30 border-b border-[#141414] bg-white/95 backdrop-blur-xs">
        <div className="mx-auto grid max-w-[92rem] grid-cols-2 items-center divide-x divide-[#141414] lg:grid-cols-12">
          <a
            href="#d1-top"
            className="flex items-center gap-3 px-4 py-3.5 font-mono text-xs font-semibold tracking-[0.1em] uppercase sm:px-6 lg:col-span-3"
          >
            <span aria-hidden="true" className="h-2.5 w-2.5 bg-[#E02400]" />
            <span>MATTI KOENIS</span>
          </a>

          <div className="hidden truncate px-5 py-3.5 font-mono text-[11px] tracking-[0.08em] whitespace-nowrap text-[#525252] uppercase xl:col-span-3 xl:block">
            47°22′N 08°32′E — ZÜRICH
          </div>

          <div className="hidden truncate px-5 py-3.5 font-mono text-[11px] tracking-[0.08em] whitespace-nowrap text-[#525252] uppercase lg:col-span-4 lg:block xl:col-span-3">
            SWISSCOM · EFZ IN AUSBILDUNG
          </div>

          <nav
            aria-label="Entwurf 1 Navigation"
            className="flex items-center justify-end gap-4 px-4 py-3.5 font-mono text-xs tracking-[0.06em] whitespace-nowrap uppercase sm:px-6 lg:col-span-5 lg:justify-end xl:col-span-3 xl:justify-between"
          >
            <a href="#d1-top" className="hover:text-[#E02400]">
              00 Einstieg
            </a>
            <a href="#d1-register" className="hover:text-[#E02400]">
              01 Register
            </a>
            <a href={`mailto:${CONTACT.email}`} className="hidden font-semibold text-[#E02400] sm:inline">
              Kontakt ↗
            </a>
          </nav>
        </div>
      </header>

      {/* ABSCHNITT 1: PLAKAT-EINSTIEG */}
      <section id="d1-top" aria-labelledby="d1-hero-heading" className="border-b border-[#141414]">
        <div className="mx-auto max-w-[92rem]">
          {/* Monumentaler Namensblock mit asymmetrischem Versatz */}
          <div className="border-b border-[#141414] px-4 pt-8 pb-7 sm:px-8 sm:pt-12 sm:pb-10 lg:px-10">
            <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
              <p className="font-mono text-xs font-medium tracking-[0.12em] text-[#E02400] uppercase">
                [ 00 ] PERSÖNLICHES PROFIL — APPLIKATIONSENTWICKLER
              </p>
              <p className="font-mono text-xs tracking-[0.08em] text-[#525252] uppercase">
                DE · NL · EN · SV &nbsp;/&nbsp; AB AUG 2026: TEAM HALO HOST
              </p>
            </div>

            <h1
              id="d1-hero-heading"
              className="mt-5 font-display text-[clamp(3.6rem,12.2vw,10.8rem)] leading-[0.86] font-bold tracking-[-0.055em] uppercase"
            >
              <span className="block">MATTI</span>
              <span className="mt-1 flex items-center gap-4 sm:gap-7 lg:pl-[14%]">
                <span aria-hidden="true" className="h-[0.09em] w-[0.85em] shrink-0 bg-[#E02400]" />
                <span>KOENIS</span>
              </span>
            </h1>
          </div>

          {/* Untere 7:5 Architektur-Teilung ohne Karten oder Abstände */}
          <div className="grid lg:grid-cols-12 lg:divide-x lg:divide-[#141414]">
            {/* Linke Spalte: Persönliche Positionierung + 4-Spalten-Rasterstreifen */}
            <div className="flex flex-col justify-between lg:col-span-7">
              <div className="px-4 py-10 sm:px-8 sm:py-14 lg:p-12">
                <p className="max-w-[30ch] font-display text-[clamp(1.45rem,1.1rem+1.25vw,2.3rem)] leading-[1.18] font-medium tracking-[-0.03em]">
                  Präzision im Code, Ruhe in der Struktur und Verlässlichkeit im Team.
                </p>

                <p className="mt-6 max-w-[54ch] text-base leading-[1.65] text-[#3F3F3F] sm:text-[1.0625rem]">
                  Ich bin in der Ausbildung zum Applikationsentwickler bei{" "}
                  <strong className="font-semibold text-[#0A0A0A]">Swisscom in Zürich</strong>. Im Alltag verbinde ich
                  moderne Web-Entwicklung mit Lösungen auf der Microsoft Power Platform. Mich interessieren Technik,
                  Wirtschaft und Finanzmärkte – den Ausgleich zum Bildschirm hole ich mir beim Tennis, im Gym, auf der
                  Skipiste und beim Joggen.
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-5">
                  <a
                    href="#d1-register"
                    className="inline-flex min-h-12 items-center gap-3 bg-[#0A0A0A] px-6 font-mono text-xs font-semibold tracking-[0.12em] text-white uppercase transition-colors hover:bg-[#E02400]"
                  >
                    <span>Skills & Stationen öffnen</span>
                    <ArrowDown aria-hidden="true" className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="inline-flex min-h-12 items-center gap-2 border border-[#141414] px-5 font-mono text-xs font-medium tracking-[0.08em] uppercase transition-colors hover:border-[#E02400] hover:text-[#E02400]"
                  >
                    <span>{CONTACT.email}</span>
                    <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              {/* Scharfkantige 4-Zellen-Spezifikation am Fuss der linken Spalte */}
              <dl className="grid grid-cols-2 divide-x divide-y divide-[#141414] border-t border-[#141414] sm:grid-cols-4 sm:divide-y-0">
                <div className="p-4 sm:p-5">
                  <dt className="font-mono text-[10px] tracking-[0.1em] text-[#595959] uppercase">FOKUS</dt>
                  <dd className="mt-2 font-display text-base font-semibold tracking-tight">Web & Power Apps</dd>
                </div>
                <div className="p-4 sm:p-5">
                  <dt className="font-mono text-[10px] tracking-[0.1em] text-[#595959] uppercase">ARBEITSSTIL</dt>
                  <dd className="mt-2 font-display text-base font-semibold tracking-tight">Eigenständig & Team</dd>
                </div>
                <div className="p-4 sm:p-5">
                  <dt className="font-mono text-[10px] tracking-[0.1em] text-[#595959] uppercase">INTERESSEN</dt>
                  <dd className="mt-2 font-display text-base font-semibold tracking-tight">Finance & Strategie</dd>
                </div>
                <div className="p-4 sm:p-5">
                  <dt className="font-mono text-[10px] tracking-[0.1em] text-[#595959] uppercase">SPORT</dt>
                  <dd className="mt-2 font-display text-base font-semibold tracking-tight">Tennis · Gym · Ski</dd>
                </div>
              </dl>
            </div>

            {/* Rechte Spalte: Echtes Schwarz-Weiss-Studioporträt bündig im Raster */}
            <div className="flex flex-col justify-between border-t border-[#141414] bg-[#181818] lg:col-span-5 lg:border-t-0">
              <div className="relative aspect-[4/4.6] w-full overflow-hidden bg-[#181818] lg:aspect-auto lg:min-h-[32rem] lg:flex-1">
                <Picture
                  image={STUDIO_BW}
                  alt="Schwarz-Weiss-Studioporträt von Matti Koenis"
                  eager
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  className="h-full w-full object-cover object-top lg:absolute lg:inset-0"
                />
              </div>
              <div className="flex items-center justify-between gap-4 border-t border-[#141414] bg-white px-4 py-3 font-mono text-[11px] tracking-[0.08em] uppercase sm:px-6">
                <span>ABB. 01 — MATTI KOENIS, ZÜRICH</span>
                <span className="flex items-center gap-2 font-semibold text-[#0A0A0A]">
                  <span aria-hidden="true" className="h-2 w-2 bg-[#E02400]" />
                  BEREIT NACH DER LEHRE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABSCHNITT 2: SCHWEIZER WERKREGISTER (KOMPETENZEN & PRAXIS OHNE KARTEN) */}
      <section id="d1-register" aria-labelledby="d1-register-heading" className="border-b border-[#141414] pb-24">
        <div className="mx-auto grid max-w-[92rem] lg:grid-cols-12 lg:divide-x lg:divide-[#141414]">
          {/* Linke Leitspalte */}
          <div className="border-b border-[#141414] px-4 py-12 sm:px-8 lg:col-span-4 lg:border-b-0 lg:p-10">
            <div className="lg:sticky lg:top-20">
              <p className="font-mono text-xs font-semibold tracking-[0.12em] text-[#E02400] uppercase">
                [ 01 ] WERKREGISTER
              </p>
              <h2
                id="d1-register-heading"
                className="mt-4 font-display text-[clamp(2rem,1.4rem+2vw,3.1rem)] leading-[0.98] font-bold tracking-[-0.04em] uppercase"
              >
                Kompetenzen, Haltung & Praxis.
              </h2>
              <p className="mt-5 text-sm leading-[1.65] text-[#4A4A4A]">
                Kein Prozentbalken-Baukasten, sondern ein klares Verzeichnis meiner 18 technischen Werkzeuge, meiner
                Arbeitsweise und meiner vier Stationen bei Swisscom.
              </p>

              <div className="mt-10 border-t border-[#141414] pt-6">
                <p className="font-mono text-[11px] font-semibold tracking-[0.1em] uppercase">
                  WOFÜR ICH STEHE
                </p>
                <p className="mt-2 text-sm leading-[1.6] text-[#3F3F3F]">
                  Saubere Arbeitsweise, klare Kommunikation und moderne Applikationen – offen für den nächsten Schritt
                  nach der Lehre.
                </p>
              </div>
            </div>
          </div>

          {/* Rechte Spalte: Interaktive Register-Bänder */}
          <div className="divide-y divide-[#141414] lg:col-span-8">
            {REGISTER_SECTIONS.map((sec) => {
              const isOpen = openId === sec.id;
              return (
                <div
                  key={sec.id}
                  className={`transition-colors ${isOpen ? "border-l-4 border-l-[#E02400] bg-[#FAFAFA]" : "bg-white"}`}
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`d1-panel-${sec.id}`}
                      onClick={() => setOpenId(isOpen ? "" : sec.id)}
                      className="group flex w-full items-baseline justify-between gap-4 px-4 py-6 text-left transition-colors hover:bg-[#F5F5F4] sm:px-8 sm:py-7"
                    >
                      <span className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
                        <span
                          className={`font-mono text-xs font-bold tracking-[0.1em] ${
                            isOpen ? "text-[#E02400]" : "text-[#595959]"
                          }`}
                        >
                          {sec.index}
                        </span>
                        <span className="font-display text-[clamp(1.35rem,1.05rem+1.1vw,2.1rem)] font-bold tracking-[-0.03em] uppercase">
                          {sec.title}
                        </span>
                      </span>
                      <span className="flex shrink-0 items-center gap-4">
                        <span className="hidden font-mono text-xs text-[#595959] md:inline">{sec.summary}</span>
                        <span className="flex h-8 w-8 items-center justify-center border border-[#141414] bg-white text-[#0A0A0A] group-hover:border-[#E02400] group-hover:text-[#E02400]">
                          {isOpen ? (
                            <Minus aria-hidden="true" className="h-3.5 w-3.5" />
                          ) : (
                            <Plus aria-hidden="true" className="h-3.5 w-3.5" />
                          )}
                        </span>
                      </span>
                    </button>
                  </h3>

                  <div
                    id={`d1-panel-${sec.id}`}
                    hidden={!isOpen}
                    className="border-t border-[#DEDEDE] bg-white px-4 py-7 sm:px-8"
                  >
                    <p className="max-w-[60ch] text-sm leading-relaxed text-[#4A4A4A]">{sec.lead}</p>
                    <ul className="mt-6 grid divide-y divide-[#E5E5E5] border-y border-[#141414] sm:grid-cols-2 sm:divide-x">
                      {sec.items.map((item) => (
                        <li key={item.name} className="flex flex-col justify-between gap-2 p-4 sm:p-5">
                          <div className="flex items-baseline justify-between gap-3">
                            <span className="font-display text-base font-bold tracking-tight text-[#0A0A0A]">
                              {item.name}
                            </span>
                            <span className="font-mono text-[11px] font-medium tracking-[0.06em] text-[#E02400] uppercase">
                              {item.where}
                            </span>
                          </div>
                          <p className="text-sm leading-snug text-[#525252]">{item.detail}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
