import * as d3 from "d3";

// Zentrum der Schweiz (Länge/Breite in Grad)
const SWITZERLAND = { lng: 8.23, lat: 46.8 };
// Zürich als [lng, lat] – dort steckt der Standort-Pin
const ZURICH = [8.5417, 47.3769];
const RAD = Math.PI / 180;

export const LAND_URL =
  "https://raw.githubusercontent.com/martynafford/natural-earth-geojson/refs/heads/master/110m/physical/ne_110m_land.json";

// ---- Geometrie-Helfer -------------------------------------------------------
function pointInPolygon(point, polygon) {
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
}

function pointInFeature(point, feature) {
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
}

function generateDotsInPolygon(feature, dotSpacing) {
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
}

const easeInOut = (t) => t * t * (3 - 2 * t);
const lerp = (a, b, t) => a + (b - a) * t;

/**
 * Framework-unabhängiger Globus-Renderer. Zeichnet auf einen beliebigen
 * 2D-Kontext (Canvas ODER OffscreenCanvas). Kennt weder DOM noch window.
 */
export function createGlobeRenderer(ctx) {
  const projection = d3.geoOrthographic().clipAngle(90);
  const path = d3.geoPath().projection(projection).context(ctx);
  const graticule = d3.geoGraticule();

  let width = 1;
  let height = 1;
  let baseRadius = 1;
  let isMobile = false;

  let landFeatures = null;
  let dots = [];

  let targetP = 0;
  let smoothP = 0;
  let autoLng = 0;
  let lastElapsed = 0;

  function setSize(w, h, mobile) {
    width = w;
    height = h;
    isMobile = mobile;
    baseRadius = Math.min(w, h) / (mobile ? 2.1 : 2.2);
    projection.translate([w / 2, h / 2]);
  }

  function setLand(data) {
    landFeatures = data;
    // Off-Thread -> dichtere Punktwolke möglich (schärferes, "4K"-artiges Bild)
    const spacing = isMobile ? 24 : 15;
    const arr = [];
    for (const feature of data.features) {
      const pts = generateDotsInPolygon(feature, spacing);
      for (const pt of pts) {
        const lam = pt[0] * RAD;
        const phi = pt[1] * RAD;
        arr.push({
          c: pt,
          sinL: Math.sin(lam),
          cosL: Math.cos(lam),
          sinP: Math.sin(phi),
          cosP: Math.cos(phi),
        });
      }
    }
    dots = arr;
  }

  function setTargetProgress(p) {
    targetP = p < 0 ? 0 : p > 1 ? 1 : p;
  }

  // Moderner, minimalistischer Standort-Pin im Wireframe-Look
  function drawPin(x, y, sf, elapsed) {
    const r = Math.max(5, 5.5 * sf);
    const cy = y - 2.7 * r;
    const theta = Math.acos(r / (y - cy));

    ctx.save();
    ctx.lineJoin = "round";

    const glow = ctx.createRadialGradient(x, cy, 0, x, cy, r * 2.6);
    glow.addColorStop(0, "rgba(226, 232, 240, 0.30)");
    glow.addColorStop(1, "rgba(226, 232, 240, 0)");
    ctx.beginPath();
    ctx.arc(x, cy, r * 2.6, 0, 2 * Math.PI);
    ctx.fillStyle = glow;
    ctx.fill();

    const t = (elapsed % 2400) / 2400;
    ctx.beginPath();
    ctx.arc(x, cy, r * (0.9 + t * 1.9), 0, 2 * Math.PI);
    ctx.strokeStyle = `rgba(226, 232, 240, ${0.45 * (1 - t)})`;
    ctx.lineWidth = 1 * sf;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(x, cy, r, Math.PI / 2 - theta, Math.PI / 2 + theta, true);
    ctx.lineTo(x, y);
    ctx.closePath();
    ctx.fillStyle = "rgba(2, 6, 23, 0.55)";
    ctx.fill();
    ctx.strokeStyle = "rgba(255, 255, 255, 0.92)";
    ctx.lineWidth = 1.4 * sf;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(x, cy, r * 0.34, 0, 2 * Math.PI);
    ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
    ctx.fill();

    ctx.restore();
  }

  function draw(scale, elapsed) {
    const cx = width / 2;
    const cy = height / 2;
    const scaleFactor = scale / baseRadius;

    ctx.clearRect(0, 0, width, height);

    // Atmosphären-Halo
    const halo = ctx.createRadialGradient(cx, cy, scale * 0.9, cx, cy, scale * 1.22);
    halo.addColorStop(0, "rgba(96, 165, 250, 0)");
    halo.addColorStop(0.5, "rgba(99, 160, 255, 0.14)");
    halo.addColorStop(1, "rgba(96, 165, 250, 0)");
    ctx.beginPath();
    ctx.arc(cx, cy, scale * 1.22, 0, 2 * Math.PI);
    ctx.fillStyle = halo;
    ctx.fill();

    // Kugelkörper mit Lichtverlauf (3D-Shading, Lichtquelle oben links)
    const gx = cx - scale * 0.34;
    const gy = cy - scale * 0.34;
    const body = ctx.createRadialGradient(gx, gy, scale * 0.04, cx, cy, scale * 1.06);
    body.addColorStop(0, "rgba(45, 60, 110, 0.68)");
    body.addColorStop(0.5, "rgba(16, 25, 54, 0.63)");
    body.addColorStop(1, "rgba(3, 6, 18, 0.6)");
    ctx.beginPath();
    ctx.arc(cx, cy, scale, 0, 2 * Math.PI);
    ctx.fillStyle = body;
    ctx.fill();

    // Weicher Glanzpunkt (Specular) für Premium-Tiefe
    const spec = ctx.createRadialGradient(gx, gy, 0, gx, gy, scale * 0.62);
    spec.addColorStop(0, "rgba(191, 219, 254, 0.16)");
    spec.addColorStop(1, "rgba(191, 219, 254, 0)");
    ctx.beginPath();
    ctx.arc(cx, cy, scale, 0, 2 * Math.PI);
    ctx.fillStyle = spec;
    ctx.fill();

    // Feiner Rand (Rim-Light)
    ctx.beginPath();
    ctx.arc(cx, cy, scale, 0, 2 * Math.PI);
    ctx.strokeStyle = "rgba(147, 197, 253, 0.4)";
    ctx.lineWidth = 1.3 * scaleFactor;
    ctx.stroke();

    if (landFeatures) {
      // Gradnetz (sehr dezent)
      ctx.beginPath();
      path(graticule());
      ctx.strokeStyle = "rgba(148, 197, 253, 0.5)";
      ctx.lineWidth = 0.65 * scaleFactor;
      ctx.globalAlpha = 0.12;
      ctx.stroke();
      ctx.globalAlpha = 1;

      // Landumrisse
      ctx.beginPath();
      for (const feature of landFeatures.features) path(feature);
      ctx.strokeStyle = "rgba(191, 219, 254, 0.24)";
      ctx.lineWidth = 0.85 * scaleFactor;
      ctx.stroke();

      // Halbton-Punkte mit Tiefen-Shading – nur Vorderseite, in 4 Bänder gebündelt
      const rot = projection.rotate();
      const lam0 = -rot[0] * RAD;
      const phi0 = -rot[1] * RAD;
      const sinPhi0 = Math.sin(phi0);
      const cosPhi0 = Math.cos(phi0);
      const sinLam0 = Math.sin(lam0);
      const cosLam0 = Math.cos(lam0);
      const rBase = 1.12 * scaleFactor;

      const bands = [new Path2D(), new Path2D(), new Path2D(), new Path2D()];
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
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
        ctx.fillStyle = bandColors[b];
        ctx.fill(bands[b]);
      }
    }

    // Standort-Pin auf Zürich – nur auf der Vorderseite
    const rot = projection.rotate();
    const center = [-rot[0], -rot[1]];
    if (d3.geoDistance(ZURICH, center) < Math.PI / 2) {
      const pt = projection(ZURICH);
      if (pt) drawPin(pt[0], pt[1], scaleFactor, elapsed);
    }
  }

  function frame(elapsed) {
    const dt = Math.min(elapsed - lastElapsed, 64);
    lastElapsed = elapsed;

    // Zeitbasiertes Damping -> flüssig bei jedem Scrolltempo & jeder Framerate
    const damp = 1 - Math.pow(0.0016, dt / 1000);
    smoothP += (targetP - smoothP) * damp;
    const p = easeInOut(smoothP);

    // Automatische Rotation wird beim Scrollen zur Schweiz überblendet
    autoLng += 0.0072 * dt;
    projection.rotate([lerp(autoLng, -SWITZERLAND.lng, p), lerp(0, -SWITZERLAND.lat, p)]);

    const scale = lerp(baseRadius, baseRadius * 4.2, p);
    projection.scale(scale);

    draw(scale, elapsed);
  }

  return { setSize, setLand, setTargetProgress, frame };
}
