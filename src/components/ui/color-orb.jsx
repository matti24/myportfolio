import React from "react";

// Animierter Farb-Orb (adaptiert für JSX + Vite, ursprünglich shadcn/Next.js).
// Die CSS-Regeln liegen global in index.css (.color-orb), hier wird nur das
// Element mit den passenden CSS-Variablen erzeugt.

const FALLBACK_TONES = {
  base: "oklch(20% 0.03 264)",
  accent1: "oklch(70% 0.15 250)", // Blau
  accent2: "oklch(82% 0.12 220)", // Cyan
  accent3: "oklch(66% 0.16 280)", // Indigo
};

const ColorOrb = ({ dimension = "192px", className = "", tones, spinDuration = 20 }) => {
  const palette = { ...FALLBACK_TONES, ...(tones || {}) };
  const dimValue = parseInt(String(dimension).replace("px", ""), 10) || 0;

  const blurStrength =
    dimValue < 50 ? Math.max(dimValue * 0.008, 1) : Math.max(dimValue * 0.015, 4);
  const contrastStrength =
    dimValue < 50 ? Math.max(dimValue * 0.004, 1.2) : Math.max(dimValue * 0.008, 1.5);
  const pixelDot =
    dimValue < 50 ? Math.max(dimValue * 0.004, 0.05) : Math.max(dimValue * 0.008, 0.1);
  const shadowRange =
    dimValue < 50 ? Math.max(dimValue * 0.004, 0.5) : Math.max(dimValue * 0.008, 2);
  const maskRadius =
    dimValue < 30 ? "0%" : dimValue < 50 ? "5%" : dimValue < 100 ? "15%" : "25%";
  const adjustedContrast =
    dimValue < 30 ? 1.1 : dimValue < 50 ? Math.max(contrastStrength * 1.2, 1.3) : contrastStrength;

  const style = {
    width: dimension,
    height: dimension,
    "--base": palette.base,
    "--accent1": palette.accent1,
    "--accent2": palette.accent2,
    "--accent3": palette.accent3,
    "--spin-duration": `${spinDuration}s`,
    "--blur": `${blurStrength}px`,
    "--contrast": adjustedContrast,
    "--dot": `${pixelDot}px`,
    "--shadow": `${shadowRange}px`,
    "--mask": maskRadius,
  };

  return <div className={`color-orb ${className}`.trim()} style={style} />;
};

export default ColorOrb;
