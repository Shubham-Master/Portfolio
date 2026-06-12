"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import type { Project } from "@/types";
import SectionHeader from "./SectionHeader";
import { StaggerContainer, StaggerItem } from "./AnimateOnScroll";
import InteractiveCard from "./InteractiveCard";

interface ProjectsProps {
  projects: Project[];
}

const STACK_ICONS: Record<string, string> = {
  Kubernetes: "devicon:kubernetes",
  Terraform: "devicon:terraform",
  AWS: "skill-icons:aws-dark",
  Helm: "devicon:helm",
  "Argo CD": "devicon:argocd",
  "AWS Lambda": "skill-icons:aws-dark",
  SQS: "skill-icons:aws-dark",
  S3: "skill-icons:aws-dark",
  Go: "devicon:go",
  MongoDB: "devicon:mongodb",
  Azure: "devicon:azure",
  GCP: "devicon:googlecloud",
  Ansible: "devicon:ansible",
  Jenkins: "devicon:jenkins",
  "GitHub Actions": "devicon:githubactions",
  Docker: "devicon:docker",
  Bash: "devicon:bash",
  Python: "devicon:python",
  Linux: "devicon:linux",
  Kafka: "devicon:apachekafka",
  Elasticsearch: "devicon:elasticsearch",
};

export default function Projects({ projects }: ProjectsProps) {
  const isSingle = projects.length === 1;

  return (
    <section id="projects" className="section-base">
      <SectionHeader
        label="Selected Work"
        title="A few things I've built and improved"
        description="These projects reflect the kind of work I enjoy most: strengthening platforms, simplifying operations, and building reliable workflows around real systems."
      />

      <StaggerContainer className={`grid grid-cols-1 gap-6 ${!isSingle ? "lg:grid-cols-2" : ""}`}>
        {projects.map((project, idx) => (
          <StaggerItem key={project.title}>
            {isSingle ? (
              /* Hero-style full-width card for single project */
              <InteractiveCard className="rounded-[28px] border border-white/7 bg-surface-container-low/90 inner-glow transition-all duration-300 hover:border-primary/25 hover:bg-surface-container hover:shadow-[0_28px_60px_rgba(0,0,0,0.28)] overflow-hidden">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block"
                >
                  {/* Top glow line */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
                  {/* Hover radial */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(600px_circle_at_30%_50%,rgba(242,179,110,0.08),transparent_60%)]" />

                  <div className="relative p-8 sm:p-10 lg:p-12">
                    {/* Header row */}
                    <div className="flex items-start justify-between gap-6 mb-6">
                      <div className="flex items-center gap-3">
                        <p className="font-label text-[11px] uppercase tracking-[0.22em] text-on-surface-variant">
                          Featured Project
                        </p>
                        <span className="rounded-full bg-primary/15 border border-primary/30 px-2.5 py-0.5 text-[10px] font-label font-semibold tracking-wider text-primary uppercase">
                          Open Source
                        </span>
                      </div>
                      {/* Ghost number */}
                      <span className="font-headline text-[80px] font-bold tracking-tighter text-white/[0.04] leading-none select-none">
                        01
                      </span>
                    </div>

                    {/* Main content — two-column on large screens */}
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-end">
                      <div>
                        <h3 className="font-headline font-bold text-3xl sm:text-4xl tracking-tight text-on-surface group-hover:text-primary transition-colors duration-300 mb-4">
                          {project.title}
                        </h3>
                        <p className="font-body text-base leading-[1.85] text-on-surface-variant max-w-2xl">
                          {project.description}
                        </p>

                        {/* Stack badges */}
                        <div className="flex flex-wrap gap-2 mt-6">
                          {project.stack.map((item) => {
                            const icon = STACK_ICONS[item];
                            return (
                              <span
                                key={item}
                                className="flex items-center gap-1.5 rounded-full border border-white/8 bg-surface-container px-3 py-1.5 text-xs font-label text-on-surface-variant transition-all duration-200 group-hover:border-white/12"
                              >
                                {icon && <Icon icon={icon} width={13} className="flex-shrink-0" />}
                                {item}
                              </span>
                            );
                          })}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex flex-row lg:flex-col items-center gap-3 lg:gap-4 flex-shrink-0">
                        <motion.div
                          whileHover={{ scale: 1.04, y: -2 }}
                          transition={{ type: "spring", stiffness: 340, damping: 20 }}
                          className="flex items-center gap-2.5 rounded-2xl border border-primary/25 bg-primary/10 px-5 py-3 text-sm font-label font-semibold text-primary transition-all duration-200 group-hover:bg-primary/18 group-hover:border-primary/40 cursor-pointer"
                        >
                          <Icon icon="mdi:github" width={18} />
                          View on GitHub
                        </motion.div>
                        <div className="flex items-center gap-1.5 text-[11px] font-label text-on-surface-variant/50">
                          <Icon icon="ion:git-branch-outline" width={12} />
                          <span>public repo</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </InteractiveCard>
            ) : (
              /* Regular grid card for multiple projects */
              <InteractiveCard className="rounded-[26px] border border-white/7 bg-surface-container-low/90 p-7 inner-glow transition-all duration-300 hover:border-primary/20 hover:bg-surface-container hover:shadow-[0_22px_48px_rgba(0,0,0,0.24)]">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block h-full"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(300px_circle_at_20%_20%,rgba(242,179,110,0.14),transparent_60%)]" />
                  <div className="absolute -right-5 -top-7 font-headline text-[90px] font-bold tracking-tighter text-white/[0.04] transition-transform duration-300 group-hover:translate-x-[-6px] group-hover:translate-y-[6px]">
                    0{idx + 1}
                  </div>
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent opacity-60" />

                  <div className="relative mb-5 flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-3">
                        <p className="font-label text-[11px] uppercase tracking-[0.2em] text-on-surface-variant">
                          Selected project
                        </p>
                      </div>
                      <p className="font-headline font-bold text-xl tracking-tight text-on-surface group-hover:text-primary transition-colors">
                        {project.title}
                      </p>
                      <p className="font-body text-sm leading-relaxed text-on-surface-variant mt-3">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex flex-col items-center gap-1.5 flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-container text-on-surface-variant transition-all duration-300 group-hover:bg-primary/15 group-hover:text-primary group-hover:-translate-y-0.5">
                        <Icon icon="mdi:github" width={20} />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => {
                      const icon = STACK_ICONS[item];
                      return (
                        <span
                          key={item}
                          className="flex items-center gap-1.5 rounded-full border border-white/7 bg-surface-container px-3 py-1 text-xs font-label text-on-surface-variant"
                        >
                          {icon && <Icon icon={icon} width={13} className="flex-shrink-0" />}
                          {item}
                        </span>
                      );
                    })}
                  </div>
                </a>
              </InteractiveCard>
            )}
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
