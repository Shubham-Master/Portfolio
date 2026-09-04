"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface AnimatedMetricProps {
  from: number;
  to: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
  onComplete?: () => void;
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export default function AnimatedMetric({
  from,
  to,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 1300,
  className,
  onComplete,
}: AnimatedMetricProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = usePrefersReducedMotion();
  const [value, setValue] = useState(reduceMotion ? to : from);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    if (!isInView) return;

    if (reduceMotion) {
      setValue(to);
      onCompleteRef.current?.();
      return;
    }

    let raf: number;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(from + (to - from) * easeOutCubic(progress));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        onCompleteRef.current?.();
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // onComplete intentionally excluded — read via ref so a new inline
    // callback identity each render doesn't restart the count-up.
  }, [isInView, reduceMotion, from, to, duration]);

  const display = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
