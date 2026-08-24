"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { HandwritingSvg } from "./handwriting-svg";

// Einmalig aus der IndieFlower-Schrift vorgeneriert (opentype.js), damit das Intro
// zur Laufzeit ohne Font-Download sofort und zuverlaessig erscheint.
const HELLO_VIEWBOX = "-1 24 192 82";
const HELLO_PATH =
  "M50.4 100Q47.9 100.5 46.9 97.55Q45.9 94.6 45.8 88.8L45.8 88.8Q45.6 80.3 45.25 74.55Q44.9 68.8 44 64.2L44 64.2Q34.7 68.6 25.65 72.25Q16.6 75.9 16.6 75.8L16.6 75.8L16.8 97.1Q16.8 98.6 15 99L15 99Q12.6 99.5 11.85 96.25Q11.1 93 10.8 86L10.8 86Q10.6 79.7 10.2 77.1L10.2 77.1Q7.4 78.5 5.4 78.4L5.4 78.4Q5 77.6 5 75.1L5 75.1Q5.8 74.8 6.95 74.4Q8.1 74 8.65 73.45Q9.2 72.9 9.2 71.8L9.2 71.8Q9.2 66.8 8.2 56.4L8.2 56.4Q7.1 47 7.1 40.9L7.1 40.9L7.2 36.3Q7.5 35.6 7.95 35.4Q8.4 35.2 9.2 35.2L9.2 35.2Q10.9 35.2 10.9 36.3L10.9 36.3L15 71.5Q17.8 70.8 24.3 67.9Q30.8 65 44.3 58.5L44.3 58.5L44.7 36.3Q44.7 32.4 47.6 32.4L47.6 32.4Q48.8 32.4 49.25 33.3Q49.7 34.2 49.5 36.3L49.5 36.3L49.4 53.6Q49.4 62.4 50.4 76.5L50.4 76.5Q50.7 79.3 50.95 81.85Q51.2 84.4 51.4 86.7L51.4 86.7Q52 92.9 52.25 94.55Q52.5 96.2 53.1 97.5L53.1 97.5Q52.6 99.5 50.4 100L50.4 100M85.7 100Q79.3 100 73.9 97.5Q68.5 95 65.3 90.4Q62.1 85.8 62.1 79.8L62.1 79.8Q62.1 73.1 64.6 67.25Q67.1 61.4 71.95 57.85Q76.8 54.3 83.3 54.3L83.3 54.3Q90.1 54.3 93.6 58.65Q97.1 63 96.9 69.6L96.9 69.6Q96.9 75.5 92.25 78.6Q87.6 81.7 80.4 81.7L80.4 81.7Q79.3 81.7 77.1 81.5L77.1 81.5Q73.5 81.1 72 80.4Q70.5 79.7 70.5 77.6L70.5 77.6Q70.5 76.9 70.9 76.55Q71.3 76.2 72.5 76.2L72.5 76.2Q73.8 76.2 77.1 76.8L77.1 76.8Q80.3 77.4 82.8 77.4L82.8 77.4Q92 77.4 92 69.4L92 69.4Q92 64.6 90.25 61.8Q88.5 59 84.1 59L84.1 59Q79.3 59 75.5 61.55Q71.7 64.1 69.65 68.2Q67.6 72.3 67.6 76.9L67.6 76.9Q67.6 84.8 72 89.85Q76.4 94.9 85.6 94.9L85.6 94.9Q86.7 94.9 89.3 94.7L89.3 94.7Q90.4 94.6 92 94.1Q93.6 93.6 94.3 93.4L94.3 93.4Q98.6 91.9 100.6 91.9L100.6 91.9Q102.1 91.9 102.9 92.7L102.9 92.7Q100.4 96.5 95.45 98.25Q90.5 100 85.7 100L85.7 100M112.4 99.3Q110.2 88.4 109.05 73.45Q107.9 58.5 107.9 44.5L107.9 44.5Q107.9 37.5 108.2 32.1L108.2 32.1Q108.2 30.8 110.2 30.8L110.2 30.8Q111.8 30.8 112.25 31.6Q112.7 32.4 112.7 34.1L112.7 34.1Q112.7 50.3 113.3 61.75Q113.9 73.2 114.9 86.4L114.9 86.4Q115.5 94.9 115.7 97.9L115.7 97.9Q115.8 99.5 114 99.5L114 99.5Q113.4 99.5 112.4 99.3L112.4 99.3M129.2 99.3Q127 88.4 125.85 73.45Q124.7 58.5 124.7 44.5L124.7 44.5Q124.7 37.5 125 32.1L125 32.1Q125 30.8 127 30.8L127 30.8Q128.6 30.8 129.05 31.6Q129.5 32.4 129.5 34.1L129.5 34.1Q129.5 50.3 130.1 61.75Q130.7 73.2 131.7 86.4L131.7 86.4Q132.3 94.9 132.5 97.9L132.5 97.9Q132.6 99.5 130.8 99.5L130.8 99.5Q130.2 99.5 129.2 99.3L129.2 99.3M161.2 100.1Q155.3 100.1 150.55 97.45Q145.8 94.8 143.15 90.05Q140.5 85.3 140.5 79.2L140.5 79.2Q140.5 69.2 147.85 64.3Q155.2 59.4 165.9 59.4L165.9 59.4Q170.8 59.4 175.05 61.8Q179.3 64.2 181.9 68.7Q184.5 73.2 184.5 79.1L184.5 79.1Q184.5 85.5 181.2 90.25Q177.9 95 172.55 97.55Q167.2 100.1 161.2 100.1L161.2 100.1M160.1 94.4Q169.4 94.4 174.2 90.2Q179 86 179 77.9L179 77.9Q179 72.4 175.25 68.4Q171.5 64.4 164.8 64.4L164.8 64.4Q160.3 64.4 155.7 66.1Q151.1 67.8 148.1 71.2Q145.1 74.6 145.1 79.4L145.1 79.4Q145.1 83.4 147.1 86.85Q149.1 90.3 152.55 92.35Q156 94.4 160.1 94.4L160.1 94.4";

const HOLD_MS = 2000;
const EXIT_S = 1.1;

export function IntroOverlay() {
  const [reduce] = useState(
    () => window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false
  );
  const [visible, setVisible] = useState(true);
  const [done, setDone] = useState(false);

  // Intro nach der Haltezeit ausblenden
  useEffect(() => {
    window.scrollTo(0, 0);
    const hold = reduce ? 900 : HOLD_MS;
    const timer = setTimeout(() => setVisible(false), hold);
    return () => clearTimeout(timer);
  }, [reduce]);

  // Scroll-Lock, solange das Intro sichtbar ist (ohne Scrollbar-Layout-Shift)
  useEffect(() => {
    if (done) return;
    const sbw = window.innerWidth - document.documentElement.clientWidth;
    const prevOverflow = document.body.style.overflow;
    const prevPad = document.body.style.paddingRight;
    document.body.style.overflow = "hidden";
    if (sbw > 0) document.body.style.paddingRight = `${sbw}px`;
    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPad;
    };
  }, [done]);

  if (done) return null;

  return (
    <AnimatePresence onExitComplete={() => setDone(true)}>
      {visible && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
          style={{ willChange: "opacity, filter, transform" }}
          initial={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          exit={
            reduce
              ? { opacity: 0 }
              : { opacity: 0, filter: "blur(16px)", scale: 1.04 }
          }
          transition={{ duration: reduce ? 0.35 : EXIT_S, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="px-6"
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <HandwritingSvg
              path={HELLO_PATH}
              viewBox={HELLO_VIEWBOX}
              width={192}
              height={82}
              strokeWidth={2.5}
              duration={reduce ? 0 : 1.3}
              delay={reduce ? 0 : 0.2}
              className="h-auto w-[62vw] max-w-[440px] text-white drop-shadow-[0_0_14px_rgba(255,255,255,0.22)]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default IntroOverlay;
