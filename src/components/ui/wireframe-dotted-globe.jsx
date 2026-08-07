"use client";

import { useEffect, useRef } from "react";
import { createGlobeRenderer } from "../../lib/globeRenderer";

// Länderdaten liegen in public/ und werden same-origin geladen (BASE_URL-sicher)
const LAND_URL = `${import.meta.env.BASE_URL}land-110m.json`;

// Download der Länderdaten so früh wie möglich anstoßen (beim ersten Import der
// Komponente, noch bevor React den Effekt ausführt). Der Request läuft damit
// parallel zum Hochfahren des Workers und wird nur EINMAL ausgeführt – Worker
// und Main-Thread-Fallback teilen sich dieselbe Promise.
let landDataPromise = null;
function getLandData() {
  if (!landDataPromise) {
    landDataPromise = fetch(LAND_URL)
      .then((res) => (res.ok ? res.json() : null))
      .catch(() => null);
  }
  return landDataPromise;
}

/**
 * Rotierender Draht-Globus als Hintergrund. Fokussiert beim Scrollen sanft auf
 * die Schweiz und zoomt heran. Rendert bevorzugt in einem Web Worker via
 * OffscreenCanvas (Main-Thread bleibt frei -> flüssiges Scrollen), mit Fallback
 * auf Main-Thread-Rendering für Browser ohne OffscreenCanvas.
 */
export default function WireframeDottedGlobe({ className = "" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Canvas imperativ erzeugen -> jeder Effekt-Durchlauf startet frisch
    // (robust gegen React StrictMode Doppel-Mount und HMR, kein doppeltes
    // transferControlToOffscreen auf derselben Canvas).
    const canvas = document.createElement("canvas");
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.display = "block";
    container.appendChild(canvas);

    const getDims = () => {
      const width = container.clientWidth || window.innerWidth;
      const height = container.clientHeight || window.innerHeight;
      const isMobile = width < 768;
      // Pixeldichte bewusst begrenzen: eine bildschirmfüllende, 60fps-animierte
      // Canvas ist der größte Compositor-Kostenfaktor. 1.5x ist für einen
      // dekorativen Hintergrund gestochen scharf und deutlich flüssiger als 2x.
      const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.25 : 1.5);
      return { width, height, dpr, isMobile };
    };

    const canOffscreen =
      typeof canvas.transferControlToOffscreen === "function" &&
      typeof Worker !== "undefined";

    let cleanup = null;
    if (canOffscreen) cleanup = runWorker(canvas, getDims);
    if (!cleanup) cleanup = runMainThread(canvas, getDims);

    return () => {
      if (cleanup) cleanup();
      if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative h-full w-full ${className}`}
      style={{ contain: "layout paint", transform: "translateZ(0)" }}
    />
  );
}

// ---- Worker-Pfad (OffscreenCanvas) -----------------------------------------
function runWorker(canvas, getDims) {
  let worker;
  try {
    worker = new Worker(new URL("../../lib/globe.worker.js", import.meta.url), {
      type: "module",
    });
  } catch {
    return null; // -> Fallback
  }

  let offscreen;
  try {
    offscreen = canvas.transferControlToOffscreen();
  } catch {
    worker.terminate();
    return null; // -> Fallback
  }

  worker.postMessage({ type: "init", canvas: offscreen, ...getDims() }, [offscreen]);

  // Länderdaten (früh angestoßen) an den Worker übergeben, sobald sie da sind.
  let disposed = false;
  getLandData().then((land) => {
    if (land && !disposed) worker.postMessage({ type: "land", land });
  });

  const postScroll = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const progress = max > 0 ? window.scrollY / max : 0;
    worker.postMessage({ type: "scroll", progress });
  };

  let pending = false;
  const onScroll = () => {
    if (pending) return;
    pending = true;
    requestAnimationFrame(() => {
      pending = false;
      postScroll();
    });
  };
  const onResize = () => {
    worker.postMessage({ type: "resize", ...getDims() });
    postScroll();
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onResize);
  postScroll();

  return () => {
    disposed = true;
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onResize);
    worker.terminate();
  };
}

// ---- Fallback: Rendering auf dem Main-Thread -------------------------------
function runMainThread(canvas, getDims) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return () => {};

  const renderer = createGlobeRenderer(ctx);

  const applySize = () => {
    const { width, height, dpr, isMobile } = getDims();
    canvas.width = Math.max(1, Math.round(width * dpr));
    canvas.height = Math.max(1, Math.round(height * dpr));
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    renderer.setSize(width, height, isMobile);
  };
  applySize();

  const postScroll = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    renderer.setTargetProgress(max > 0 ? window.scrollY / max : 0);
  };
  postScroll();

  // Länderdaten (früh angestoßen, geteilt mit dem Worker-Pfad) verwenden.
  let disposed = false;
  getLandData().then((data) => {
    if (data && !disposed) renderer.setLand(data);
  });

  let lastDraw = -Infinity;
  let rafId = requestAnimationFrame(function loop(t) {
    rafId = requestAnimationFrame(loop);
    // Konstante 60fps für flüssige Bewegung.
    if (t - lastDraw < 1000 / 60) return;
    lastDraw = t;
    renderer.frame(t);
  });

  let pending = false;
  const onScroll = () => {
    if (pending) return;
    pending = true;
    requestAnimationFrame(() => {
      pending = false;
      postScroll();
    });
  };
  const onResize = () => {
    applySize();
    postScroll();
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onResize);

  return () => {
    disposed = true;
    cancelAnimationFrame(rafId);
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onResize);
  };
}
