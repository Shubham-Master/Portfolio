"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Icon } from "@iconify/react";
import type { Me, Social, Nav, Experience } from "@/types";
import shubhamPhoto from "@/images/shubham-photo.jpeg";
import { UTMLink } from "./UTMLink";
import CTA from "./CTA";

interface HeroProps {
  me: Me;
  socials: Social[];
  nav: Nav;
  experience: Experience[];
}

function getYearsOfExperience(experience: Experience[]): string {
  const starts = experience.filter((e) => !e.skip).map((e) => new Date(e.start).getFullYear());
  const earliest = Math.min(...starts);
  const years = new Date().getFullYear() - earliest;
  return `${years}+`;
}

const HIGHLIGHTS = [
  "Kubernetes Platform Engineering",
  "CI/CD Automation",
  "Observability & Incident Response",
  "Multi-Cloud Infrastructure",
];

const FLOATING_LABELS = [
  { label: "AWS", className: "-left-6 top-14 hidden lg:flex", duration: 6.5 },
  { label: "Terraform", className: "-right-8 top-1/3 hidden lg:flex", duration: 7.2 },
  { label: "Observability", className: "left-12 -bottom-5 hidden lg:flex", duration: 6.8 },
];

export default function Hero({ me, socials, nav, experience }: HeroProps) {
  const stats = [
    { value: getYearsOfExperience(experience), label: "Years building in production" },
    { value: "8K+", label: "Embedded devices supported" },
    { value: "50%", label: "Faster release workflows" },
    { value: "80+", label: "Hours saved each month" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 18% 18%, rgba(87,217,255,0.16), transparent 24%), radial-gradient(circle at 82% 24%, rgba(131,92,255,0.12), transparent 24%), radial-gradient(circle at 50% 85%, rgba(87,217,255,0.08), transparent 30%)",
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.12fr_0.88fr] gap-12 items-center">
          <div className="flex flex-col gap-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="flex flex-wrap items-center gap-3"
            >
              <a
                href={me.locationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface-container-low/90 px-3 py-1.5 text-xs font-label text-on-surface-variant transition-colors hover:text-primary"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse" />
                {me.location}
                <Icon icon="ion:chevron-forward" width={12} />
              </a>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-label text-primary">
                <span className="h-2 w-2 rounded-full bg-primary-container" />
                Currently at SingleStore
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="mb-3 font-label text-xs uppercase tracking-[0.32em] text-primary/80">
                Cloud, platform and reliability engineering
              </p>
              <h1 className="font-headline font-bold tracking-tighter leading-[0.9]">
                <span className="block text-5xl sm:text-6xl xl:text-7xl text-on-surface">
                  {me.name.split(" ")[0]}
                </span>
                <span className="block text-5xl sm:text-6xl xl:text-7xl gradient-text">
                  {me.name.split(" ").slice(1).join(" ")}
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="max-w-2xl font-headline text-xl sm:text-2xl text-on-surface-variant font-medium tracking-tight"
            >
              {me.about}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="font-body text-base leading-[1.9] text-on-surface-variant max-w-2xl"
            >
              {me.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex flex-wrap gap-3"
            >
              <CTA
                btn={`${me.cal}`}
                className="btn-primary"
              >
                <Icon icon="ion:calendar-outline" width={16} />
                Book a call
              </CTA>
              <UTMLink
                href={nav.resume}
                className="btn-ghost"
              >
                <Icon icon="ion:document-outline" width={16} />
                View CV
              </UTMLink>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="flex flex-wrap items-center gap-2 lg:gap-3"
            >
              {socials.map((social) => (
                <UTMLink
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/6 bg-surface-container-low/80 text-on-surface-variant transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-surface-container hover:text-primary hover:shadow-glow"
                >
                  <Icon icon={social.icon} width={18} />
                </UTMLink>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="flex flex-wrap gap-2 pt-2"
            >
              {HIGHLIGHTS.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/8 bg-white/[0.03] px-4 py-2 text-xs font-label uppercase tracking-[0.18em] text-on-surface-variant"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[460px]">
              <div
                className="absolute -inset-6 rounded-[40px] opacity-40 blur-3xl"
                style={{
                  background: "linear-gradient(135deg, rgba(87,217,255,0.34), rgba(131,92,255,0.2))",
                }}
              />
              <motion.div
                className="absolute -inset-3 rounded-[44px] border border-dashed border-primary/15"
                animate={{ rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-6 rounded-[36px] border border-primary/20" />
              <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#0f1217] p-4 shadow-[0_32px_80px_rgba(0,0,0,0.32)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(87,217,255,0.18),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(131,92,255,0.12),transparent_28%)]" />
                <div className="relative aspect-[4/5] overflow-hidden rounded-[28px]">
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0d1117]/30 via-transparent to-transparent" />
                  <div className="absolute inset-0 z-10 border border-white/8 rounded-[28px]" />
                  <Image
                    src={shubhamPhoto}
                    alt={me.name}
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 420px, 460px"
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
                  transition={{ duration: 0.5, delay: 0.8, y: { duration: 5.2, repeat: Infinity, ease: "easeInOut" } }}
                  className="absolute right-0 top-10 z-20 translate-x-6 rounded-2xl border border-white/10 bg-[#121820]/90 px-4 py-3 shadow-[0_12px_32px_rgba(0,0,0,0.28)] backdrop-blur"
                >
                  <p className="font-label text-[11px] uppercase tracking-[0.18em] text-on-surface-variant">
                    Platform Focus
                  </p>
                  <p className="mt-1 font-headline text-lg font-semibold text-on-surface">
                    Kubernetes + Cloud Ops
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: [0, 10, 0] }}
                  transition={{ duration: 0.5, delay: 0.9, y: { duration: 5.8, repeat: Infinity, ease: "easeInOut" } }}
                  className="absolute bottom-6 left-0 z-20 -translate-x-6 rounded-2xl border border-primary/20 bg-[#111820]/92 px-5 py-4 shadow-[0_18px_40px_rgba(0,0,0,0.34)] backdrop-blur"
                >
                  <p className="font-headline text-3xl font-bold tracking-tight text-on-surface">
                    8K+
                  </p>
                  <p className="mt-1 max-w-[180px] font-body text-xs leading-relaxed text-on-surface-variant">
                    Devices supported with automation, diagnostics, and deployment tooling.
                  </p>
                </motion.div>
              </div>

              {FLOATING_LABELS.map((item, idx) => (
                <motion.div
                  key={item.label}
                  className={`absolute z-20 items-center rounded-full border border-white/10 bg-[#121820]/88 px-4 py-2 text-[11px] font-label uppercase tracking-[0.18em] text-on-surface-variant backdrop-blur ${item.className}`}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: [0, idx % 2 === 0 ? -10 : 10, 0] }}
                  transition={{
                    duration: 0.45,
                    delay: 1 + idx * 0.1,
                    y: { duration: item.duration, repeat: Infinity, ease: "easeInOut" },
                  }}
                >
                  {item.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/8 bg-surface-container-low/80 px-5 py-5 inner-glow backdrop-blur"
            >
              <p className="font-headline text-3xl font-bold tracking-tight text-on-surface">
                {stat.value}
              </p>
              <p className="mt-2 font-body text-sm leading-relaxed text-on-surface-variant">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
