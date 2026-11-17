import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

// Kleines Label, das dem Mauszeiger über der Projektliste mit etwas Verzögerung folgt.
// Nur mit feinem Zeiger; reine Dekoration, der Link selbst trägt den zugänglichen Namen.
export function CursorLabel({ label, active }) {
  const ref = useRef(null);
  const pos = useRef({ x: 0, y: 0, cx: 0, cy: 0, raf: 0, placed: false });

  useEffect(() => {
    const el = ref.current;
    if (!el || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return undefined;
    const p = pos.current;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const tick = () => {
      p.cx += (p.x - p.cx) * (still ? 1 : 0.18);
      p.cy += (p.y - p.cy) * (still ? 1 : 0.18);
      el.style.transform = `translate3d(${p.cx.toFixed(1)}px, ${p.cy.toFixed(1)}px, 0)`;
      p.raf = Math.abs(p.x - p.cx) + Math.abs(p.y - p.cy) > 0.3 ? requestAnimationFrame(tick) : 0;
    };
    const onMove = (e) => {
      p.x = e.clientX;
      p.y = e.clientY;
      if (!p.placed) {
        p.cx = p.x;
        p.cy = p.y;
        p.placed = true;
      }
      if (!p.raf) p.raf = requestAnimationFrame(tick);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(p.raf);
    };
  }, []);

  return (
    <div ref={ref} className="cursor-label" data-on={active ? "" : undefined} aria-hidden="true">
      <span>
        {label}
        <ArrowRight className="h-3.5 w-3.5" />
      </span>
    </div>
  );
}
