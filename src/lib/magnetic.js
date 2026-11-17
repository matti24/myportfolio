// Elemente mit data-magnetic folgen dem Mauszeiger ein Stück, solange er darüber ist.
// Nur mit feinem Zeiger und ohne Wunsch nach reduzierter Bewegung; ein Listener für die ganze Seite.
export function initMagnetic() {
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let current = null;
  const release = () => {
    if (current) current.style.transform = "";
    current = null;
  };

  window.addEventListener(
    "pointermove",
    (e) => {
      const el = e.target instanceof Element ? e.target.closest("[data-magnetic]") : null;
      if (current && current !== el) release();
      if (!el) return;
      current = el;
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${(dx * 0.22).toFixed(1)}px, ${(dy * 0.35).toFixed(1)}px)`;
    },
    { passive: true }
  );
  document.documentElement.addEventListener("pointerleave", release);
}
