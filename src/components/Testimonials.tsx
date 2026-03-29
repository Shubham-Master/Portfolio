"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Testimonial } from "@/types";
import SectionHeader from "./SectionHeader";
import InteractiveCard from "./InteractiveCard";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

function Avatar({
  src,
  name,
  sizeClass,
  textClass,
  sizes,
}: {
  src: string;
  name: string;
  sizeClass: string;
  textClass: string;
  sizes: string;
}) {
  const [hasError, setHasError] = useState(false);
  const initials = useMemo(
    () =>
      name
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0]?.toUpperCase() ?? "")
        .join(""),
    [name]
  );

  return (
    <div
      className={`relative overflow-hidden rounded-full bg-surface-container flex-shrink-0 ${sizeClass}`}
    >
      {hasError ? (
        <div className="flex h-full w-full items-center justify-center bg-surface-container-high text-primary">
          <span className={`font-headline font-semibold ${textClass}`}>{initials}</span>
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={name}
          className="h-full w-full object-cover"
          loading="lazy"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          sizes={sizes}
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <InteractiveCard className="bg-surface-container-low rounded-2xl p-6 inner-glow h-full flex flex-col gap-4">
      {/* Quote mark */}
      <div className="text-primary/30 font-headline text-5xl leading-none font-bold select-none">
        &ldquo;
      </div>

      {/* Quote text */}
      <p className="font-body text-sm text-on-surface-variant leading-relaxed whitespace-pre-line flex-1">
        {testimonial.text}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-outline-variant/10">
        <Avatar
          src={testimonial.avatar}
          name={testimonial.name}
          sizeClass="w-9 h-9"
          textClass="text-xs"
          sizes="36px"
        />
        <div className="min-w-0">
          <a
            href={testimonial.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-headline font-semibold text-sm tracking-tight text-on-surface hover:text-primary transition-colors truncate block"
          >
            {testimonial.name.trim()}
          </a>
          <p className="font-label text-xs text-on-surface-variant truncate">
            {testimonial.destination} · {formatDate(testimonial.date)}
          </p>
        </div>
      </div>
    </InteractiveCard>
  );
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    if (!testimonials.length) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIdx((current) => (current + 1) % testimonials.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [testimonials.length]);

  if (!testimonials.length) {
    return null;
  }

  return (
    <section id="testimonials" className="section-base">
      <SectionHeader
        label="Social Proof"
        title="What people I've worked with say"
        description="A few words from teammates and engineering leaders who've seen my work up close."
      />

      {/* Featured testimonial */}
      <div className="mb-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, y: 18, rotateX: -6 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, y: -16, rotateX: 6 }}
            transition={{ duration: 0.45 }}
          >
            <TestimonialCard testimonial={testimonials[activeIdx]} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Selector dots + compact previews */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {testimonials.map((t, idx) => (
          <button
            key={t.name}
            onClick={() => setActiveIdx(idx)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-label transition-all duration-200 ${idx === activeIdx
              ? "bg-primary/10 text-primary ring-1 ring-primary/30"
              : "bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high"
              }`}
          >
            <Avatar
              src={t.avatar}
              name={t.name}
              sizeClass="w-5 h-5"
              textClass="text-[9px]"
              sizes="20px"
            />
            {t.name.trim().split(" ")[0]}
          </button>
        ))}
      </div>

      {/* All testimonials grid (smaller) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {testimonials.map((t, idx) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            onClick={() => setActiveIdx(idx)}
            whileHover={{ y: -6, scale: 1.01 }}
            className="cursor-pointer"
          >
            <InteractiveCard
              className={`bg-surface-container-low rounded-2xl p-5 inner-glow min-h-[250px] transition-all duration-200 hover:bg-surface-container ${idx === activeIdx ? "ring-1 ring-primary/30 shadow-glow" : ""
                }`}
            >
              <div className="flex items-center gap-2.5 mb-3">
                <Avatar
                  src={t.avatar}
                  name={t.name}
                  sizeClass="w-8 h-8"
                  textClass="text-[10px]"
                  sizes="32px"
                />
                <div>
                  <p className="font-headline font-semibold text-xs tracking-tight text-on-surface">
                    {t.name.trim()}
                  </p>
                  <p className="font-label text-[10px] text-on-surface-variant">
                    {t.destination}
                  </p>
                </div>
              </div>
              <p className="font-body text-xs text-on-surface-variant leading-relaxed whitespace-pre-line line-clamp-6">
                {t.text}
              </p>
            </InteractiveCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
