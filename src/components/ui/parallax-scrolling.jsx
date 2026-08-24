"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

const LAYER_IMAGES = {
  back: "https://cdn.prod.website-files.com/671752cd4027f01b1b8f1c7f/6717795be09b462b2e8ebf71_osmo-parallax-layer-3.webp",
  mid: "https://cdn.prod.website-files.com/671752cd4027f01b1b8f1c7f/6717795b4d5ac529e7d3a562_osmo-parallax-layer-2.webp",
  front: "https://cdn.prod.website-files.com/671752cd4027f01b1b8f1c7f/6717795bb5aceca85011ad83_osmo-parallax-layer-1.webp",
};

// Scroll-gekoppelte Parallax mit der bereits vorhandenen motion-Bibliothek
// (statt GSAP + Lenis) → kein globaler Smooth-Scroll, deutlich leichter.
export function ParallaxComponent() {
  const layersRef = useRef(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: layersRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "70%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "55%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "40%"]);
  const y4 = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "10%"]);

  return (
    <div className="parallax">
      <section className="parallax__header">
        <div className="parallax__visuals">
          <div className="parallax__black-line-overflow" />
          <div ref={layersRef} className="parallax__layers">
            <motion.img
              style={{ y: y1 }}
              src={LAYER_IMAGES.back}
              loading="eager"
              decoding="async"
              width="800"
              alt=""
              className="parallax__layer-img parallax__layer-img--1"
            />
            <motion.img
              style={{ y: y2 }}
              src={LAYER_IMAGES.mid}
              loading="eager"
              decoding="async"
              width="800"
              alt=""
              className="parallax__layer-img parallax__layer-img--2"
            />
            <motion.div style={{ y: y3 }} className="parallax__layer-title">
              <h2 className="parallax__title">Matti Koenis</h2>
            </motion.div>
            <motion.img
              style={{ y: y4 }}
              src={LAYER_IMAGES.front}
              loading="eager"
              decoding="async"
              width="800"
              alt=""
              className="parallax__layer-img parallax__layer-img--4"
            />
          </div>
          <div className="parallax__fade" />
        </div>
      </section>
    </div>
  );
}

export default ParallaxComponent;
