"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";

// Zentrum der Schweiz (Länge/Breite in Grad)
const SWITZERLAND = { lng: 8.23, lat: 46.8 };
// Zürich als [lng, lat] – dort steckt der Standort-Pin
const ZURICH = [8.5417, 47.3769];
const LAND_URL =
  "https://raw.githubusercontent.com/martynafford/natural-earth-geojson/refs/heads/master/110m/physical/ne_110m_land.json";

/**
 * Hintergrund-Variante des rotierenden Draht-Globus.
 * Rotiert automatisch und fokussiert sich beim Scrollen sanft auf die Schweiz
 * und zoomt dabei heran. Rein dekorativ (pointer-events-none).
 */
export default function WireframeDottedGlobe({ className = "" }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;
    let baseRadius = Math.min(width, height) / 2.2;

    const projection = d3.geoOrthographic().clipAngle(90);
    const path = d3.geoPath().projection(projection).context(context);
    const graticule = d3.geoGraticule();

    // Layout-Werte werden gecacht, um pro Frame teure Reflows zu vermeiden
    let scrollMax = 1;
    const measureScroll = () => {
      scrollMax = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight,
      );
    };

    const setSize = () => {
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      baseRadius = Math.min(width, height) / 2.2;

      // DPR deckeln – auf HiDPI-Displays spart das massiv Füllrate
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      projection.translate([width / 2, height / 2]);
      measureScroll();
    };
    setSize();

    // ---- Geometrie-Helfer -------------------------------------------------
    const pointInPolygon = (point, polygon) => {
      const [x, y] = point;
      let inside = false;
      for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        const [xi, yi] = polygon[i];
        const [xj, yj] = polygon[j];
        if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) {
          inside = !inside;
        }
      }
      return inside;
    };

    const pointInFeature = (point, feature) => {
      const geometry = feature.geometry;
      if (geometry.type === "Polygon") {
        const coordinates = geometry.coordinates;
        if (!pointInPolygon(point, coordinates[0])) return false;
        for (let i = 1; i < coordinates.length; i++) {
          if (pointInPolygon(point, coordinates[i])) return false;
        }
        return true;
      }
      if (geometry.type === "MultiPolygon") {
        for (const polygon of geometry.coordinates) {
          if (pointInPolygon(point, polygon[0])) {
            let inHole = false;
            for (let i = 1; i < polygon.length; i++) {
              if (pointInPolygon(point, polygon[i])) {
                inHole = true;
                break;
              }
            }
            if (!inHole) return true;
          }
        }
        return false;
      }
      return false;
    };

    const generateDotsInPolygon = (feature, dotSpacing = 16) => {
      const dots = [];
      const bounds = d3.geoBounds(feature);
      const [[minLng, minLat], [maxLng, maxLat]] = bounds;
      const stepSize = dotSpacing * 0.08;
      for (let lng = minLng; lng <= maxLng; lng += stepSize) {
        for (let lat = minLat; lat <= maxLat; lat += stepSize) {
          const point = [lng, lat];
          if (pointInFeature(point, feature)) dots.push(point);
        }
      }
      return dots;
    };

    // ---- Scroll-Fortschritt (0 = oben, 1 = ganz unten) --------------------
    const easeInOut = (t) => t * t * (3 - 2 * t);
    const lerp = (a, b, t) => a + (b - a) * t;

    // Ziel-Fortschritt (roh, aus Scrollposition) und gedämpfter Ist-Wert.
    // scrollY ist billig auslesbar; scrollMax kommt aus dem Cache.
    let targetP = Math.min(1, Math.max(0, window.scrollY / scrollMax));
    let smoothP = targetP;

    // ---- Zeichnen ---------------------------------------------------------
    let landFeatures = null;
    const allDots = [];
    let autoLng = 0;
    let lastDraw = -Infinity;
    const FRAME_MS = 1000 / 30; // Hintergrund auf 30fps deckeln -> entlastet Compositing
    const DEG_PER_MS = 0.0072; // ~7.2°/s Grundrotation, frameratenunabhängig

    // Moderner, minimalistischer Standort-Pin im Wireframe-Look des Globus.
    const drawPin = (x, y, sf, elapsed) => {
      const r = Math.max(5, 5.5 * sf); // Kopfradius
      const cy = y - 2.7 * r; // Mittelpunkt des Pin-Kopfes
      const theta = Math.acos(r / (y - cy)); // Tangentenwinkel zur Spitze

      context.save();
      context.lineJoin = "round";

      // Sanfter Glow hinter dem Kopf
      const glow = context.createRadialGradient(x, cy, 0, x, cy, r * 2.6);
      glow.addColorStop(0, "rgba(226, 232, 240, 0.30)");
      glow.addColorStop(1, "rgba(226, 232, 240, 0)");
      context.beginPath();
      context.arc(x, cy, r * 2.6, 0, 2 * Math.PI);
      context.fillStyle = glow;
      context.fill();

      // Moderner Radar-Puls
      const t = (elapsed % 2400) / 2400;
      context.beginPath();
      context.arc(x, cy, r * (0.9 + t * 1.9), 0, 2 * Math.PI);
      context.strokeStyle = `rgba(226, 232, 240, ${0.45 * (1 - t)})`;
      context.lineWidth = 1 * sf;
      context.stroke();

      // Tropfenform: Kopf-Bogen + Tangenten zur Spitze (nur Kontur)
      context.beginPath();
      context.arc(x, cy, r, Math.PI / 2 - theta, Math.PI / 2 + theta, true);
      context.lineTo(x, y);
      context.closePath();
      context.fillStyle = "rgba(2, 6, 23, 0.55)";
      context.fill();
      context.strokeStyle = "rgba(255, 255, 255, 0.92)";
      context.lineWidth = 1.4 * sf;
      context.stroke();

      // Kleiner gefüllter Punkt im Kopf
      context.beginPath();
      context.arc(x, cy, r * 0.34, 0, 2 * Math.PI);
      context.fillStyle = "rgba(255, 255, 255, 0.95)";
      context.fill();

      context.restore();
    };

    const render = (elapsed) => {
      // FPS-Deckel: teure Frames auslassen, ohne die Rotationsgeschwindigkeit zu ändern
      if (elapsed - lastDraw < FRAME_MS) return;
      const dt = Math.min(elapsed - lastDraw, 64); // Ausreißer begrenzen
      lastDraw = elapsed;

      // Ziel aus aktueller Scrollposition (billig, kein Reflow)
      targetP = Math.min(1, Math.max(0, window.scrollY / scrollMax));
      // Zeitbasiertes Damping -> flüssig bei jedem Scrolltempo
      const damp = 1 - Math.pow(0.0016, dt / 1000);
      smoothP += (targetP - smoothP) * damp;
      const p = easeInOut(smoothP);

      // Automatische Rotation wird beim Scrollen zur Schweiz überblendet
      autoLng += DEG_PER_MS * dt;
      const rotLng = lerp(autoLng, -SWITZERLAND.lng, p);
      const rotLat = lerp(0, -SWITZERLAND.lat, p);
      projection.rotate([rotLng, rotLat]);

      // Beim Fokussieren heranzoomen
      const scale = lerp(baseRadius, baseRadius * 4.2, p);
      projection.scale(scale);

      const scaleFactor = scale / baseRadius;

      context.clearRect(0, 0, width, height);

      // Ozean / Globuskörper
      context.beginPath();
      context.arc(width / 2, height / 2, scale, 0, 2 * Math.PI);
      context.fillStyle = "rgba(2, 6, 23, 0.55)";
      context.fill();
      context.strokeStyle = "rgba(255, 255, 255, 0.28)";
      context.lineWidth = 1.6 * scaleFactor;
      context.stroke();

      if (landFeatures) {
        // Gradnetz
        context.beginPath();
        path(graticule());
        context.strokeStyle = "rgba(255, 255, 255, 0.5)";
        context.lineWidth = 0.8 * scaleFactor;
        context.globalAlpha = 0.18;
        context.stroke();
        context.globalAlpha = 1;

        // Landumrisse
        context.beginPath();
        landFeatures.features.forEach((feature) => path(feature));
        context.strokeStyle = "rgba(255, 255, 255, 0.35)";
        context.lineWidth = 0.9 * scaleFactor;
        context.stroke();

        // Halbton-Punkte: alle Punkte in EINEN Pfad sammeln und einmal füllen
        const r = 1.1 * scaleFactor;
        context.fillStyle = "rgba(148, 163, 184, 0.55)";
        context.beginPath();
        for (let i = 0; i < allDots.length; i++) {
          const dot = allDots[i];
          const projected = projection(dot);
          if (
            projected &&
            projected[0] >= 0 &&
            projected[0] <= width &&
            projected[1] >= 0 &&
            projected[1] <= height
          ) {
            context.moveTo(projected[0] + r, projected[1]);
            context.arc(projected[0], projected[1], r, 0, 2 * Math.PI);
          }
        }
        context.fill();
      }

      // Standort-Pin auf Zürich – nur zeichnen, wenn er auf der Vorderseite liegt
      const [rl, rp] = projection.rotate();
      const center = [-rl, -rp];
      if (d3.geoDistance(ZURICH, center) < Math.PI / 2) {
        const pt = projection(ZURICH);
        if (pt) drawPin(pt[0], pt[1], scaleFactor, elapsed);
      }
    };

    // ---- Daten laden ------------------------------------------------------
    let cancelled = false;
    const loadWorldData = async () => {
      try {
        const response = await fetch(LAND_URL);
        if (!response.ok) throw new Error("Failed to load land data");
        const data = await response.json();
        if (cancelled) return;
        landFeatures = data;
        landFeatures.features.forEach((feature) => {
          // Punkte direkt als [lng, lat] speichern -> projection(dot) ohne Alloc
          generateDotsInPolygon(feature, 20).forEach((pt) => allDots.push(pt));
        });
        measureScroll(); // Seitenhöhe kann sich durch Nachladen ändern
      } catch {
        // Fehler im Hintergrund still ignorieren – Globus bleibt ohne Land
      }
    };

    const rotationTimer = d3.timer(render);
    loadWorldData();

    const handleResize = () => setSize();
    window.addEventListener("resize", handleResize);

    return () => {
      cancelled = true;
      rotationTimer.stop();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative h-full w-full ${className}`}
      style={{ contain: "layout paint", transform: "translateZ(0)" }}
    >
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
