"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

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
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-outline-variant bg-surface/95">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6 font-headline font-semibold tracking-tighter text-sm">
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
                className={`relative text-xs font-label transition-colors duration-150 ${
                  isActive ? "text-primary" : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* CTAs */}
        <div className="hidden lg:flex items-center gap-2">
          <UTMLink href={nav.resume} className="btn-ghost text-xs px-3 py-1.5">
            View CV
          </UTMLink>
          <CTA btn={`${nav.cal}`} className="btn-primary text-xs px-3 py-1.5">
            Book a call
          </CTA>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-on-surface-variant hover:text-on-surface transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <Icon icon={mobileOpen ? "ion:close" : "ion:menu"} width={20} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-outline-variant bg-surface px-4 py-4">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-label transition-colors ${
                    isActive
                      ? "text-primary bg-surface-container"
                      : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                  }`}
                >
                  {isActive && <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />}
                  {link.label}
                </a>
              );
            })}
            <div className="border-t border-outline-variant mt-2 pt-3 flex gap-2">
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
        </div>
      )}
    </nav>
  );
}
