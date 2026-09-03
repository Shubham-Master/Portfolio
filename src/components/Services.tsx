import { Icon } from "@iconify/react";
import type { Service } from "@/types";
import SectionHeader from "./SectionHeader";

interface ServicesProps {
  services: Service[];
}

export default function Services({ services }: ServicesProps) {
  return (
    <section id="services" className="section-base">
      <SectionHeader
        label="What I Do"
        title="Where I add the most value"
        description="This is the kind of work I usually take ownership of when a team wants faster delivery, better visibility, and systems that hold up in production."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <div key={service.title} className="surface-card h-full p-7">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded border border-outline text-primary">
              <Icon icon={service.icon} width={24} />
            </div>

            <p className="mb-3 font-label text-[11px] uppercase tracking-wider text-on-surface-variant">
              0{idx + 1}
            </p>
            <h3 className="font-headline font-bold text-lg tracking-tight text-on-surface mb-3">
              {service.title}
            </h3>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
