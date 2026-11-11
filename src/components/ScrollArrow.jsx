import { useEffect, useRef } from "react";

// Pfeil aus gestapelten Ebenen: echte Tiefe mit CSS 3D, ohne WebGL-Bibliothek
const LAYERS = 20;
const PATH = "M0 20H58V4L96 28L58 52V36H0Z";

// Läuft links neben der Liste mit und zeigt auf die Zeile auf Bildschirmhöhe.
// onPoint erhält den data-key der Zeile, auf die der Pfeil gerade zeigt.
export function ScrollArrow({ listRef, onPoint }) {
  const moverRef = useRef(null);
  const rotorRef = useRef(null);
  const fillRef = useRef(null);
  const pointRef = useRef(onPoint);

  useEffect(() => {
    pointRef.current = onPoint;
  }, [onPoint]);

  useEffect(() => {
    const list = listRef.current;
    const mover = moverRef.current;
    if (!list || !mover) return undefined;
    const desktop = window.matchMedia("(min-width: 1024px)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0;
    let last = null;

    const update = () => {
      raf = 0;
      if (!desktop.matches) return;
      const box = list.getBoundingClientRect();
      const h = mover.offsetHeight;
      const range = Math.max(box.height - h, 1);
      const y = Math.min(Math.max(window.innerHeight / 2 - box.top - h / 2, 0), range);
      const p = y / range;
      // Eine volle, gleichmässige Drehung um die Längsachse über die ganze Liste: oben und unten flach, dazwischen symmetrisch
      const roll = reduce.matches ? 0 : p * 360;
      mover.style.transform = `translate3d(0, ${y}px, 0)`;
      rotorRef.current.style.transform = `rotateY(-32deg) rotateX(${roll}deg)`;
      fillRef.current.style.transform = `scaleY(${(y + h / 2) / box.height})`;

      const tip = box.top + y + h / 2;
      const row = [...list.children].find((li) => {
        const b = li.getBoundingClientRect();
        return tip >= b.top && tip < b.bottom;
      });
      const key = row?.dataset.key;
      if (key && key !== last) {
        last = key;
        pointRef.current?.(key);
      }
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    // Nur rechnen, solange die Liste sichtbar ist
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        window.addEventListener("scroll", schedule, { passive: true });
        schedule();
      } else {
        window.removeEventListener("scroll", schedule);
      }
    });
    io.observe(list);
    window.addEventListener("resize", schedule);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [listRef]);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-full mr-10 hidden w-28 lg:block xl:mr-16">
      <div className="absolute inset-y-0 left-3 w-px bg-rule">
        <div ref={fillRef} className="h-full w-full origin-top bg-blue" style={{ transform: "scaleY(0)" }} />
      </div>
      <div ref={moverRef} className="absolute top-0 left-0 h-14 w-24 will-change-transform" style={{ perspective: "520px" }}>
        <div ref={rotorRef} className="relative h-full w-full" style={{ transformStyle: "preserve-3d", transform: "rotateY(-32deg)" }}>
          {Array.from({ length: LAYERS }, (_, i) => {
            const face = i === 0 || i === LAYERS - 1;
            return (
              <svg
                key={i}
                viewBox="0 0 96 56"
                className="absolute inset-0 h-full w-full"
                style={{ transform: `translateZ(${(i - (LAYERS - 1) / 2) * 0.9}px)` }}
              >
                <path d={PATH} fill={face ? "#121212" : `hsl(208 82% ${22 + (i / LAYERS) * 14}%)`} />
              </svg>
            );
          })}
        </div>
      </div>
    </div>
  );
}
