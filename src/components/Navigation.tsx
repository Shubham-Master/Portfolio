"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import type { Me, Nav } from "@/types";
import CTA from "./CTA";
import { UTMLink } from "./UTMLink";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.href.replace("#", ""));

interface NavigationProps {
  nav: Nav;
  me: Me;
}

export default function Navigation({ me, nav }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (!el) continue;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    }

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      {/* Desktop nav — pill */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "pt-3" : "pt-5"
          }`}
      >
        <motion.div
          className={`mx-auto max-w-fit px-6 py-2.5 rounded-full flex items-center gap-6 font-headline font-semibold tracking-tighter text-sm transition-all duration-300 ${scrolled
            ? "bg-surface-container-low/80 backdrop-blur-xl shadow-glow"
            : "bg-surface/60 backdrop-blur-xl"
            }`}
          animate={{
            scale: scrolled ? 0.985 : 1,
            y: scrolled ? -1 : 0,
          }}
          transition={{ type: "spring", stiffness: 220, damping: 20 }}
          style={{ boxShadow: "0 0 48px rgba(240,164,93,0.08)" }}
        >
          {/* Brand */}
          <Link
            href="#hero"
            className="text-base font-bold tracking-tighter text-on-surface hover:text-primary transition-colors"
          >
            {me.name}
          </Link>

          {/* Nav links — hidden on mobile */}
          <div className="hidden lg:flex items-center gap-5">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative text-xs font-medium transition-colors duration-200 ${
                    isActive ? "text-primary" : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-dot"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-2">
            <UTMLink
              href={nav.resume}
              className="btn-ghost text-xs px-3 py-1.5"
            >
              View CV
            </UTMLink>
            <CTA
              btn={`${nav.cal}`}
              className="btn-primary text-xs px-3 py-1.5"
            >
              Book a call
            </CTA>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-on-surface-variant hover:text-on-surface transition-colors ml-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{ rotate: mobileOpen ? 90 : 0, scale: mobileOpen ? 1.05 : 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="block"
            >
              <Icon icon={mobileOpen ? "ion:close" : "ion:menu"} width={20} />
            </motion.span>
          </button>
        </motion.div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, scale: 0.98, filter: "blur(8px)" }}
              transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden mt-2 mx-4 rounded-xl bg-surface-container-low/95 backdrop-blur-xl p-4 shadow-glow-md"
            >
              <div className="flex flex-col gap-1">
                {NAV_LINKS.map((link, idx) => {
                  const isActive = activeSection === link.href.replace("#", "");
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2, delay: idx * 0.03 }}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-md transition-all text-sm font-medium ${
                        isActive
                          ? "text-primary bg-primary/8"
                          : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                      }`}
                    >
                      {isActive && <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />}
                      {link.label}
                    </motion.a>
                  );
                })}
                <div className="border-t border-outline-variant/20 mt-2 pt-3 flex gap-2">
                  <a
                    href={nav.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost text-xs flex-1 justify-center"
                  >
                    View CV
                  </a>
                  <CTA btn={nav.cal} className="btn-primary text-xs flex-1 justify-center">
                    Book a call
                  </CTA>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
