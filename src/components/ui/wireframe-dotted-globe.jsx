"use client";

import { useEffect, useRef } from "react";
import { createGlobeRenderer, LAND_URL } from "../../lib/globeRenderer";

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
      const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2);
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

  worker.postMessage({ type: "init", canvas: offscreen, ...getDims() }, [
    offscreen,
  ]);

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

  let cancelled = false;
  (async () => {
    try {
      const res = await fetch(LAND_URL);
      if (res.ok && !cancelled) renderer.setLand(await res.json());
    } catch {
      // ignorieren
    }
  })();

  let lastScroll = -Infinity;
  let lastDraw = -Infinity;
  let rafId = requestAnimationFrame(function loop(t) {
    rafId = requestAnimationFrame(loop);
    const scrolling = t - lastScroll < 180;
    const frameMs = scrolling ? 1000 / 30 : 1000 / 40;
    if (t - lastDraw < frameMs) return;
    lastDraw = t;
    renderer.frame(t);
  });

  let pending = false;
  const onScroll = () => {
    lastScroll = performance.now();
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
    cancelled = true;
    cancelAnimationFrame(rafId);
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onResize);
  };
}
