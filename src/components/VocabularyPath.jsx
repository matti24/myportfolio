import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Section, Intro } from "./Section.jsx";
import { Picture } from "./Picture.jsx";
import { CURRENT_STATION, STATION_ORDER, STATION_PHOTOS, VOCABULARY, wordLabel } from "../content/profile.js";

const stationIndex = (id) => STATION_ORDER.indexOf(id);
const DONE = STATION_ORDER.length;

// Reihenfolge innerhalb einer Station, damit sich die Begriffe nacheinander einfärben
const ORDER_IN_STATION = VOCABULARY.map((w, i) => VOCABULARY.slice(0, i).filter((x) => x.station === w.station).length);

function wordState(word, active) {
  const si = stationIndex(word.station);
  if (active >= DONE || si < active) return "learned";
  if (si === active) return "current";
  return "future";
}

export function VocabularyPath({ t, lang }) {
  const p = t.home.path;
  const [active, setActive] = useState(-1);
  const markers = useRef([]);

  // Die Station, die gerade die Bildschirmmitte kreuzt, ist aktiv
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number(e.target.dataset.step));
        }
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );
    markers.current.filter(Boolean).forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const mark = (step) => (el) => {
    markers.current[step + 1] = el;
  };
  const learned = VOCABULARY.filter((w) => wordState(w, active) !== "future").length;
  const activeStation = active >= 0 && active < DONE ? p.stations[STATION_ORDER[active]] : null;

  return (
    <Section id="path" title={p.title}>
      <div ref={mark(-1)} data-step="-1">
        <Intro heading={p.heading} lead={p.lead} />
      </div>

      <div className="mt-16 grid gap-y-4 lg:mt-20 lg:grid-cols-9 lg:gap-x-6">
        <ol className="lg:col-span-4">
          {STATION_ORDER.map((id, i) => {
            const s = p.stations[id];
            const words = VOCABULARY.filter((w) => w.station === id).map((w) => wordLabel(w, lang));
            const state = active === -1 || active >= DONE ? "idle" : i === active ? "active" : "rest";
            return (
              <li
                key={id}
                id={`station-${id}`}
                ref={mark(i)}
                data-step={i}
                data-state={state}
                className="station border-t border-rule pt-6 pb-14 lg:min-h-[50vh]"
              >
                <p className="t-s flex items-center gap-2 tabular-nums text-grey">
                  {s.period}
                  {id === CURRENT_STATION ? (
                    <span className="inline-flex items-center gap-1.5 text-blue">
                      <span aria-hidden="true">·</span>
                      {p.currentLabel}
                    </span>
                  ) : null}
                </p>
                <h3 className="station-title t-l mt-3 font-medium">{s.title}</h3>
                <p className="t-s mt-1 text-grey">{s.place}</p>
                <p className="station-text mt-5 max-w-[42ch]">{s.text}</p>
                <p className="t-s mt-5 max-w-[42ch]">
                  <span className="text-grey">{p.newWords}: </span>
                  <span className="text-blue">{words.join(", ")}</span>
                </p>
                {STATION_PHOTOS[id] && s.photo ? (
                  <figure className="mt-8">
                    <div className="station-photo overflow-hidden bg-[#e9e9e7]" style={{ aspectRatio: `${STATION_PHOTOS[id].width} / ${STATION_PHOTOS[id].height}` }}>
                      <Picture
                        image={STATION_PHOTOS[id]}
                        alt={s.photo.alt}
                        sizes="(min-width: 1472px) 584px, (min-width: 1024px) 40vw, (min-width: 640px) 90vw, 100vw"
                        className="zoom-on-view h-full w-full object-cover"
                      />
                    </div>
                    <figcaption className="t-s mt-3 text-grey">{s.photo.caption}</figcaption>
                  </figure>
                ) : null}
              </li>
            );
          })}
          <li ref={mark(DONE)} data-step={DONE} className="border-t border-ink pt-6 pb-4 lg:min-h-[44vh]">
            <p className="t-s text-grey">{p.next.label}</p>
            <h3 className="t-l mt-3 max-w-[20ch] font-medium">{p.next.title}</h3>
            <p className="mt-5 max-w-[46ch] text-grey">{p.next.text}</p>
            <a href="#contact" className="group ulink mt-8 inline-flex items-center gap-2 font-medium">
              {p.next.cta}
              <ArrowRight aria-hidden="true" className="arrow h-4 w-4" />
            </a>
          </li>
        </ol>

        {/* Mobil: schmale, mitlaufende Leiste mit Fortschritt statt Wortwolke */}
        <div
          aria-hidden="true"
          className={`pointer-events-none fixed inset-x-0 bottom-0 z-30 border-t border-rule bg-paper/95 backdrop-blur-md transition-transform duration-500 ease-out lg:hidden ${
            active >= 0 && active < DONE ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="h-0.5 bg-blue transition-[width] duration-700 ease-out" style={{ width: `${(learned / VOCABULARY.length) * 100}%` }} />
          <div className="wrap t-s flex items-baseline justify-between gap-4 py-3">
            <span className="truncate">{activeStation ? activeStation.title : p.cloudLabel}</span>
            <span className="shrink-0 tabular-nums text-grey">{p.count(learned, VOCABULARY.length)}</span>
          </div>
        </div>

        {/* Visuelle Zusammenfassung; dieselben Begriffe stehen für Screenreader bei den Stationen */}
        <div className="hidden lg:col-span-5 lg:block" aria-hidden="true">
          <div className="sticky top-28">
            <div className="t-s flex items-baseline justify-between border-t border-ink pt-3">
              <span>{p.cloudLabel}</span>
              <span className="tabular-nums text-grey">{p.count(learned, VOCABULARY.length)}</span>
            </div>
            <p className="mt-8 text-[clamp(1.75rem,0.9rem+1.5vw,2.5rem)] leading-[1.18] tracking-[-0.025em]">
              {VOCABULARY.map((w, i) => (
                <span key={i}>
                  <span className="whitespace-nowrap">
                    <span className="word" data-state={wordState(w, active)} style={{ "--i": ORDER_IN_STATION[i] }}>
                      {wordLabel(w, lang)}
                    </span>
                    {i < VOCABULARY.length - 1 ? <span className="sep">{"\u00a0/"}</span> : null}
                  </span>{" "}
                </span>
              ))}
            </p>
            <p className="t-s mt-8 min-h-[1.5em] border-t border-rule pt-3 text-grey">
              {activeStation ? `${activeStation.title} · ${activeStation.period}` : active >= DONE ? p.next.label : "\u00a0"}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
