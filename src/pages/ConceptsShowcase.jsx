import { useEffect, useState } from "react";
import { EyeOff, Layers } from "lucide-react";
import { DirectionOne } from "../concepts/DirectionOne.jsx";
import { DirectionTwo } from "../concepts/DirectionTwo.jsx";
import { DirectionThree } from "../concepts/DirectionThree.jsx";

const DIRECTIONS = [
  {
    id: "1",
    short: "01 · Plakat & Register",
    title: "Zürcher Plakat",
    note: "Scharfkantig (0px), 1px-Architekturraster, S/W-Studioporträt & Zinnoberrot",
    accent: "#E02400",
  },
  {
    id: "2",
    short: "02 · Editorial Porträt",
    title: "Editorial Monograph",
    note: "Warmes Naturpapier, Instrument Serif + Grotesk, Magazin-Spread & Court-Grün",
    accent: "#14533D",
  },
  {
    id: "3",
    short: "03 · Live-Matrix",
    title: "Personal Spec / Matrix",
    note: "Reinweiss mit Schnittmarken, 3-Facetten-Intro & vernetzte Erfahrungs-Skill-Matrix",
    accent: "#0038FF",
  },
];

export function ConceptsShowcase({ initialDirection = "1" }) {
  const [active, setActive] = useState(initialDirection);
  const [dockMinimized, setDockMinimized] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const d = params.get("d");
    if (d === "1" || d === "2" || d === "3") {
      setActive(d);
    }
    if (params.get("clean") === "1") {
      setDockMinimized(true);
    }
  }, []);

  const selectDirection = (id) => {
    setActive(id);
    const url = new URL(window.location.href);
    url.pathname = `/entwurf-${id}/`;
    url.search = "";
    window.history.pushState({}, "", url.toString());
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const currentMeta = DIRECTIONS.find((d) => d.id === active) || DIRECTIONS[0];

  return (
    <div id="top">
      <a
        href="#concept-main"
        className="sr-only z-50 bg-[#0A0A0A] px-5 py-3 font-mono text-xs font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Zum Entwurf springen
      </a>

      <main id="concept-main" tabIndex={-1} className="outline-none">
        {active === "1" ? <DirectionOne /> : null}
        {active === "2" ? <DirectionTwo /> : null}
        {active === "3" ? <DirectionThree /> : null}
      </main>

      {/* Dezentes schwebendes Auswahl-Dock am unteren Bildschirmrand zur Beurteilung der 3 Richtungen */}
      <aside
        aria-label="Designrichtung wechseln"
        className="fixed right-4 bottom-4 left-4 z-50 mx-auto flex max-w-fit items-center justify-center pointer-events-none"
      >
        {dockMinimized ? (
          <button
            type="button"
            onClick={() => setDockMinimized(false)}
            className="pointer-events-auto inline-flex min-h-10 items-center gap-2 rounded-full border border-black/15 bg-[#111215]/95 px-4 py-2 font-mono text-xs font-medium text-white shadow-xl backdrop-blur-md transition hover:bg-black"
          >
            <Layers aria-hidden="true" className="h-3.5 w-3.5" />
            <span>Entwurf 0{active}/03 wechseln</span>
          </button>
        ) : (
          <div className="pointer-events-auto flex flex-col gap-1.5 rounded-2xl border border-white/12 bg-[#111215]/95 p-2 text-white shadow-2xl backdrop-blur-md sm:flex-row sm:items-center sm:rounded-full sm:px-2.5 sm:py-1.5">
            <div className="flex flex-wrap items-center gap-1">
              {DIRECTIONS.map((dir) => {
                const isSelected = dir.id === active;
                return (
                  <button
                    key={dir.id}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => selectDirection(dir.id)}
                    className={`inline-flex min-h-9 items-center gap-2 rounded-full px-3.5 py-1.5 font-mono text-xs transition ${
                      isSelected ? "bg-white font-semibold text-[#0A0A0A]" : "text-white/80 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: dir.accent }}
                    />
                    <span>{dir.short}</span>
                  </button>
                );
              })}
            </div>

            <span className="hidden border-l border-white/15 pl-3 pr-1 text-[11px] text-white/70 xl:inline">
              {currentMeta.note}
            </span>

            <button
              type="button"
              onClick={() => setDockMinimized(true)}
              title="Auswahlleiste ausblenden"
              aria-label="Auswahlleiste ausblenden"
              className="ml-auto inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white sm:ml-1"
            >
              <EyeOff aria-hidden="true" className="h-3.5 w-3.5" />
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
