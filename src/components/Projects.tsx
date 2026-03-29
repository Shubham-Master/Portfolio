import { Icon } from "@iconify/react";
import type { Project } from "@/types";
import SectionHeader from "./SectionHeader";
import { StaggerContainer, StaggerItem } from "./AnimateOnScroll";
import InteractiveCard from "./InteractiveCard";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="section-base">
      <SectionHeader
        label="Selected Work"
        title="A few things I've built and improved"
        description="These projects reflect the kind of work I enjoy most: strengthening platforms, simplifying operations, and building reliable workflows around real systems."
      />

      <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <StaggerItem key={project.title}>
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
                <div>
                  <p className="mb-3 font-label text-[11px] uppercase tracking-[0.2em] text-on-surface-variant">
                    Selected project
                  </p>
                  <p className="font-headline font-bold text-xl tracking-tight text-on-surface group-hover:text-primary transition-colors">
                    {project.title}
                  </p>
                  <p className="font-body text-sm leading-relaxed text-on-surface-variant mt-3">
                    {project.description}
                  </p>
                </div>
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-surface-container text-primary transition-transform duration-300 group-hover:-translate-y-0.5">
                  <Icon icon="ion:arrow-up-outline" width={18} className="rotate-45" />
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/7 bg-surface-container px-3 py-1 text-xs font-label text-on-surface-variant"
                  >
                    {item}
                  </span>
                ))}
              </div>
              </a>
            </InteractiveCard>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
