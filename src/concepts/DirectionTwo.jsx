import { useState } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Picture } from "../components/Picture.jsx";
import { CONTACT } from "../content/projects.js";

const STUDIO_COLOR = { base: "studio-color", widths: [480, 800, 1120], width: 1120, height: 1400 };

const STATIONS = [
  {
    numeral: "01",
    era: "Ab Aug ’26",
    title: "Team Halo — Host",
    place: "Swisscom · Zürich & Bern",
    current: true,
    story:
      "Übernahme einer Teamlead-Rolle im Web-Development-Team mit Verantwortung für Koordination, gemeinsame Planung, Zusammenarbeit und moderne Weblösungen.",
    craft: "Web Development · Frontend · Teamführung · Koordination",
  },
  {
    numeral: "02",
    era: "2025 – ’26",
    title: "Power Platform DevOps",
    place: "Swisscom · Zürich",
    story:
      "Entwicklung, Betrieb und Weiterentwicklung praxisnaher Geschäftslösungen mit PowerApps, Power BI, Power Automate und SharePoint nach DevOps-Methoden.",
    craft: "PowerApps · Power BI · Power Automate · SharePoint · DevOps",
  },
  {
    numeral: "03",
    era: "Frühjahr ’25",
    title: "Codemix Programmierprojekt",
    place: "Swisscom · Zürich",
    story:
      "Strukturierter Einstieg in die Softwareentwicklung mit Fokus auf saubere Web-Grundlagen, verständlichen Code und direkte praktische Umsetzung.",
    craft: "HTML · CSS · JavaScript · Software-Grundlagen",
  },
  {
    numeral: "04",
    era: "2024 – ’25",
    title: "Future Work Specialist",
    place: "Swisscom · Zürich & Bern",
    story:
      "Mitarbeit an zukünftigen Arbeitsmodellen sowie direkter IT-Support im Floorwalking – nah an den Menschen und ihren täglichen Anforderungen.",
    craft: "IT-Support · Direkte Kommunikation · Teamarbeit",
  },
];

const CRAFT_INDEX = [
  { name: "React & TypeScript", role: "Moderne Web-Oberflächen", group: "web" },
  { name: "JavaScript & CSS", role: "Fundament & Interaktion", group: "web" },
  { name: "PowerApps Canvas", role: "Business-Applikationen", group: "swisscom" },
  { name: "Power Automate", role: "Workflow-Automatisierung", group: "swisscom" },
  { name: "Microsoft Power Platform", role: "Architektur & Betrieb", group: "swisscom" },
  { name: "SharePoint & Power BI", role: "Datenhaltung & Reports", group: "swisscom" },
  { name: "Node.js & Java", role: "Backend-Logik & Services", group: "web" },
  { name: "SQL, MariaDB & MongoDB", role: "Relationale & NoSQL-Daten", group: "web" },
  { name: "Docker, Git & VS Code", role: "DevOps & tägliches Setup", group: "web" },
  { name: "IntelliJ IDEA", role: "Java- & Modul-Entwicklung", group: "web" },
  { name: "Selbständiges Arbeiten", role: "Fokus & Eigenverantwortung", group: "human" },
  { name: "Teamarbeit & Empathie", role: "Verlässlich im Zusammenspiel", group: "human" },
  { name: "Klare Kommunikation", role: "Verständlich in 4 Sprachen", group: "human" },
  { name: "Lösungsorientierung", role: "Pragmatisch & strukturiert", group: "human" },
];

export function DirectionTwo() {
  const [filter, setFilter] = useState("all");
  const visibleCraft = filter === "all" ? CRAFT_INDEX : CRAFT_INDEX.filter((item) => item.group === filter);

  return (
    <div className="min-h-screen bg-[#FAF8F4] text-[#161513] selection:bg-[#14533D] selection:text-[#FAF8F4]">
      {/* Ruhiger, luftiger Magazin-Kopf ohne Boxen */}
      <header className="mx-auto max-w-[82rem] px-5 pt-7 pb-6 sm:px-10 lg:px-12">
        <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#DFD9CE] pb-5">
          <a href="#d2-top" className="flex items-baseline gap-2.5">
            <span className="text-base font-semibold tracking-tight text-[#161513]">Matti Koenis</span>
            <span className="font-serif text-xl text-[#5E5A53] italic">— Zürich</span>
          </a>

          <nav aria-label="Entwurf 2 Navigation" className="flex flex-wrap items-baseline gap-6 text-sm text-[#5E5A53]">
            <a href="#d2-top" className="transition-colors hover:text-[#161513]">
              <span className="mr-1 font-serif text-base text-[#14533D] italic">I.</span>Porträt
            </a>
            <a href="#d2-journey" className="transition-colors hover:text-[#161513]">
              <span className="mr-1 font-serif text-base text-[#14533D] italic">II.</span>Weg &amp; Handwerk
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="border-b border-[#14533D] pb-0.5 font-medium text-[#14533D] transition-colors hover:text-[#161513]"
            >
              Schreiben
            </a>
          </nav>
        </div>
      </header>

      {/* ABSCHNITT 1: REDAKTIONELLER EINSTIEG (ASYMMETRISCHES PORTRÄT) */}
      <section id="d2-top" aria-labelledby="d2-hero-heading" className="mx-auto max-w-[82rem] px-5 pt-6 pb-20 sm:px-10 sm:pt-10 sm:pb-28 lg:px-12">
        <p className="font-mono text-[11px] tracking-[0.14em] text-[#14533D] uppercase">
          Applikationsentwickler in Ausbildung · Swisscom · Region Zürich
        </p>

        <h1
          id="d2-hero-heading"
          className="mt-5 max-w-[21ch] text-[clamp(2.25rem,1.35rem+3.4vw,4.55rem)] leading-[1.05] font-medium tracking-[-0.035em] text-[#161513]"
        >
          Ich bin Matti — ich entwickle{" "}
          <em className="font-serif text-[1.12em] font-normal text-[#14533D] italic">klare Applikationen</em>, arbeite
          konzentriert im{" "}
          <em className="font-serif text-[1.12em] font-normal italic">Team</em> und denke gerne über den Code hinaus.
        </h1>

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:items-start lg:gap-10">
          {/* Spalte 1–4: Persönliche Erzählung */}
          <div className="lg:col-span-4 lg:pt-6">
            <p className="text-base leading-[1.72] text-[#3D3A35]">
              Bei Swisscom lerne ich Softwareentwicklung von der Pike auf: im aktuellen Alltag auf der Microsoft Power
              Platform und ab August 2026 als <strong className="font-medium text-[#161513]">Host im Team Halo</strong>{" "}
              mit Verantwortung für Web-Entwicklung und Teamkoordination.
            </p>
            <p className="mt-5 text-base leading-[1.72] text-[#3D3A35]">
              Privat begeistern mich Wirtschaft, Strategie und neue digitale Produkte. Und weil gute Ideen einen freien
              Kopf brauchen, findet man mich nach Feierabend auf dem Tennisplatz, im Gym, auf den Ski oder beim Joggen.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-6">
              <a
                href={`mailto:${CONTACT.email}`}
                className="group inline-flex min-h-11 items-center gap-2.5 bg-[#14533D] px-6 py-3 text-sm font-medium text-[#FAF8F4] transition-colors hover:bg-[#0E3D2C]"
              >
                <span>Gespräch starten</span>
                <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#d2-journey"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#5E5A53] transition-colors hover:text-[#161513]"
              >
                <span>Stationen &amp; Handwerk</span>
                <ArrowDown aria-hidden="true" className="h-4 w-4 text-[#14533D]" />
              </a>
            </div>
          </div>

          {/* Spalte 5–9: Gerahmtes Farbiges Studioporträt mit Passepartout */}
          <figure className="lg:col-span-5">
            <div className="border border-[#D8D1C4] bg-white p-2.5 shadow-[0_24px_54px_-32px_rgba(22,21,19,0.28)] sm:p-3.5">
              <div className="aspect-[4/5] overflow-hidden bg-[#262B31]">
                <Picture
                  image={STUDIO_COLOR}
                  alt="Farbiges Studioporträt von Matti Koenis"
                  eager
                  sizes="(min-width: 1024px) 34vw, (min-width: 640px) 26rem, 92vw"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
            <figcaption className="mt-3.5 flex items-baseline justify-between gap-4 px-0.5 text-xs text-[#5E5A53]">
              <span className="font-serif text-base text-[#161513] italic">Matti Koenis, Aufnahme in Zürich</span>
              <span className="font-mono text-[10.5px] tracking-[0.08em] uppercase">JG. IN AUSBILDUNG · EFZ</span>
            </figcaption>
          </figure>

          {/* Spalte 10–12: Redaktionelle Randnotizen statt Kacheln */}
          <dl className="divide-y divide-[#DFD9CE] border-y border-[#DFD9CE] lg:col-span-3 lg:mt-6">
            <div className="py-5">
              <dt className="font-mono text-[10.5px] tracking-[0.12em] text-[#5E5A53] uppercase">Sprachen</dt>
              <dd className="mt-1.5 font-serif text-2xl text-[#161513]">Deutsch, Niederländisch, Englisch &amp; Schwedisch</dd>
            </div>
            <div className="py-5">
              <dt className="font-mono text-[10.5px] tracking-[0.12em] text-[#5E5A53] uppercase">Arbeitsstil</dt>
              <dd className="mt-1.5 font-serif text-2xl text-[#161513]">Konzentriert, eigenständig &amp; teamstark</dd>
            </div>
            <div className="py-5">
              <dt className="font-mono text-[10.5px] tracking-[0.12em] text-[#5E5A53] uppercase">Ausgleich</dt>
              <dd className="mt-1.5 font-serif text-2xl text-[#161513]">Tennis, Fitness, Ski &amp; Laufen</dd>
            </div>
            <div className="py-5">
              <dt className="font-mono text-[10.5px] tracking-[0.12em] text-[#14533D] uppercase">Perspektive</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-[#3D3A35]">
                Bereit für den nächsten Schritt und neue Herausforderungen nach der Lehre.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* DOPPELLINIEN-KAPITELTRENNER */}
      <div className="border-y border-[#DFD9CE] bg-[#F4F0E8]/70">
        <div className="mx-auto flex max-w-[82rem] items-center justify-between px-5 py-2.5 font-mono text-[11px] tracking-[0.12em] text-[#5E5A53] uppercase sm:px-10 lg:px-12">
          <span>Kapitel II — Erfahrung &amp; Handwerk</span>
          <span>Swisscom · 2024 – Heute</span>
        </div>
      </div>

      {/* ABSCHNITT 2: MAGAZIN-SPREAD (SWISSCOM-WEG + WERKZEUG-INDEX) */}
      <section id="d2-journey" aria-labelledby="d2-journey-heading" className="mx-auto max-w-[82rem] px-5 pt-20 pb-32 sm:px-10 sm:pt-28 sm:pb-36 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          {/* Linke Sticky-Spalte: Leitgedanke & Haltung */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-10">
              <span aria-hidden="true" className="font-serif text-5xl text-[#14533D] italic">
                II.
              </span>
              <h2
                id="d2-journey-heading"
                className="mt-3 text-[clamp(1.9rem,1.35rem+1.9vw,2.85rem)] leading-[1.08] font-medium tracking-[-0.03em]"
              >
                Mein Weg in der Ausbildung — und{" "}
                <em className="font-serif text-[1.12em] font-normal italic">wofür ich stehe.</em>
              </h2>

              <div className="mt-8 space-y-6 border-l-2 border-[#14533D] pl-5">
                <div>
                  <h3 className="font-mono text-[11px] font-semibold tracking-[0.12em] text-[#14533D] uppercase">
                    Was ich mitbringe
                  </h3>
                  <p className="mt-1.5 text-sm leading-[1.68] text-[#3D3A35]">
                    Eine saubere Arbeitsweise, Ruhe unter Anspruch, Selbständigkeit und echten Teamgeist – verbunden mit
                    dem Willen, jeden Tag dazuzulernen.
                  </p>
                </div>
                <div>
                  <h3 className="font-mono text-[11px] font-semibold tracking-[0.12em] text-[#14533D] uppercase">
                    Wofür ich stehe
                  </h3>
                  <p className="mt-1.5 text-sm leading-[1.68] text-[#3D3A35]">
                    Klare Kommunikation, Verlässlichkeit und moderne Applikationen mit einem durchdachten, gepflegten
                    Auftritt.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Rechte Spalte: Offene Stationen + Buch-Index der Skills */}
          <div className="lg:col-span-8">
            <ol className="divide-y divide-[#DFD9CE] border-t border-[#DFD9CE]">
              {STATIONS.map((st) => (
                <li key={st.title} className="grid gap-4 py-8 sm:grid-cols-12 sm:gap-6 sm:py-10">
                  <div className="sm:col-span-4">
                    <p className="font-serif text-3xl leading-none text-[#161513] italic">{st.era}</p>
                    <p className="mt-2 font-mono text-[11px] tracking-[0.08em] text-[#5E5A53] uppercase">{st.place}</p>
                    {st.current ? (
                      <p className="mt-2 inline-block border-b border-[#14533D] font-mono text-[10.5px] font-semibold tracking-[0.1em] text-[#14533D] uppercase">
                        Aktuelle / Nächste Station
                      </p>
                    ) : null}
                  </div>
                  <div className="sm:col-span-8">
                    <h3 className="text-xl font-semibold tracking-tight text-[#161513] sm:text-2xl">{st.title}</h3>
                    <p className="mt-2.5 text-base leading-[1.68] text-[#3D3A35]">{st.story}</p>
                    <p className="mt-4 font-mono text-xs text-[#5E5A53]">{st.craft}</p>
                  </div>
                </li>
              ))}
            </ol>

            {/* Redaktioneller Werkzeug- & Kompetenz-Index mit Punktlinie statt Karten */}
            <div className="mt-14 border-t-2 border-[#161513] pt-10">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-baseline">
                <div>
                  <h3 className="font-serif text-3xl text-[#161513] italic">Werkzeugkasten &amp; Zusammenarbeit</h3>
                  <p className="mt-1 text-sm text-[#5E5A53]">Alle 18 Informatik-Skills und persönlichen Stärken im Überblick</p>
                </div>

                <div role="group" aria-label="Kompetenzen filtern" className="flex flex-wrap gap-5 text-xs font-medium">
                  {[
                    ["all", "Gesamt"],
                    ["swisscom", "Swisscom Fokus"],
                    ["web", "Web & Backend"],
                    ["human", "Arbeitsweise"],
                  ].map(([key, label]) => {
                    const active = filter === key;
                    return (
                      <button
                        key={key}
                        type="button"
                        aria-pressed={active}
                        onClick={() => setFilter(key)}
                        className={`pb-1 font-mono tracking-[0.06em] uppercase transition-colors ${
                          active
                            ? "border-b-2 border-[#14533D] font-semibold text-[#14533D]"
                            : "text-[#5E5A53] hover:text-[#161513]"
                        }`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <ul className="mt-8 grid gap-x-10 gap-y-3.5 sm:grid-cols-2">
                {visibleCraft.map((item) => (
                  <li key={item.name} className="flex items-baseline gap-2 text-sm">
                    <span className="shrink-0 font-medium text-[#161513]">{item.name}</span>
                    <span
                      aria-hidden="true"
                      className="grow border-b border-dotted border-[#C9C1B4] translate-y-[-3px]"
                    />
                    <span className="shrink-0 font-serif text-base text-[#5E5A53] italic">{item.role}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
