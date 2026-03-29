import type { Experience } from "@/types";
import SectionHeader from "./SectionHeader";
import { StaggerContainer, StaggerItem } from "./AnimateOnScroll";
import { UTMLink } from "./UTMLink";
import InteractiveCard from "./InteractiveCard";

interface ExperienceProps {
  experiences: Experience[];
}

export default function ExperienceSection({ experiences }: ExperienceProps) {
  const visible = experiences.filter((e) => !e.skip);

  return (
    <section id="experience" className="section-base">
      <SectionHeader
        label="Experience"
        title="Teams and systems I've worked on"
        description="From embedded environments to cloud platforms, most of my roles have been about improving reliability, automating the rough edges, and helping teams ship with more confidence."
      />

      <StaggerContainer className="flex flex-col gap-1 relative">
        {/* Timeline line */}
        <div className="absolute left-[23px] top-0 bottom-0 hidden w-px bg-gradient-to-b from-primary/60 via-outline-variant to-transparent sm:block" />

        {visible.map((exp, idx) => (
          <StaggerItem key={exp.title}>
            <div className="relative flex gap-6 group">
              {/* Timeline dot */}
              <div className="hidden sm:flex flex-col items-center z-10 mt-1">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-[#11151B] ring-1 shadow-[0_0_0_6px_rgba(19,19,19,0.85)] transition-all duration-300 ${idx === 0
                    ? "ring-primary/50"
                    : "ring-white/10 group-hover:ring-primary/25"
                    }`}
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
                </div>
              </div>

              {/* Card */}
              <InteractiveCard className="relative mb-4 flex-1 rounded-[26px] border border-white/7 bg-surface-container-low/90 p-6 inner-glow transition-all duration-300 hover:border-primary/20 hover:bg-surface-container hover:shadow-[0_24px_64px_rgba(0,0,0,0.22)]">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent opacity-60" />
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {/* Mobile logo */}
                      <div className="sm:hidden w-9 h-9 rounded-full overflow-hidden flex-shrink-0 bg-[#11151B] ring-1 ring-white/10">
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
                      <span key={badge} className="badge bg-surface-container text-primary/80">
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                <ul className="flex flex-col gap-2">
                  {exp.description.map((point, i) => (
                    <li key={i} className="flex gap-2.5 items-start">
                      <span className="mt-[7px] w-1 h-1 rounded-full bg-primary-container flex-shrink-0" />
                      <span className="font-body text-sm text-on-surface-variant leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </InteractiveCard>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
