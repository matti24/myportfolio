import { useEffect, useRef } from "react";

const ZURICH = { lat: 47.37, lon: 8.54 };
const ORBITS = [
  { r: 1.16, inc: 0.95, node: 0.4, speed: 0.34, phase: 0.0, accent: true },
  { r: 1.27, inc: -0.45, node: 1.7, speed: 0.21, phase: 2.1 },
  { r: 1.38, inc: 1.4, node: -0.9, speed: 0.15, phase: 4.2 },
];

function fibonacciSphere(n) {
  const pts = new Float32Array(n * 3);
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2;
    const radius = Math.sqrt(1 - y * y);
    const theta = golden * i;
    pts[i * 3] = Math.cos(theta) * radius;
    pts[i * 3 + 1] = y;
    pts[i * 3 + 2] = Math.sin(theta) * radius;
  }
  return pts;
}

function latLonToXYZ(lat, lon) {
  const la = (lat * Math.PI) / 180;
  const lo = (lon * Math.PI) / 180;
  return [Math.cos(la) * Math.sin(lo), Math.sin(la), Math.cos(la) * Math.cos(lo)];
}

function orbitPoint(o, a) {
  // Kreis in der xz-Ebene, geneigt um x (Inklination) und gedreht um y (Knoten)
  const x = Math.cos(a) * o.r;
  const z = Math.sin(a) * o.r;
  const y1 = -z * Math.sin(o.inc);
  const z1 = z * Math.cos(o.inc);
  return [x * Math.cos(o.node) + z1 * Math.sin(o.node), y1, -x * Math.sin(o.node) + z1 * Math.cos(o.node)];
}

export function HeroGlobe({ label, hint }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const points = fibonacciSphere(window.innerWidth < 640 ? 560 : 1000);
    const zurich = latLonToXYZ(ZURICH.lat, ZURICH.lon);

    let width = 0;
    let height = 0;
    let dpr = 1;
    let rotY = -0.9;
    let tilt = 0.42;
    let velocity = 0;
    let time = 0;
    let last = 0;
    let frame = 0;
    let inView = true;
    let dragging = false;
    let lastX = 0;
    let lastY = 0;
    let started = false;

    const project = (x, y, z) => {
      const cy = Math.cos(rotY);
      const sy = Math.sin(rotY);
      const x1 = x * cy + z * sy;
      const z1 = -x * sy + z * cy;
      const ct = Math.cos(tilt);
      const st = Math.sin(tilt);
      const y2 = y * ct - z1 * st;
      const z2 = y * st + z1 * ct;
      return [x1, y2, z2];
    };

    const draw = () => {
      const R = Math.min(width, height) * 0.31;
      const cx = width / 2;
      const cy = height / 2;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      const glow = ctx.createRadialGradient(cx, cy, R * 0.2, cx, cy, R * 1.5);
      glow.addColorStop(0, "rgba(229,228,226,0.06)");
      glow.addColorStop(1, "rgba(229,228,226,0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = "rgba(255,255,255,0.10)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.stroke();

      // Hintere Bahnhälften zuerst, damit der Globus sie überdeckt
      const drawOrbits = (front) => {
        for (const o of ORBITS) {
          ctx.beginPath();
          let pen = false;
          for (let s = 0; s <= 160; s++) {
            const [x, y, z] = project(...orbitPoint(o, (s / 160) * Math.PI * 2));
            const visible = front ? z >= 0 : z < 0;
            if (visible) {
              const px = cx + x * R;
              const py = cy - y * R;
              if (pen) ctx.lineTo(px, py);
              else ctx.moveTo(px, py);
              pen = true;
            } else {
              pen = false;
            }
          }
          ctx.strokeStyle = front ? "rgba(229,228,226,0.22)" : "rgba(229,228,226,0.07)";
          ctx.stroke();
        }
      };
      drawOrbits(false);

      const count = points.length / 3;
      for (let i = 0; i < count; i++) {
        const [x, y, z] = project(points[i * 3], points[i * 3 + 1], points[i * 3 + 2]);
        const size = z > 0 ? 1.1 + z * 0.9 : 0.9;
        const alpha = z > 0 ? 0.16 + z * 0.62 : 0.05;
        ctx.fillStyle = `rgba(237,237,235,${alpha.toFixed(3)})`;
        ctx.fillRect(cx + x * R - size / 2, cy - y * R - size / 2, size, size);
      }

      drawOrbits(true);

      for (const o of ORBITS) {
        const a = o.phase + time * o.speed;
        const [x, y, z] = project(...orbitPoint(o, a));
        const front = z >= 0;
        const size = front ? 4 : 3;
        ctx.fillStyle = o.accent ? (front ? "#ff5a3c" : "rgba(255,90,60,0.35)") : front ? "#e5e4e2" : "rgba(229,228,226,0.3)";
        ctx.fillRect(cx + x * R - size / 2, cy - y * R - size / 2, size, size);
      }

      const [zx, zy, zz] = project(...zurich);
      if (zz > 0) {
        const px = cx + zx * R;
        const py = cy - zy * R;
        ctx.strokeStyle = `rgba(255,90,60,${(0.4 + zz * 0.6).toFixed(2)})`;
        ctx.beginPath();
        ctx.arc(px, py, 7, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fillStyle = "#ff5a3c";
        ctx.fillRect(px - 2.5, py - 2.5, 5, 5);
        ctx.font = "500 11px 'Geist Mono', ui-monospace, monospace";
        ctx.fillStyle = `rgba(237,237,235,${(0.4 + zz * 0.6).toFixed(2)})`;
        ctx.fillText("ZRH", px + 12, py + 4);
      }
    };

    const tick = (now) => {
      frame = 0;
      const dt = last ? Math.min((now - last) / 1000, 0.05) : 0;
      last = now;
      if (!dragging) {
        rotY += velocity + (reduceMotion ? 0 : dt * 0.09);
        velocity *= 0.94;
      }
      if (!reduceMotion) time += dt;
      draw();
      if (inView && !document.hidden && (!reduceMotion || dragging || Math.abs(velocity) > 0.0005)) {
        frame = requestAnimationFrame(tick);
      } else {
        last = 0;
      }
    };

    const schedule = () => {
      if (!frame && started) frame = requestAnimationFrame(tick);
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      if (started) draw();
    };

    const onPointerDown = (e) => {
      dragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
      velocity = 0;
      canvas.setPointerCapture?.(e.pointerId);
      schedule();
    };
    const onPointerMove = (e) => {
      if (!dragging) return;
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;
      rotY += dx * 0.006;
      tilt = Math.max(-0.2, Math.min(1.1, tilt + dy * 0.004));
      velocity = dx * 0.0012;
      if (reduceMotion) draw();
    };
    const onPointerUp = () => {
      dragging = false;
      schedule();
    };
    const onVisibility = () => {
      if (!document.hidden) schedule();
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    const io = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      if (inView) schedule();
    });
    io.observe(canvas);

    canvas.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);
    document.addEventListener("visibilitychange", onVisibility);

    // Erst nach dem ersten Rendern starten, damit der Globus den Seitenaufbau nicht bremst
    const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, 200));
    const cancelIdle = window.cancelIdleCallback || clearTimeout;
    const idleId = idle(
      () => {
        started = true;
        resize();
        canvas.dataset.ready = "true";
        frame = requestAnimationFrame(tick);
      },
      { timeout: 1200 }
    );

    return () => {
      cancelIdle(idleId);
      cancelAnimationFrame(frame);
      ro.disconnect();
      io.disconnect();
      canvas.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <figure className="relative mx-auto aspect-square w-full max-w-[36rem]">
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="h-full w-full cursor-grab touch-pan-y opacity-0 transition-opacity duration-1000 data-[ready=true]:opacity-100 active:cursor-grabbing"
      />
      <figcaption className="label absolute inset-x-0 bottom-0 flex flex-wrap items-center justify-between gap-2">
        <span>{label}</span>
        <span className="hidden sm:inline">{hint}</span>
      </figcaption>
    </figure>
  );
}
