"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function WebGLShader() {
  const canvasRef = useRef(null);
  const sceneRef = useRef({
    scene: null,
    camera: null,
    renderer: null,
    mesh: null,
    uniforms: null,
    animationId: null,
  });

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const { current: refs } = sceneRef;

    const vertexShader = `
      attribute vec3 position;
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      precision highp float;
      uniform vec2 resolution;
      uniform float time;
      uniform float xScale;
      uniform float yScale;
      uniform float distortion;

      void main() {
        vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);

        float d = length(p) * distortion;

        float rx = p.x * (1.0 + d);
        float gx = p.x;
        float bx = p.x * (1.0 - d);

        float r = 0.05 / abs(p.y + sin((rx + time) * xScale) * yScale);
        float g = 0.05 / abs(p.y + sin((gx + time) * xScale) * yScale);
        float b = 0.05 / abs(p.y + sin((bx + time) * xScale) * yScale);

        gl_FragColor = vec4(r, g, b, 1.0);
      }
    `;

    const getSize = () => {
      const parent = canvas.parentElement;
      const width = parent ? parent.clientWidth : canvas.clientWidth;
      const height = parent ? parent.clientHeight : canvas.clientHeight;
      return { width: Math.max(1, width), height: Math.max(1, height) };
    };

    const handleResize = () => {
      if (!refs.renderer || !refs.uniforms) return;
      const { width, height } = getSize();
      refs.renderer.setSize(width, height, false);
      refs.uniforms.resolution.value = [width, height];
    };

    const initScene = () => {
      refs.scene = new THREE.Scene();
      refs.renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
      refs.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      refs.renderer.setClearColor(new THREE.Color(0x000000));

      refs.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, -1);

      const { width, height } = getSize();

      refs.uniforms = {
        resolution: { value: [width, height] },
        time: { value: 0.0 },
        xScale: { value: 1.0 },
        yScale: { value: 0.5 },
        distortion: { value: 0.05 },
      };

      const position = [
        -1.0, -1.0, 0.0,
        1.0, -1.0, 0.0,
        -1.0, 1.0, 0.0,
        1.0, -1.0, 0.0,
        -1.0, 1.0, 0.0,
        1.0, 1.0, 0.0,
      ];

      const positions = new THREE.BufferAttribute(new Float32Array(position), 3);
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", positions);

      const material = new THREE.RawShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: refs.uniforms,
        side: THREE.DoubleSide,
      });

      refs.mesh = new THREE.Mesh(geometry, material);
      refs.scene.add(refs.mesh);

      handleResize();
    };

    const animate = () => {
      if (refs.uniforms) refs.uniforms.time.value += 0.01;
      if (refs.renderer && refs.scene && refs.camera) {
        refs.renderer.render(refs.scene, refs.camera);
      }
      refs.animationId = requestAnimationFrame(animate);
    };

    let isVisible = true;
    let isPageVisible = !document.hidden;

    const startLoop = () => {
      if (refs.animationId == null && isVisible && isPageVisible) {
        refs.animationId = requestAnimationFrame(animate);
      }
    };

    const stopLoop = () => {
      if (refs.animationId != null) {
        cancelAnimationFrame(refs.animationId);
        refs.animationId = null;
      }
    };

    initScene();
    startLoop();

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0]?.isIntersecting ?? true;
        if (isVisible) startLoop();
        else stopLoop();
      },
      { threshold: 0 }
    );
    intersectionObserver.observe(canvas);

    const handleVisibilityChange = () => {
      isPageVisible = !document.hidden;
      if (isPageVisible) startLoop();
      else stopLoop();
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const resizeObserver = new ResizeObserver(handleResize);
    if (canvas.parentElement) resizeObserver.observe(canvas.parentElement);
    window.addEventListener("resize", handleResize);

    return () => {
      stopLoop();
      intersectionObserver.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      resizeObserver.disconnect();
      window.removeEventListener("resize", handleResize);
      if (refs.mesh) {
        refs.scene?.remove(refs.mesh);
        refs.mesh.geometry.dispose();
        if (refs.mesh.material instanceof THREE.Material) {
          refs.mesh.material.dispose();
        }
      }
      refs.renderer?.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 block h-full w-full"
    />
  );
}
