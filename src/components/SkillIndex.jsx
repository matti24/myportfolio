import { useState } from "react";
import { ArrowUp } from "lucide-react";
import { Section, Intro } from "./Section.jsx";
import {
  SKILL_GROUPS,
  SKILL_STATION,
  STATION_ORDER,
} from "../content/profile.js";

// Kompetenzen als Werkzeugliste, verknüpft mit dem Werdegang:
// Hover, Fokus oder Antippen zeigt, bei welcher Station eine Fähigkeit dazukam.
export function SkillIndex({ t }) {
  const s = t.home.skills;
  const stations = t.home.path.stations;
  const [active, setActive] = useState(null);
  const station = active ? SKILL_STATION[active] : null;
  const info = station ? stations[station] : null;

  return (
    <Section id="skills" title={s.title}>
      <Intro heading={s.heading} lead={s.lead} />

      {/* Hover-Bereich umfasst Liste und Herkunft, damit der Link "Zur Station" erreichbar bleibt */}
      <div onMouseLeave={() => setActive(null)}>
        <dl
          className="skills mt-14 border-t border-ink"
          data-active={active ? "" : undefined}
        >
          {SKILL_GROUPS.map((g) => (
            <div
              key={g.key}
              className="reveal grid gap-1 border-b border-rule py-5 md:grid-cols-9 md:gap-6"
            >
              <dt className="text-grey md:col-span-3 md:pt-1">
                {s.groups[g.key]}
              </dt>
              <dd className="t-m md:col-span-6">
                {g.items.map((item, i) => (
                  <span key={item}>
                    <button
                      type="button"
                      className="sk"
                      data-on={active === item ? "" : undefined}
                      aria-pressed={active === item}
                      aria-controls="skill-origin"
                      onMouseEnter={() => setActive(item)}
                      onFocus={() => setActive(item)}
                      onClick={() => setActive(item)}
                    >
                      {item}
                    </button>
                    {i < g.items.length - 1 ? ", " : null}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>

        {/* Herkunft der gewählten Fähigkeit auf der Zeitachse der fünf Stationen */}
        <div id="skill-origin" className="mt-8" aria-live="polite">
          <ol className="grid gap-1.5" style={{ gridTemplateColumns: `repeat(${STATION_ORDER.length}, minmax(0, 1fr))` }} aria-hidden="true">
            {STATION_ORDER.map((id) => (
              <li
                key={id}
                className="origin-bar"
                data-on={station === id ? "" : undefined}
              />
            ))}
          </ol>
          <div className="t-s mt-3 flex min-h-[3em] flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            {info ? (
              <>
                <p>
                  <span className="text-grey">{s.learnedIn} </span>
                  <span className="font-medium text-blue">{info.title}</span>
                  <span className="text-grey"> · {info.period}</span>
                </p>
                <a
                  href={`#station-${station}`}
                  className="group ulink inline-flex items-center gap-1.5"
                >
                  {s.toStation}
                  <ArrowUp aria-hidden="true" className="h-3.5 w-3.5" />
                </a>
              </>
            ) : (
              <p className="text-grey">{s.inspectHint}</p>
            )}
          </div>
        </div>
      </div>

      <h3 className="mt-20 font-medium">{s.socialTitle}</h3>
      <dl className="mt-5 border-t border-ink">
        {s.social.map((x) => (
          <div
            key={x.name}
            className="reveal grid gap-1 border-b border-rule py-5 md:grid-cols-9 md:gap-6"
          >
            <dt className="t-m md:col-span-3">{x.name}</dt>
            <dd className="text-grey md:col-span-6 md:pt-1">{x.description}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
