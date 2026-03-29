"use client";

import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import type { ReactNode, MouseEvent } from "react";

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
}

export default function InteractiveCard({
  children,
  className,
  spotlightColor = "rgba(242,179,110,0.18)",
}: InteractiveCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(50);

  const rotateX = useSpring(0, {
    stiffness: 180,
    damping: 18,
    mass: 0.6,
  });
  const rotateY = useSpring(0, {
    stiffness: 180,
    damping: 18,
    mass: 0.6,
  });

  const spotlight = useMotionTemplate`radial-gradient(280px circle at ${pointerX}% ${pointerY}%, ${spotlightColor}, transparent 68%)`;
  const sheen = useMotionTemplate`radial-gradient(180px circle at ${pointerX}% ${pointerY}%, rgba(255,255,255,0.10), transparent 62%)`;

  const handlePointerMove = (event: MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    pointerX.set(x * 100);
    pointerY.set(y * 100);
    rotateY.set((x - 0.5) * 8);
    rotateX.set((0.5 - y) * 8);
  };

  const handlePointerLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    pointerX.set(50);
    pointerY.set(50);
  };

  return (
    <motion.div
      onMouseMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
      whileHover={shouldReduceMotion ? undefined : { y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, mass: 0.7 }}
      style={
        shouldReduceMotion
          ? undefined
          : {
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }
      }
      className={`group relative overflow-hidden ${className ?? ""}`}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: spotlight }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: sheen }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}
