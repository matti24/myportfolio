import { createGlobeRenderer } from "./globeRenderer";

let canvas = null;
let ctx = null;
let renderer = null;
let rafId = 0;
let running = false;

let dpr = 1;
let cssW = 1;
let cssH = 1;

let lastScroll = -Infinity;
let lastDraw = -Infinity;

function applySize(d) {
  dpr = d.dpr;
  cssW = d.width;
  cssH = d.height;
  canvas.width = Math.max(1, Math.round(cssW * dpr));
  canvas.height = Math.max(1, Math.round(cssH * dpr));
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  renderer.setSize(cssW, cssH, d.isMobile);
}

function loop(t) {
  rafId = requestAnimationFrame(loop);
  // Konstante 60fps – das Rendering läuft off-thread, der Main-Thread bleibt frei.
  if (t - lastDraw < 1000 / 60) return;
  lastDraw = t;
  renderer.frame(t);
}

self.onmessage = (e) => {
  const d = e.data;
  if (d.type === "init") {
    canvas = d.canvas;
    ctx = canvas.getContext("2d");
    if (!ctx) return;
    renderer = createGlobeRenderer(ctx);
    applySize(d);
    if (!running) {
      running = true;
      rafId = requestAnimationFrame(loop);
    }
  } else if (d.type === "land" && renderer) {
    // Länderdaten kommen fertig geparst vom Main-Thread (früh angestoßen).
    renderer.setLand(d.land);
  } else if (d.type === "resize" && renderer) {
    applySize(d);
  } else if (d.type === "scroll" && renderer) {
    renderer.setTargetProgress(d.progress);
    lastScroll = performance.now();
  } else if (d.type === "stop") {
    running = false;
    cancelAnimationFrame(rafId);
  }
};
