import { Icon } from "@iconify/react";
import type { Service } from "@/types";
import SectionHeader from "./SectionHeader";
import { StaggerContainer, StaggerItem } from "./AnimateOnScroll";

interface ServicesProps {
  services: Service[];
}

const SERVICE_ICONS = [
  // Gradient backgrounds for service cards
  "from-primary/10 to-primary-container/10",
  "from-secondary/10 to-secondary-container/10",
  "from-tertiary/10 to-tertiary-container/10",
];

const SERVICE_ICON_COLORS = [
  "text-primary",
  "text-secondary",
  "text-tertiary",
];

export default function Services({ services }: ServicesProps) {
  return (
    <section id="services" className="section-base">
      <SectionHeader
        label="What I Do"
        title="Where I add the most value"
        description="This is the kind of work I usually take ownership of when a team wants faster delivery, better visibility, and systems that hold up in production."
      />

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <StaggerItem key={service.title}>
            <div className="group relative h-full overflow-hidden rounded-[24px] border border-white/7 bg-surface-container-low/90 p-7 inner-glow transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:bg-surface-container hover:shadow-[0_22px_48px_rgba(0,0,0,0.24)]">
              <div
                className={`absolute inset-0 rounded-[24px] bg-gradient-to-br ${SERVICE_ICONS[idx % SERVICE_ICONS.length]} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-70" />

              <div
                className={`relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/8 bg-surface-container ${SERVICE_ICON_COLORS[idx % SERVICE_ICON_COLORS.length]}`}
              >
                <Icon icon={service.icon} width={24} />
              </div>

              <div className="relative">
                <p className="mb-3 font-label text-[11px] uppercase tracking-[0.2em] text-on-surface-variant">
                  0{idx + 1}
                </p>
                <h3 className="font-headline font-bold text-lg tracking-tight text-on-surface mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
