"use client";

import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Icon } from "@iconify/react";
import type { Me, Social, Nav, Experience } from "@/types";
import shubhamPhoto from "@/images/shubham-photo.jpeg";
import { UTMLink } from "./UTMLink";
import CTA from "./CTA";
import AnimatedMetric from "./AnimatedMetric";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface HeroProps {
  me: Me;
  socials: Social[];
  nav: Nav;
  experience: Experience[];
}

type Line = { kind: "cmd" | "out"; text: string; isUser?: boolean };

function getYearsOfExperience(experience: Experience[]): number {
  const startYears = experience
    .filter((e) => !e.skip)
    .map((e) => {
      const match = e.start.match(/\b(19|20)\d{2}\b/);
      return match ? Number.parseInt(match[0], 10) : Number.NaN;
    })
    .filter((year) => Number.isFinite(year));

  if (startYears.length === 0) return 7;
  const earliest = Math.min(...startYears);
  return new Date().getFullYear() - earliest;
}

function buildBootLines(me: Me): Line[] {
  return [
    { kind: "cmd", text: "whoami" },
    { kind: "out", text: me.name },
    { kind: "out", text: "" },
    { kind: "cmd", text: "cat role.txt" },
    { kind: "out", text: "Cloud Platform Engineer — AI Platform Operations" },
    { kind: "out", text: "7+ years · Cloud, Platform & Reliability Engineering" },
    { kind: "out", text: "" },
    { kind: "cmd", text: "location --current" },
    { kind: "out", text: `${me.location} (remote-friendly)` },
    { kind: "out", text: "" },
    { kind: "cmd", text: "./status --check" },
    { kind: "out", text: "All systems operational. Currently at SingleStore." },
    { kind: "out", text: "Type 'help' to see available commands." },
  ];
}

const HELP_LINES = [
  "available commands:",
  "help — show this list",
  "about — jump to About",
  "experience — jump to Experience",
  "skills — jump to Skills",
  "projects — jump to Projects",
  "contact — jump to Contact",
  "resume — open my CV",
  "sudo hire-me — ...",
  "clear — clear the screen",
];

const HIGHLIGHTS = [
  "AI Platform Operations",
  "Kubernetes Platform Engineering",
  "CI/CD Automation",
  "Observability & Incident Response",
  "Multi-Cloud Infrastructure",
];

const MICRO_PROOFS = ["Remote-friendly", "Platform-first mindset", "Built for production"];

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function scrollToSection(id: string, smooth: boolean) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });
}

function TerminalLine({ line, cursor }: { line: Line; cursor?: boolean }) {
  if (line.text === "" && !cursor) {
    return <p className="leading-relaxed">&nbsp;</p>;
  }

  const prefix = line.kind === "cmd" ? (line.isUser ? "visitor@shubhamkumar:~$" : "$") : ">";

  return (
    <p className="leading-relaxed">
      <span className="terminal-glow text-primary">{prefix}</span>{" "}
      <span className={line.kind === "cmd" ? "text-on-surface-variant" : "text-on-surface"}>
        {line.text}
      </span>
      {cursor && (
        <span className="blink-cursor ml-0.5 -mb-[2px] inline-block h-[14px] w-[7px] bg-primary align-middle" />
      )}
    </p>
  );
}

export default function Hero({ me, socials, nav, experience }: HeroProps) {
  const reduceMotion = usePrefersReducedMotion();
  const bootLines = useMemo(() => buildBootLines(me), [me]);

  const [history, setHistory] = useState<Line[]>([]);
  const [typingLine, setTypingLine] = useState<Line | null>(null);
  const [bootDone, setBootDone] = useState(false);
  const [input, setInput] = useState("");
  const outputRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (reduceMotion) {
      setHistory(bootLines);
      setBootDone(true);
      return;
    }

    let cancelled = false;

    async function run() {
      for (const line of bootLines) {
        if (cancelled) return;
        if (line.text === "") {
          setHistory((h) => [...h, line]);
          await wait(140);
          continue;
        }
        for (let i = 1; i <= line.text.length; i++) {
          if (cancelled) return;
          setTypingLine({ ...line, text: line.text.slice(0, i) });
          await wait(18 + Math.random() * 24);
        }
        if (cancelled) return;
        setHistory((h) => [...h, line]);
        setTypingLine(null);
        await wait(280);
      }
      if (!cancelled) setBootDone(true);
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [bootLines, reduceMotion]);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history, typingLine]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const raw = input.trim();
    if (!raw) return;

    const cmd = raw.toLowerCase();
    const newLines: Line[] = [{ kind: "cmd", text: raw, isUser: true }];

    function goTo(id: string) {
      // Blur first — a focused input otherwise fights scrollIntoView by
      // snapping the viewport back to keep itself visible.
      inputRef.current?.blur();
      scrollToSection(id, !reduceMotion);
    }

    if (cmd.startsWith("rm -rf")) {
      newLines.push(
        { kind: "out", text: "Nice try. Permission denied — that file is staying put." },
        { kind: "out", text: "Type 'resume' to actually open it." }
      );
      setHistory((h) => [...h, ...newLines]);
      setInput("");
      return;
    }

    switch (cmd) {
      case "help":
        newLines.push(...HELP_LINES.map((text) => ({ kind: "out" as const, text })));
        break;
      case "about":
        newLines.push({ kind: "out", text: me.about });
        goTo("about");
        break;
      case "experience":
        newLines.push({ kind: "out", text: "Loading experience timeline..." });
        goTo("experience");
        break;
      case "skills":
        newLines.push({ kind: "out", text: "Rendering tech stack..." });
        goTo("skills");
        break;
      case "projects":
        newLines.push({ kind: "out", text: "Fetching selected work..." });
        goTo("projects");
        break;
      case "contact":
        newLines.push({ kind: "out", text: "Opening contact channels..." });
        goTo("contact");
        break;
      case "resume":
      case "cv":
        newLines.push({ kind: "out", text: "Opening resume in a new tab..." });
        window.open(nav.resume, "_blank", "noopener,noreferrer");
        break;
      case "sudo hire-me":
        newLines.push(
          { kind: "out", text: "Permission granted." },
          { kind: "out", text: "Redirecting to contact..." }
        );
        goTo("contact");
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "sudo make-coffee":
        newLines.push(
          { kind: "out", text: "Brewing..." },
          { kind: "out", text: "418 I'm a teapot — try 'chai' instead." }
        );
        break;
      case "chai":
        newLines.push({ kind: "out", text: "Now we're talking. Back to work — type 'help' for real commands." });
        break;
      case "git blame":
        newLines.push({ kind: "out", text: "100% Shubham Kumar. No excuses, no blame-shifting — just fixes." });
        break;
      case "sl":
        newLines.push({ kind: "out", text: "Choo choo. (You meant 'ls', right?)" });
        break;
      case "ls":
        newLines.push({ kind: "out", text: "about  experience  skills  projects  contact  (no todos hidden)" });
        break;
      default:
        newLines.push({ kind: "out", text: `bash: ${raw}: command not found — type 'help'` });
    }

    setHistory((h) => [...h, ...newLines]);
    setInput("");
  }

  const stats = [
    { to: getYearsOfExperience(experience), suffix: "+", label: "Years building in production" },
    { to: 40, suffix: "%", label: "Fewer production outages" },
    { to: 50, suffix: "%", label: "Faster release workflows" },
    { to: 80, suffix: "+", label: "Hours saved each month" },
  ];

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 border-b border-outline-variant"
    >
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-6xl mx-auto w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
          <div className="flex flex-col gap-6">
            {/* Terminal window */}
            <div className="terminal-scanlines relative overflow-hidden rounded-lg border border-outline bg-surface-container-lowest">
              <div className="relative z-10 flex items-center gap-2 border-b border-outline px-4 py-2.5">
                <span className="terminal-glow inline-block h-2 w-2 rounded-full bg-primary" />
                <p className="font-label text-xs text-on-surface-variant">
                  visitor@shubhamkumar<span className="text-on-surface-variant/60">:~</span>{" "}
                  <span className="terminal-glow text-primary">● online</span>
                </p>
              </div>

              <div
                ref={outputRef}
                aria-live="polite"
                className="relative z-10 max-h-[340px] overflow-y-auto px-4 py-4 font-label text-sm"
              >
                {history.map((line, i) => (
                  <TerminalLine key={i} line={line} />
                ))}
                {typingLine && <TerminalLine line={typingLine} cursor />}
              </div>

              {bootDone && (
                <form
                  onSubmit={handleSubmit}
                  className="relative z-10 flex items-center gap-2 border-t border-outline px-4 py-3"
                >
                  <label
                    htmlFor="terminal-input"
                    className="terminal-glow whitespace-nowrap font-label text-sm text-primary"
                  >
                    visitor@shubhamkumar:~$
                  </label>
                  <input
                    id="terminal-input"
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="type 'help'"
                    autoComplete="off"
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck={false}
                    aria-label="Terminal command input"
                    className="flex-1 rounded-sm bg-transparent px-1 font-label text-sm text-on-surface outline-none placeholder:text-on-surface-variant/50 focus-visible:ring-2 focus-visible:ring-primary/60"
                  />
                  <button type="submit" className="sr-only">
                    Run command
                  </button>
                </form>
              )}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <CTA btn={`${me.cal}`} className="btn-primary">
                <Icon icon="ion:calendar-outline" width={16} />
                Book a call
              </CTA>
              <UTMLink href={nav.resume} className="btn-ghost">
                <Icon icon="ion:document-outline" width={16} />
                View CV
              </UTMLink>
            </div>

            {/* Socials */}
            <div className="flex flex-wrap items-center gap-2">
              {socials.map((social) => (
                <UTMLink
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded border border-outline text-on-surface-variant transition-colors duration-150 hover:border-primary/60 hover:text-primary"
                >
                  <Icon icon={social.icon} width={17} />
                </UTMLink>
              ))}
            </div>

            {/* Highlight chips */}
            <div className="flex flex-wrap gap-2">
              {HIGHLIGHTS.map((item) => (
                <span
                  key={item}
                  className="rounded border border-outline px-4 py-2 text-xs font-label uppercase tracking-wider text-on-surface-variant"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Micro proofs */}
            <div className="flex flex-wrap items-center gap-2">
              {MICRO_PROOFS.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 text-[11px] font-label uppercase tracking-wider text-on-surface-variant"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[400px] mt-6 lg:mt-0">
              <div className="relative overflow-hidden rounded-lg border border-outline bg-surface-container-low">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={shubhamPhoto}
                    alt={me.name}
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 420px, 420px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-3 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="surface-card px-5 py-5">
              <p className="font-headline text-3xl font-bold tracking-tight text-on-surface">
                <AnimatedMetric from={0} to={stat.to} suffix={stat.suffix} />
              </p>
              <p className="mt-2 font-body text-sm leading-relaxed text-on-surface-variant">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center">
          <a
            href="#about"
            className="inline-flex items-center gap-3 rounded border border-outline px-4 py-2 text-[11px] font-label uppercase tracking-wider text-on-surface-variant transition-colors hover:text-primary"
          >
            <Icon icon="ion:arrow-down" width={14} />
            Scroll to explore
          </a>
        </div>
      </motion.div>
    </section>
  );
}
