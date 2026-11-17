import { useEffect, useState } from "react";

const ZONE = "Europe/Zurich";

// Ortszeit in Zürich. Die Zeit erscheint erst im Browser, damit das
// vorgerenderte HTML nicht von der Uhrzeit des Builds abhängt.
export function LocalTime({ label, lang }) {
  const [now, setNow] = useState(null);

  useEffect(() => {
    const tick = () => setNow(new Date());
    tick();
    const id = setInterval(tick, 10000);
    return () => clearInterval(id);
  }, []);

  let hh = "";
  let mm = "";
  if (now) {
    const parts = new Intl.DateTimeFormat(lang === "en" ? "en-GB" : lang, {
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
      timeZone: ZONE,
    }).formatToParts(now);
    hh = parts.find((p) => p.type === "hour")?.value ?? "";
    mm = parts.find((p) => p.type === "minute")?.value ?? "";
  }

  return (
    <li className="text-grey">
      <span>
        {label}{" "}
        <time className="inline-block min-w-[5ch] tabular-nums text-ink" dateTime={now ? `${hh}:${mm}` : undefined}>
          {now ? (
            <>
              {hh}
              <span className="blink">:</span>
              {mm}
            </>
          ) : null}
        </time>
      </span>
    </li>
  );
}
