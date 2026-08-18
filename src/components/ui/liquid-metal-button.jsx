import { liquidMetalFragmentShader, ShaderMount } from "@paper-design/shaders";
import { useEffect, useRef, useState } from "react";

export function LiquidMetalButton({
  label = "Get Started",
  icon = null,
  href,
  target,
  rel,
  onClick,
  ariaLabel,
  className,
  speed = 0.6,
  offsetX = 0.1,
  offsetY = -0.1,
  angle = 45,
  frame = 0,
  repetition = 4,
  scale = 8,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [ripples, setRipples] = useState([]);
  const shaderRef = useRef(null);
  const shaderMount = useRef(null);
  const elRef = useRef(null);
  const rippleId = useRef(0);

  useEffect(() => {
    const styleId = "liquid-metal-button-style";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = `
        .liquid-metal-shader canvas {
          width: 100% !important;
          height: 100% !important;
          display: block !important;
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          border-radius: 9999px !important;
        }
        @keyframes liquid-metal-ripple {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0.6;
          }
          100% {
            transform: translate(-50%, -50%) scale(4);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }

    if (shaderRef.current) {
      const webglAvailable = (() => {
        try {
          const c = document.createElement("canvas");
          return !!(c.getContext("webgl") || c.getContext("experimental-webgl"));
        } catch {
          return false;
        }
      })();

      // Ohne WebGL bleibt der schlichte Farbverlauf-Button – kein Shader, kein Fehler.
      if (webglAvailable) {
        try {
          if (shaderMount.current?.destroy) {
            shaderMount.current.destroy();
          }

          shaderMount.current = new ShaderMount(
            shaderRef.current,
            liquidMetalFragmentShader,
            {
              u_repetition: repetition,
              u_softness: 0.5,
              u_shiftRed: 0.3,
              u_shiftBlue: 0.3,
              u_distortion: 0,
              u_contour: 0,
              u_angle: angle,
              u_scale: scale,
              u_shape: 1,
              u_offsetX: offsetX,
              u_offsetY: offsetY,
            },
            undefined,
            speed,
            frame
          );
        } catch (error) {
          console.warn("Liquid-Metal-Shader übersprungen:", error?.message || error);
        }
      }
    }

    return () => {
      if (shaderMount.current?.destroy) {
        shaderMount.current.destroy();
        shaderMount.current = null;
      }
    };
  }, []);

  // Shader pausieren, wenn der Button nicht sichtbar ist oder der Tab im Hintergrund läuft (spart GPU/CPU, keine sichtbare Änderung).
  useEffect(() => {
    const el = shaderRef.current;
    if (!el) return;

    let isVisible = true;
    let isPageVisible = !document.hidden;

    const apply = () => {
      const active = isVisible && isPageVisible;
      shaderMount.current?.setSpeed?.(active ? speed : 0);
    };

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0]?.isIntersecting ?? true;
        apply();
      },
      { threshold: 0 }
    );
    intersectionObserver.observe(el);

    const handleVisibilityChange = () => {
      isPageVisible = !document.hidden;
      apply();
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      intersectionObserver.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [speed]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    shaderMount.current?.setSpeed?.(1);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsPressed(false);
    shaderMount.current?.setSpeed?.(speed);
  };

  const handleClick = (e) => {
    if (shaderMount.current?.setSpeed) {
      shaderMount.current.setSpeed(2.4);
      setTimeout(() => {
        shaderMount.current?.setSpeed?.(isHovered ? 1 : speed);
      }, 300);
    }

    if (elRef.current) {
      const rect = elRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const ripple = { x, y, id: rippleId.current++ };
      setRipples((prev) => [...prev, ripple]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
      }, 600);
    }

    onClick?.();
  };

  const boxShadow = isPressed
    ? "0px 0px 0px 1px rgba(0, 0, 0, 0.5), 0px 1px 2px 0px rgba(0, 0, 0, 0.3)"
    : isHovered
      ? "0px 0px 0px 1px rgba(0, 0, 0, 0.4), 0px 12px 6px 0px rgba(0, 0, 0, 0.05), 0px 8px 5px 0px rgba(0, 0, 0, 0.1), 0px 4px 4px 0px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.2)"
      : "0px 0px 0px 1px rgba(0, 0, 0, 0.3), 0px 36px 14px 0px rgba(0, 0, 0, 0.02), 0px 20px 12px 0px rgba(0, 0, 0, 0.08), 0px 9px 9px 0px rgba(0, 0, 0, 0.12), 0px 2px 5px 0px rgba(0, 0, 0, 0.15)";

  return (
    <a
      ref={elRef}
      href={href}
      target={target}
      rel={rel}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      aria-label={ariaLabel || label}
      className={className}
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        padding: "16px 32px",
        borderRadius: "9999px",
        overflow: "hidden",
        cursor: "pointer",
        outline: "none",
        textDecoration: "none",
        boxShadow,
        transform: isPressed ? "translateY(1px) scale(0.99)" : "translateY(0) scale(1)",
        transition:
          "transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <div
        ref={shaderRef}
        className="liquid-metal-shader"
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "9999px",
          overflow: "hidden",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: "2px",
          borderRadius: "9999px",
          background: "linear-gradient(160deg, #232a52 0%, #141a38 55%, #0d1226 100%)",
          boxShadow: isPressed
            ? "inset 0px 2px 4px rgba(0, 0, 0, 0.4), inset 0px 1px 2px rgba(0, 0, 0, 0.3)"
            : "none",
          zIndex: 5,
        }}
      />
      <span
        style={{
          position: "relative",
          zIndex: 10,
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "16px",
          fontWeight: 600,
          color: "#e2e8f0",
          textShadow: "0px 1px 2px rgba(0, 0, 0, 0.6)",
          whiteSpace: "nowrap",
          pointerEvents: "none",
        }}
      >
        {icon}
        {label}
      </span>
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          style={{
            position: "absolute",
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 70%)",
            pointerEvents: "none",
            zIndex: 20,
            animation: "liquid-metal-ripple 0.6s ease-out",
          }}
        />
      ))}
    </a>
  );
}
