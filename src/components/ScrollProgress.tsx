"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: shouldReduceMotion ? 1000 : 160,
    damping: shouldReduceMotion ? 1000 : 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-[linear-gradient(90deg,#F2B36E_0%,#E0893D_55%,#B85C2E_100%)] shadow-[0_0_24px_rgba(224,137,61,0.45)]"
      style={{ scaleX }}
    />
  );
}
