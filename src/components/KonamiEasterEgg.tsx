"use client";

import { useEffect, useState } from "react";

const SEQUENCE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export const KONAMI_EVENT = "konami-unlocked";

export default function KonamiEasterEgg() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let progress = 0;

    function onKeyDown(e: KeyboardEvent) {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      const expected = SEQUENCE[progress];

      if (key === expected) {
        progress += 1;
        if (progress === SEQUENCE.length) {
          progress = 0;
          window.dispatchEvent(new Event(KONAMI_EVENT));
          setVisible(true);
          window.setTimeout(() => setVisible(false), 3200);
        }
      } else {
        progress = key === SEQUENCE[0] ? 1 : 0;
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div
      aria-live="polite"
      className={`pointer-events-none fixed inset-x-0 top-20 z-[70] flex justify-center transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="terminal-glow rounded border border-primary/40 bg-surface-container-lowest px-5 py-2.5 font-label text-xs uppercase tracking-wider text-primary shadow-[0_0_24px_rgba(47,226,140,0.2)]">
        All systems nominal — achievement unlocked
      </div>
    </div>
  );
}
