"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Experience } from "@/types";
import SectionHeader from "./SectionHeader";
import { UTMLink } from "./UTMLink";
import AnimatedMetric from "./AnimatedMetric";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface ExperienceProps {
  experiences: Experience[];
}

interface Metric {
  label: string;
  from: number;
  to: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

const SINGLESTORE_METRICS: Metric[] = [
  { label: "Cost Reduction", from: 0, to: 35, suffix: "%+" },
  { label: "Daily Users", from: 0, to: 150, prefix: "~" },
];

const AIRFI_SENIOR_METRICS: Metric[] = [
  { label: "Platform Uptime", from: 97.8, to: 99.95, suffix: "%", decimals: 2 },
  { label: "Incident Resolution", from: 0, to: 45, suffix: "%+" },
];

const INNOITUS_METRICS: Metric[] = [
  { label: "Fewer Incidents", from: 0, to: 35, suffix: "%" },
  { label: "Faster Response", from: 0, to: 30, suffix: "%" },
];

function getMetricsFor(exp: Experience): Metric[] | null {
  if (exp.company === "SingleStore") return SINGLESTORE_METRICS;
  if (exp.company === "AirFi Aviation Solutions" && exp.title === "Senior DevOps Engineer") {
    return AIRFI_SENIOR_METRICS;
  }
  if (exp.company === "Innoitus") return INNOITUS_METRICS;
  return null;
}

export default function ExperienceSection({ experiences }: ExperienceProps) {
  const visible = experiences.filter((e) => !e.skip);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const reduceMotion = usePrefersReducedMotion();
  const revealed = reduceMotion || isInView;

  const lineDuration = 1.1;
  const nodeStagger = visible.length > 0 ? Math.min(lineDuration / visible.length, 0.16) : 0.13;

  return (
    <section id="experience" className="section-base">
      <SectionHeader
        label="Experience"
        title="Teams and systems I've worked on"
        description="From embedded environments to cloud platforms, most of my roles have been about improving reliability, automating the rough edges, and helping teams ship with more confidence."
      />

      <div ref={sectionRef} className="flex flex-col gap-1 relative">
        {/* Timeline line — draws in once, on top of a static hairline track */}
        <div className="absolute left-[23px] top-2 bottom-2 hidden w-px sm:block">
          <div className="absolute inset-0 bg-outline" />
          <motion.div
            className="absolute inset-x-0 top-0 bg-primary origin-top"
            style={{ height: "100%" }}
            initial={reduceMotion ? false : { scaleY: 0 }}
            animate={{ scaleY: revealed ? 1 : 0 }}
            transition={{ duration: lineDuration, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <motion.div
          initial={reduceMotion ? false : "hidden"}
          animate={revealed ? "visible" : "hidden"}
          variants={{
            visible: { transition: { staggerChildren: nodeStagger } },
            hidden: {},
          }}
        >
          {visible.map((exp) => {
            const isCurrent = exp.end === null;
            const metrics = getMetricsFor(exp);

            return (
              <div key={`${exp.company}-${exp.title}-${exp.start}`} className="relative flex gap-6">
                {/* Timeline node */}
                <div className="hidden sm:flex flex-col items-center z-10 mt-1">
                  <motion.div
                    variants={{
                      hidden: { borderColor: "#3a4453", backgroundColor: "rgba(20,25,32,1)" },
                      visible: { borderColor: "#2fe28c", backgroundColor: "rgba(47,226,140,0.08)" },
                    }}
                    className="relative w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 border"
                  >
                    {exp.logo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        width={40}
                        height={40}
                        className="rounded-full object-contain"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        crossOrigin="anonymous"
                      />
                    ) : (
                      <span className="font-headline font-bold text-xs text-primary">
                        {exp.company[0]}
                      </span>
                    )}
                    {isCurrent && (
                      <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
                        <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-primary" />
                        <span className="relative inline-flex h-3 w-3 rounded-full border border-surface-container-low bg-primary" />
                      </span>
                    )}
                  </motion.div>
                </div>

                {/* Card */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut", delay: 0.1 } },
                  }}
                  className="surface-card mb-4 flex-1 p-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        {/* Mobile logo */}
                        <div className="sm:hidden w-9 h-9 rounded-full overflow-hidden flex-shrink-0 bg-surface-container-low border border-outline">
                          {exp.logo && (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={exp.logo}
                              alt={exp.company}
                              width={36}
                              height={36}
                              className="object-contain"
                              loading="lazy"
                              referrerPolicy="no-referrer"
                              crossOrigin="anonymous"
                            />
                          )}
                        </div>
                        {exp.link ? (
                          <UTMLink
                            href={exp.link}
                            className="font-headline font-bold text-lg tracking-tighter text-on-surface hover:text-primary transition-colors"
                          >
                            {exp.company}
                          </UTMLink>
                        ) : (
                          <p className="font-headline font-bold text-lg tracking-tighter text-on-surface">
                            {exp.company}
                          </p>
                        )}
                        {isCurrent && (
                          <span className="inline-flex items-center gap-1.5">
                            <span className="relative flex h-2 w-2">
                              <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                            </span>
                            <span className="font-label text-[10px] uppercase tracking-wider text-primary">
                              status: active
                            </span>
                          </span>
                        )}
                      </div>
                      <p className="font-body text-sm text-on-surface-variant">
                        {exp.title}
                      </p>
                      <p className="font-label text-xs text-on-surface-variant mt-1">
                        {exp.location}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 sm:text-right">
                      <span className="badge">
                        {exp.start} — {exp.end ?? "Present"}
                      </span>
                      {exp.badges.map((badge) => (
                        <span key={badge} className="badge text-primary">
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>

                  <ul className="flex flex-col gap-2">
                    {exp.description.map((point, i) => (
                      <li key={i} className="flex gap-2.5 items-start">
                        <span className="mt-[7px] w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                        <span className="font-body text-sm text-on-surface-variant leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {metrics && (
                    <div className="mt-5 grid grid-cols-2 gap-4 border-t border-outline-variant pt-4 sm:max-w-xs">
                      {metrics.map((metric) => (
                        <div key={metric.label}>
                          <p className="font-headline text-xl font-bold tracking-tight text-primary">
                            <AnimatedMetric
                              from={metric.from}
                              to={metric.to}
                              prefix={metric.prefix}
                              suffix={metric.suffix}
                              decimals={metric.decimals ?? 0}
                            />
                          </p>
                          <p className="font-label text-[10px] uppercase tracking-wider text-on-surface-variant mt-1">
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
