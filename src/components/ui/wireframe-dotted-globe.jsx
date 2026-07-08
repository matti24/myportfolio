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
    let isMobile = width < 768;
    let baseRadius = Math.min(width, height) / (isMobile ? 2.1 : 2.2);

    const projection = d3.geoOrthographic().clipAngle(90);
    const path = d3.geoPath().projection(projection).context(context);
    const graticule = d3.geoGraticule();
    const RAD = Math.PI / 180;

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
      isMobile = width < 768;
      baseRadius = Math.min(width, height) / (isMobile ? 2.1 : 2.2);

      // DPR deckeln – auf Handys (hohe Pixeldichte) stärker begrenzen für mehr Glätte
      const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.25 : 1.5);
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
      const cx = width / 2;
      const cy = height / 2;

      context.clearRect(0, 0, width, height);

      // Atmosphären-Halo (weicher blauer Schein außerhalb der Kugel)
      const halo = context.createRadialGradient(
        cx, cy, scale * 0.92,
        cx, cy, scale * 1.2,
      );
      halo.addColorStop(0, "rgba(96, 165, 250, 0)");
      halo.addColorStop(0.55, "rgba(96, 165, 250, 0.12)");
      halo.addColorStop(1, "rgba(96, 165, 250, 0)");
      context.beginPath();
      context.arc(cx, cy, scale * 1.2, 0, 2 * Math.PI);
      context.fillStyle = halo;
      context.fill();

      // Kugelkörper mit Lichtverlauf (3D-Shading, Lichtquelle oben links)
      const gx = cx - scale * 0.34;
      const gy = cy - scale * 0.34;
      const body = context.createRadialGradient(
        gx, gy, scale * 0.05,
        cx, cy, scale * 1.05,
      );
      body.addColorStop(0, "rgba(41, 55, 102, 0.66)");
      body.addColorStop(0.55, "rgba(14, 22, 50, 0.62)");
      body.addColorStop(1, "rgba(3, 6, 18, 0.6)");
      context.beginPath();
      context.arc(cx, cy, scale, 0, 2 * Math.PI);
      context.fillStyle = body;
      context.fill();

      // Feiner Rand (Rim-Light)
      context.strokeStyle = "rgba(147, 197, 253, 0.38)";
      context.lineWidth = 1.4 * scaleFactor;
      context.stroke();

      if (landFeatures) {
        // Gradnetz (sehr dezent)
        context.beginPath();
        path(graticule());
        context.strokeStyle = "rgba(148, 197, 253, 0.5)";
        context.lineWidth = 0.7 * scaleFactor;
        context.globalAlpha = 0.13;
        context.stroke();
        context.globalAlpha = 1;

        // Landumrisse (kühl, dezent)
        context.beginPath();
        landFeatures.features.forEach((feature) => path(feature));
        context.strokeStyle = "rgba(191, 219, 254, 0.26)";
        context.lineWidth = 0.9 * scaleFactor;
        context.stroke();

        // Halbton-Punkte mit Tiefen-Shading – nur Vorderseite, in 4 Bänder gebündelt
        const rot = projection.rotate();
        const lam0 = -rot[0] * RAD;
        const phi0 = -rot[1] * RAD;
        const sinPhi0 = Math.sin(phi0);
        const cosPhi0 = Math.cos(phi0);
        const sinLam0 = Math.sin(lam0);
        const cosLam0 = Math.cos(lam0);
        const rBase = 1.15 * scaleFactor;

        const bands = [new Path2D(), new Path2D(), new Path2D(), new Path2D()];
        for (let i = 0; i < allDots.length; i++) {
          const d = allDots[i];
          // cosc > 0  ->  Punkt liegt auf der sichtbaren Halbkugel (billig, keine Trig)
          const cosDelta = d.cosL * cosLam0 + d.sinL * sinLam0;
          const cosc = sinPhi0 * d.sinP + cosPhi0 * d.cosP * cosDelta;
          if (cosc <= 0.02) continue;

          const projected = projection(d.c);
          if (!projected) continue;
          const px = projected[0];
          const py = projected[1];
          if (px < -4 || px > width + 4 || py < -4 || py > height + 4) continue;

          const b = cosc > 0.72 ? 3 : cosc > 0.48 ? 2 : cosc > 0.24 ? 1 : 0;
          const rr = rBase * (0.6 + 0.42 * cosc);
          bands[b].moveTo(px + rr, py);
          bands[b].arc(px, py, rr, 0, 2 * Math.PI);
        }

        const bandColors = [
          "rgba(150, 178, 222, 0.22)",
          "rgba(167, 195, 236, 0.36)",
          "rgba(192, 216, 249, 0.54)",
          "rgba(216, 232, 255, 0.74)",
        ];
        for (let b = 0; b < 4; b++) {
          context.fillStyle = bandColors[b];
          context.fill(bands[b]);
        }
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
        // Auf dem Handy größerer Punktabstand -> weniger Punkte, flüssigeres Rendern
        const dotSpacing = isMobile ? 27 : 20;
        landFeatures.features.forEach((feature) => {
          // Punkte samt vorberechneter Trigonometrie speichern (Tiefen-Shading)
          generateDotsInPolygon(feature, dotSpacing).forEach((pt) => {
            const lam = pt[0] * RAD;
            const phi = pt[1] * RAD;
            allDots.push({
              c: pt,
              sinL: Math.sin(lam),
              cosL: Math.cos(lam),
              sinP: Math.sin(phi),
              cosP: Math.cos(phi),
            });
          });
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
