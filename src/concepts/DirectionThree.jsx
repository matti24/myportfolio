import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, Check, Copy } from "lucide-react";
import { Picture } from "../components/Picture.jsx";
import { CONTACT } from "../content/projects.js";

const STUDIO_COLOR = { base: "studio-color", widths: [480, 800, 1120], width: 1120, height: 1400 };

const SPEC_ROWS = [
  { cat: "Frontend", name: "React", context: "Komponentenarchitektur & interaktive Web-Apps", station: "Team Halo · Web", focus: "web" },
  { cat: "Frontend", name: "TypeScript", context: "Typsichere Applikationen & Schnittstellen", station: "Team Halo · Web", focus: "web" },
  { cat: "Frontend", name: "JavaScript", context: "ES2024, asynchrone Datenflüsse & Browser-APIs", station: "Codemix · Web", focus: "web" },
  { cat: "Frontend", name: "CSS & Tailwind", context: "Responsive Raster, Designsysteme & Feinschliff", station: "Alle Frontends", focus: "web" },
  { cat: "Frontend", name: "PowerApps Canvas", context: "Individuelle Geschäfts-Oberflächen & Flows", station: "Swisscom Alltag", focus: "swisscom" },
  { cat: "Backend", name: "Node.js", context: "REST-Schnittstellen, Skripte & Services", station: "Full-Stack", focus: "web" },
  { cat: "Backend", name: "Power Automate", context: "Prozessautomatisierung & System-Integration", station: "Swisscom DevOps", focus: "swisscom" },
  { cat: "Backend", name: "Java", context: "Objektorientierte Logik & REST (Quarkus)", station: "Modul 223", focus: "web" },
  { cat: "Datenbanken", name: "SharePoint", context: "Strukturierte Listen, Rechte & Prozessdaten", station: "Swisscom DevOps", focus: "swisscom" },
  { cat: "Datenbanken", name: "SQL", context: "Relationale Modelle, Abfragen & Joins", station: "Ausbildung", focus: "data" },
  { cat: "Datenbanken", name: "MariaDB", context: "Relationale Datenbank-Administration", station: "Module", focus: "data" },
  { cat: "Datenbanken", name: "MongoDB", context: "Dokumentenorientierte NoSQL-Datenhaltung", station: "Module", focus: "data" },
  { cat: "Cloud & DevOps", name: "MS Power Platform", context: "End-to-End Business-Apps & Governance", station: "Swisscom Fokus", focus: "swisscom" },
  { cat: "Cloud & DevOps", name: "Docker", context: "Containerisierung & Devcontainer-Setups", station: "DevOps & Apps", focus: "data" },
  { cat: "Tools", name: "Git & GitHub", context: "Versionskontrolle, Branches & Workflows", station: "Täglich", focus: "web" },
  { cat: "Tools", name: "VS Code", context: "Tägliche Entwicklungsumgebung & Debugging", station: "Täglich", focus: "web" },
  { cat: "Tools", name: "IntelliJ IDEA", context: "IDE für Java- & Backend-Projekte", station: "Ausbildung", focus: "web" },
  { cat: "Tools", name: "Power BI", context: "Datenaufbereitung, Kennzahlen & Dashboards", station: "Swisscom DevOps", focus: "swisscom" },
  { cat: "Arbeitsweise", name: "Selbständiges Arbeiten", context: "Strukturiert planen & Verantwortung tragen", station: "Kernstärke", focus: "human" },
  { cat: "Arbeitsweise", name: "Teamarbeit", context: "Gemeinsame Ziele zuverlässig erreichen", station: "Team Halo", focus: "human" },
  { cat: "Arbeitsweise", name: "Klare Kommunikation", context: "Direkt & verständlich in DE, NL, EN & SV", station: "Alltag & Support", focus: "human" },
  { cat: "Arbeitsweise", name: "Lösungsorientierung", context: "Pragmatisch denken & sauber umsetzen", station: "Praxis", focus: "human" },
  { cat: "Arbeitsweise", name: "Soziale Stärke", context: "Empathie & sicheres Auftreten im Team", station: "Future Work", focus: "human" },
];

export function DirectionThree() {
  const [bioMode, setBioMode] = useState("compact");
  const [filter, setFilter] = useState("all");
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${CONTACT.email}`;
    }
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const tag = e.target?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      if (e.key === "b" || e.key === "B") {
        setBioMode((m) => (m === "compact" ? "detailed" : "compact"));
      } else if (e.key === "c" || e.key === "C") {
        copyEmail();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const visibleRows = filter === "all" ? SPEC_ROWS : SPEC_ROWS.filter((r) => r.focus === filter);

  return (
    <div className="min-h-screen bg-white text-[#0E1312] selection:bg-[#0B6B4F] selection:text-white">
      {/* Präzise Schweizer Spezifikations-Leiste mit Tastatur-Kürzeln */}
      <header className="sticky top-0 z-30 border-b border-[#E3E7E5] bg-white/95 backdrop-blur-xs">
        <div className="mx-auto flex max-w-[84rem] items-center justify-between gap-4 px-5 py-3 font-mono text-xs sm:px-10">
          <div className="flex items-center gap-4">
            <a href="#dc-top" className="font-semibold tracking-tight text-[#0E1312]">
              MATTI KOENIS
            </a>
            <span className="hidden text-[#5C6461] sm:inline">/ ZÜRICH, CH · SWISSCOM EFZ</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setBioMode((m) => (m === "compact" ? "detailed" : "compact"))}
              className="hidden items-center gap-1.5 border border-[#D5DBD8] px-2.5 py-1 text-[11px] text-[#454D4A] transition hover:border-[#0B6B4F] hover:text-[#0B6B4F] md:inline-flex"
            >
              <span>Bio: {bioMode === "compact" ? "Kompakt" : "Ausführlich"}</span>
              <kbd className="bg-[#F2F5F3] px-1 font-mono text-[10px] text-[#0B6B4F]">B</kbd>
            </button>

            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-1.5 border border-[#D5DBD8] px-2.5 py-1 text-[11px] font-medium text-[#0E1312] transition hover:border-[#0B6B4F] hover:text-[#0B6B4F]"
            >
              {copied ? <Check aria-hidden="true" className="h-3 w-3 text-[#0B6B4F]" /> : <Copy aria-hidden="true" className="h-3 w-3 text-[#5C6461]" />}
              <span>{copied ? "Kopiert" : CONTACT.email}</span>
              <kbd className="hidden bg-[#F2F5F3] px-1 font-mono text-[10px] text-[#0B6B4F] sm:inline">C</kbd>
            </button>
          </div>
        </div>
      </header>

      {/* ABSCHNITT 1: STRUKTURIERTES PERSONEN-DOSSIER MIT BIO-TIEFENREGLER */}
      <section id="dc-top" aria-labelledby="dc-hero-heading" className="border-b border-[#E3E7E5]">
        <div className="mx-auto max-w-[84rem] px-5 py-12 sm:px-10 sm:py-18">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-12">
            {/* Linke 7 Spalten: Dossier-Profil mit umschaltbarer Tiefe */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="font-mono text-[11px] font-semibold tracking-[0.1em] text-[#0B6B4F] uppercase">
                  DOSSIER 01 · PERSÖNLICHES PROFIL
                </p>

                <div
                  role="group"
                  aria-label="Profiltiefe umschalten"
                  className="inline-flex border border-[#D5DBD8] bg-[#F7F9F8] p-0.5 font-mono text-[11px]"
                >
                  <button
                    type="button"
                    aria-pressed={bioMode === "compact"}
                    onClick={() => setBioMode("compact")}
                    className={`px-3 py-1 transition ${
                      bioMode === "compact" ? "bg-[#0B6B4F] font-semibold text-white" : "text-[#5C6461] hover:text-[#0E1312]"
                    }`}
                  >
                    Kompakt
                  </button>
                  <button
                    type="button"
                    aria-pressed={bioMode === "detailed"}
                    onClick={() => setBioMode("detailed")}
                    className={`px-3 py-1 transition ${
                      bioMode === "detailed" ? "bg-[#0B6B4F] font-semibold text-white" : "text-[#5C6461] hover:text-[#0E1312]"
                    }`}
                  >
                    Ausführlich
                  </button>
                </div>
              </div>

              <h1
                id="dc-hero-heading"
                className="mt-6 text-[clamp(2.2rem,1.4rem+2.8vw,3.8rem)] leading-[1.03] font-semibold tracking-[-0.04em] text-[#0E1312]"
              >
                Matti Koenis
                <span className="mt-2 block text-[0.52em] font-normal tracking-[-0.02em] text-[#4A524F]">
                  Applikationsentwickler in Ausbildung bei Swisscom — mit klarem Kopf für Technik, Team &amp; Strategie.
                </span>
              </h1>

              {bioMode === "compact" ? (
                <p className="mt-6 max-w-[56ch] text-base leading-[1.7] text-[#3E4643]">
                  Ich entwickle in Zürich moderne Geschäftslösungen mit der Microsoft Power Platform sowie saubere
                  Web-Applikationen mit React und TypeScript. Ab August 2026 übernehme ich als{" "}
                  <strong className="font-semibold text-[#0E1312]">Host im Team Halo</strong> eine Teamlead-Rolle im Web
                  Development.
                </p>
              ) : (
                <div className="mt-6 max-w-[58ch] space-y-4 text-base leading-[1.7] text-[#3E4643]">
                  <p>
                    Während meiner Ausbildung bei Swisscom durchlaufe ich gezielt unterschiedliche Praxisstationen: vom
                    direkten Floorwalking-Support (Future Work) und den Programmiergrundlagen im Projekt Codemix über
                    Power Platform DevOps bis zur Koordination eines Web-Teams als Host im Team Halo.
                  </p>
                  <p>
                    Ich bin viersprachig aufgewachsen (Deutsch, Niederländisch, Englisch, Schwedisch), interessiere mich
                    stark für Wirtschaft, Finanzmärkte und neue digitale Produkte und finde meinen sportlichen Ausgleich
                    beim Tennis, im Gym, beim Skifahren und beim Joggen. Nach der Lehre suche ich ein Umfeld, in dem ich
                    aktiv mitgestalten und wachsen kann.
                  </p>
                </div>
              )}

              {/* Tabellarische Eckdaten im Finance-/Field-Sheet-Stil */}
              <dl className="mt-9 grid grid-cols-2 border-t border-l border-[#E3E7E5] sm:grid-cols-4">
                {[
                  ["BETRIEB", "Swisscom (Zürich)"],
                  ["NÄCHSTE ROLLE", "Team Halo Host"],
                  ["SPRACHEN", "DE · NL · EN · SV"],
                  ["INTERESSEN", "Finance · Tech · Sport"],
                ].map(([dt, dd]) => (
                  <div key={dt} className="border-r border-b border-[#E3E7E5] p-3.5">
                    <dt className="font-mono text-[10px] tracking-[0.08em] text-[#5C6461] uppercase">{dt}</dt>
                    <dd className="mt-1 text-sm font-semibold text-[#0E1312]">{dd}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 flex flex-wrap items-center gap-5">
                <a
                  href="#dc-sheet"
                  className="inline-flex min-h-10 items-center gap-2 bg-[#0B6B4F] px-5 font-mono text-xs font-semibold tracking-[0.06em] text-white uppercase transition hover:bg-[#0E1312]"
                >
                  <span>Kompetenz-Datenblatt (23)</span>
                  <ArrowDown aria-hidden="true" className="h-3.5 w-3.5" />
                </a>
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-xs font-medium text-[#454D4A] hover:text-[#0B6B4F]"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
                </a>
                <a
                  href={CONTACT.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-xs font-medium text-[#454D4A] hover:text-[#0B6B4F]"
                >
                  <span>GitHub</span>
                  <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Rechte 5 Spalten: Präzisions-Porträtkarte mit Stations-Chronik */}
            <div className="border border-[#E3E7E5] bg-[#FAFBF9] p-4 lg:col-span-5">
              <div className="aspect-[4/4.6] overflow-hidden bg-[#1D2322]">
                <Picture
                  image={STUDIO_COLOR}
                  alt="Porträt von Matti Koenis"
                  eager
                  sizes="(min-width: 1024px) 32vw, 92vw"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <div className="mt-4 divide-y divide-[#E3E7E5] font-mono text-[11px]">
                <div className="flex justify-between py-2">
                  <span className="text-[#5C6461]">AB AUG 2026</span>
                  <span className="font-semibold text-[#0B6B4F]">Team Halo — Host (Web Dev)</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-[#5C6461]">2025 – 2026</span>
                  <span className="text-[#0E1312]">Power Platform DevOps</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-[#5C6461]">FEB – JUL 2025</span>
                  <span className="text-[#0E1312]">Codemix Programmierprojekt</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-[#5C6461]">2024 – 2025</span>
                  <span className="text-[#0E1312]">Future Work Specialist</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABSCHNITT 2: TABELLARISCHES 18+5 KOMPETENZ-DATENBLATT */}
      <section id="dc-sheet" aria-labelledby="dc-sheet-heading" className="pt-18 pb-36 sm:pt-24">
        <div className="mx-auto max-w-[84rem] px-5 sm:px-10">
          <div className="flex flex-col justify-between gap-6 pb-8 lg:flex-row lg:items-end">
            <div>
              <p className="font-mono text-[11px] font-semibold tracking-[0.1em] text-[#0B6B4F] uppercase">
                DOSSIER 02 · FÄHIGKEITEN &amp; EINSATZGEBIETE
              </p>
              <h2
                id="dc-sheet-heading"
                className="mt-2 text-[clamp(1.75rem,1.3rem+1.8vw,2.6rem)] leading-tight font-semibold tracking-[-0.035em]"
              >
                Technisches &amp; soziales Spezifikationsblatt
              </h2>
            </div>

            <div role="group" aria-label="Spezifikation filtern" className="flex flex-wrap gap-1.5 font-mono text-xs">
              {[
                ["all", `Alle (${SPEC_ROWS.length})`],
                ["swisscom", "Swisscom Fokus"],
                ["web", "Web & Code"],
                ["data", "Daten & Docker"],
                ["human", "Arbeitsweise"],
              ].map(([key, label]) => {
                const active = filter === key;
                return (
                  <button
                    key={key}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setFilter(key)}
                    className={`border px-3 py-1.5 transition ${
                      active
                        ? "border-[#0B6B4F] bg-[#0B6B4F] font-semibold text-white"
                        : "border-[#D5DBD8] bg-white text-[#454D4A] hover:border-[#0E1312] hover:text-[#0E1312]"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="overflow-x-auto border-t-2 border-[#0E1312]">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-[#0E1312] font-mono text-[11px] tracking-[0.08em] text-[#5C6461] uppercase">
                  <th scope="col" className="py-3 pr-4 font-medium">Bereich</th>
                  <th scope="col" className="py-3 pr-4 font-medium">Kompetenz</th>
                  <th scope="col" className="py-3 pr-4 font-medium">Konkreter Einsatz &amp; Fokus</th>
                  <th scope="col" className="py-3 text-right font-medium">Verankerung</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E3E7E5]">
                {visibleRows.map((row) => (
                  <tr key={row.name} className="transition-colors hover:bg-[#F5F8F6]">
                    <td className="py-3 pr-4 font-mono text-xs whitespace-nowrap text-[#5C6461]">{row.cat}</td>
                    <td className="py-3 pr-4 font-semibold whitespace-nowrap text-[#0E1312]">{row.name}</td>
                    <td className="py-3 pr-4 text-[#3E4643]">{row.context}</td>
                    <td className="py-3 text-right font-mono text-xs whitespace-nowrap text-[#0B6B4F]">{row.station}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
