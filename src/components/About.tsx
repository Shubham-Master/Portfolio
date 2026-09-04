import { Icon } from "@iconify/react";
import type { Me, Contact } from "@/types";
import SectionHeader from "./SectionHeader";

interface AboutProps {
  me: Me;
  contacts: Contact[];
}

export default function About({ me, contacts }: AboutProps) {
  return (
    <section id="about" className="section-base">
      <SectionHeader
        label="About"
        title="The engineer behind the platform work"
        description="Most of my work sits at the intersection of cloud infrastructure, automation, and reliability. I enjoy building systems that make delivery smoother and production less stressful."
      />

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
