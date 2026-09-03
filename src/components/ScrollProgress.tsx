"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const STAGES = ["Build", "Test", "Deploy", "Live"];

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  // Four independent fills, one per pipeline stage — segment N only starts
  // filling once scroll passes N/4, so stages light up in sequence.
  const seg0 = useTransform(scrollYProgress, [0, 0.25], [0, 1], { clamp: true });
  const seg1 = useTransform(scrollYProgress, [0.25, 0.5], [0, 1], { clamp: true });
  const seg2 = useTransform(scrollYProgress, [0.5, 0.75], [0, 1], { clamp: true });
  const seg3 = useTransform(scrollYProgress, [0.75, 1], [0, 1], { clamp: true });
  const segments = [seg0, seg1, seg2, seg3];

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] flex gap-[3px] p-[3px]"
      title={`Pipeline: ${STAGES.join(" → ")}`}
    >
      {segments.map((seg, i) => (
        <div
          key={STAGES[i]}
          className="relative h-[3px] flex-1 overflow-hidden rounded-full bg-outline-variant"
        >
          <motion.div
            className="absolute inset-y-0 left-0 w-full origin-left bg-primary"
            style={{ scaleX: seg }}
          />
        </div>
      ))}
    </div>
  );
}
