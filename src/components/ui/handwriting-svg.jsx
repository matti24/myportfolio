"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

const DEFAULT_FONT_URL =
  "https://raw.githubusercontent.com/google/fonts/main/ofl/indieflower/IndieFlower-Regular.ttf";

export function HandwritingSvg({
  path: pathProp,
  text,
  fontUrl = DEFAULT_FONT_URL,
  viewBox: viewBoxProp,
  className,
  strokeClassName,
  duration = 2,
  delay = 0.5,
  strokeWidth = 2,
  width = 100,
  height = 100,
  fontSize = 48,
  ease = "easeInOut",
}) {
  const [path, setPath] = useState(pathProp ?? null);
  const [computedViewBox, setComputedViewBox] = useState(`0 0 ${width} ${height}`);
  const [loading, setLoading] = useState(!!text && !pathProp);

  useEffect(() => {
    if (!text || pathProp) {
      setPath(pathProp ?? null);
      setComputedViewBox(`0 0 ${width} ${height}`);
      setLoading(false);
      return;
    }
    let cancelled = false;
    setLoading(true);
    // opentype.js nur im Text-Modus laden → eigener Chunk, nicht im Haupt-Bundle
    import("opentype.js")
      .then((mod) => {
        const opentype = mod.default ?? mod;
        return fetch(fontUrl)
          .then((res) => res.arrayBuffer())
          .then((buffer) => {
            if (cancelled) return;
            const font = opentype.parse(buffer);
            const p = font.getPath(text, 0, fontSize, fontSize);
            const bbox = p.getBoundingBox();
            const pad = 5;
            const vx = Math.floor(bbox.x1) - pad;
            const vy = Math.floor(bbox.y1) - pad;
            const vw = Math.ceil(bbox.x2 - bbox.x1) + pad * 2;
            const vh = Math.ceil(bbox.y2 - bbox.y1) + pad * 2;
            setComputedViewBox(`${vx} ${vy} ${vw} ${vh}`);
            setPath(p.toPathData(2));
          });
      })
      .catch(() => {
        if (!cancelled) setPath(null);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [text, fontUrl, pathProp, fontSize, width, height]);

  if (loading) {
    return (
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className={cn("text-muted-foreground", className)}
        aria-hidden={true}
      >
        <title>Handwriting SVG loading</title>
      </svg>
    );
  }

  const d = path ?? "";
  if (!d) {
    return (
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className={cn("text-muted-foreground", className)}
        aria-hidden={true}
      >
        <title>Handwriting SVG</title>
      </svg>
    );
  }

  const svgViewBox = viewBoxProp ?? (pathProp ? `0 0 ${width} ${height}` : computedViewBox);

  return (
    <svg
      width={width}
      height={height}
      viewBox={svgViewBox}
      className={cn("text-rose-500", className)}
      aria-hidden={true}
    >
      <title>Handwriting SVG</title>
      <motion.path
        d={d}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={strokeClassName}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay, duration, ease }}
      />
    </svg>
  );
}

export default HandwritingSvg;
