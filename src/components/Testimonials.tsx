"use client";

import { useMemo, useState } from "react";
import type { Testimonial } from "@/types";
import SectionHeader from "./SectionHeader";

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
      className={`relative overflow-hidden rounded-full border border-outline flex-shrink-0 ${sizeClass}`}
    >
      {hasError ? (
        <div className="flex h-full w-full items-center justify-center bg-surface-container text-primary">
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
    <div className="surface-card p-6 h-full flex flex-col gap-4">
      {/* Quote text */}
      <p className="font-body text-sm text-on-surface-variant leading-relaxed whitespace-pre-line flex-1">
        {testimonial.text}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-outline-variant">
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
    </div>
  );
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  if (!testimonials.length) {
    return null;
  }

  return (
    <section id="testimonials" className="section-base">
      <SectionHeader
        title="What people I've worked with say"
        description="A few words from teammates and engineering leaders who've seen my work up close."
      />

      {/* Featured testimonial */}
      <div className="mb-8">
        <TestimonialCard testimonial={testimonials[activeIdx]} />
      </div>

      {/* Selector chips */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {testimonials.map((t, idx) => (
          <button
            key={t.name}
            onClick={() => setActiveIdx(idx)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded border text-xs font-label transition-colors duration-150 ${
              idx === activeIdx
                ? "border-primary/60 text-primary"
                : "border-outline text-on-surface-variant hover:text-on-surface"
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
          <button
            key={t.name}
            onClick={() => setActiveIdx(idx)}
            className={`surface-card text-left p-5 min-h-[250px] ${
              idx === activeIdx ? "border-primary/60" : ""
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
          </button>
        ))}
      </div>
    </section>
  );
}
