"use client";

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export default function AmbientGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let raf = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight * 0.25;

    const apply = () => {
      ref.current?.style.setProperty("--glow-x", `${x}px`);
      ref.current?.style.setProperty("--glow-y", `${y}px`);
    };
    apply();

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          apply();
          raf = 0;
        });
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduceMotion]);

  // Static, centered fallback for reduced-motion and coarse-pointer (touch)
  // devices — the CSS custom properties keep their declared defaults below
  // since the effect above never runs a mousemove listener for them.
  return <div ref={ref} aria-hidden="true" className="ambient-glow" />;
}
