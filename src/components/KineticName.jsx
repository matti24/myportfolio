import { useEffect, useRef } from "react";

const BASE = 500;
const PEAK = 700;

// Name aus einzelnen Buchstaben mit variabler Strichstärke.
// Die Buchstaben-Boxen bekommen nach dem Laden der Schrift eine feste Breite: dicker werdende Buchstaben
// verschieben so ihre Nachbarn nicht (kein Layout-Shift). Die Interaktion ist reine Darstellung.
export function KineticName({ text, as = "h1", id, className = "", intro = false, decorative = false }) {
  const Tag = as;
  const rootRef = useRef(null);
  const words = text.split(" ");
  let index = 0;

  useEffect(() => {
    const root = rootRef.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const letters = [...root.querySelectorAll(".kl")];
    const weight = letters.map(() => BASE);
    const target = letters.map(() => BASE);
    let raf = 0;
    let visible = false;
    let touched = false;
    let wave = null;

    const measure = () => {
      letters.forEach((l) => {
        l.style.width = "";
        l.style.fontWeight = "";
      });
      letters.forEach((l) => {
        l.style.width = `${l.getBoundingClientRect().width}px`;
      });
    };

    const aim = (x, y) => {
      letters.forEach((l, i) => {
        const r = l.getBoundingClientRect();
        const reach = r.height * 0.9;
        const dx = (x - (r.left + r.width / 2)) / reach;
        const dy = (y - (r.top + r.height / 2)) / (reach * 1.4);
        target[i] = BASE + (PEAK - BASE) * Math.exp(-(dx * dx + dy * dy));
      });
    };
    const rest = () => target.fill(BASE);

    const frame = (now) => {
      raf = 0;
      if (wave) {
        const t = (now - wave.start) / 1300;
        if (t >= 1) {
          wave = null;
          rest();
        } else {
          const box = root.getBoundingClientRect();
          aim(box.left - box.width * 0.2 + box.width * 1.4 * t, box.top + box.height / 2);
        }
      }
      let moving = !!wave;
      letters.forEach((l, i) => {
        weight[i] += (target[i] - weight[i]) * 0.14;
        if (Math.abs(target[i] - weight[i]) > 0.5) moving = true;
        else weight[i] = target[i];
        l.style.fontWeight = Math.round(weight[i]);
      });
      if (moving) raf = requestAnimationFrame(frame);
    };
    const kick = () => {
      if (!raf) raf = requestAnimationFrame(frame);
    };
    const runWave = () => {
      if (touched) return;
      wave = { start: performance.now() };
      kick();
    };

    const onPointer = (e) => {
      if (!visible || e.pointerType === "touch") return;
      touched = true;
      wave = null;
      aim(e.clientX, e.clientY);
      kick();
    };
    const onTouch = (e) => {
      if (!visible) return;
      const p = e.touches[0];
      if (!p) return;
      touched = true;
      wave = null;
      aim(p.clientX, p.clientY);
      kick();
    };
    const onLeave = () => {
      rest();
      kick();
    };

    let introTimer = 0;
    const io = new IntersectionObserver(([entry]) => {
      const was = visible;
      visible = entry.isIntersecting;
      if (!visible) onLeave();
      // Beim ersten Auftauchen läuft einmal eine Welle durch den Namen
      if (visible && !was && !touched) introTimer = setTimeout(runWave, intro ? 900 : 150);
    });

    document.fonts.ready.then(() => {
      measure();
      io.observe(root);
    });
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onPointer, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    window.addEventListener("touchstart", onTouch, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("touchend", onLeave, { passive: true });
    return () => {
      io.disconnect();
      clearTimeout(introTimer);
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointer);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("touchstart", onTouch);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("touchend", onLeave);
    };
  }, [intro]);

  return (
    <Tag id={id} ref={rootRef} className={`kinetic ${intro ? "kinetic-intro" : ""} ${className}`} aria-hidden={decorative || undefined}>
      {decorative ? null : <span className="sr-only">{text}</span>}
      {words.map((word) => (
        <span key={word} className="line" aria-hidden="true">
          {[...word].map((ch) => {
            const i = index++;
            return (
              <span key={i} className="kl" style={{ "--i": i }}>
                {ch}
              </span>
            );
          })}
        </span>
      ))}
    </Tag>
  );
}
