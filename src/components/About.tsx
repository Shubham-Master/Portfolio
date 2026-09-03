import { Icon } from "@iconify/react";
import type { Me, Contact, Experience } from "@/types";
import SectionHeader from "./SectionHeader";

interface AboutProps {
  me: Me;
  contacts: Contact[];
  experience: Experience[];
}

function getYearsOfExperience(experience: Experience[]): string {
  const startYears = experience
    .filter((e) => !e.skip)
    .map((e) => {
      const match = e.start.match(/\b(19|20)\d{2}\b/);
      return match ? Number.parseInt(match[0], 10) : Number.NaN;
    })
    .filter((year) => Number.isFinite(year));

  if (startYears.length === 0) {
    return "7+";
  }

  const earliest = Math.min(...startYears);
  const years = new Date().getFullYear() - earliest;
  return `${years}+`;
}

export default function About({ me, contacts, experience }: AboutProps) {
  const STATS = [
    { value: getYearsOfExperience(experience), label: "Years Experience" },
    { value: "40%", label: "Fewer Production Outages" },
    { value: "50%", label: "Faster Releases" },
    { value: "80+", label: "Hours Saved / Month" },
  ];
  return (
    <section id="about" className="section-base">
      <SectionHeader
        label="About"
        title="The engineer behind the platform work"
        description="Most of my work sits at the intersection of cloud infrastructure, automation, and reliability. I enjoy building systems that make delivery smoother and production less stressful."
      />

      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {STATS.map((stat) => (
          <div key={stat.label} className="surface-card p-4 text-center">
            <p className="font-headline font-bold text-2xl tracking-tighter text-primary">
              {stat.value}
            </p>
            <p className="font-label text-xs text-on-surface-variant mt-1">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bio card */}
        <div className="surface-card p-7">
          <h3 className="font-headline font-bold text-xl tracking-tighter text-on-surface mb-4">
            {me.about}
          </h3>
          <p className="font-body text-sm leading-[1.8] text-on-surface-variant whitespace-pre-line">
            {me.summaryLong ?? me.summary}
          </p>
        </div>

        {/* Contact info */}
        <div className="surface-card p-7">
          <h4 className="font-headline font-semibold text-sm tracking-tight text-on-surface mb-5">
            Contact Details
          </h4>
          <div className="flex flex-col gap-4">
            {contacts.map((contact) => (
              <div key={contact.title} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-9 h-9 rounded border border-outline flex items-center justify-center">
                  <Icon icon={contact.icon} width={16} className="text-primary" />
                </div>
                <div>
                  <p className="font-label text-xs text-on-surface-variant">
                    {contact.title}
                  </p>
                  {contact.href ? (
                    <a
                      href={contact.href}
                      className="font-body text-sm text-on-surface hover:text-primary transition-colors"
                    >
                      {contact.text}
                    </a>
                  ) : (
                    <p className="font-body text-sm text-on-surface">
                      {contact.text}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
