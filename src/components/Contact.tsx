import { Icon } from "@iconify/react";
import type { Contact, Me, Social } from "@/types";
import SectionHeader from "./SectionHeader";
import { UTMLink } from "./UTMLink";
import CTA from "./CTA";

interface ContactProps {
  contacts: Contact[];
  me: Me;
  socials: Social[];
}

export default function Contact({ contacts, me, socials }: ContactProps) {
  return (
    <section id="contact" className="section-base">
      <SectionHeader
        label="Get In Touch"
        title="If you'd like to work together"
        description="I'm always open to a good conversation around platform engineering, DevOps, cloud infrastructure, or interesting production problems."
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Contact info — 2 cols */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          {contacts.map((contact) => (
            <div key={contact.title} className="surface-card flex items-center gap-4 p-5">
              <div className="w-10 h-10 rounded border border-outline flex items-center justify-center flex-shrink-0">
                <Icon icon={contact.icon} width={18} className="text-primary" />
              </div>
              <div>
                <p className="font-label text-xs text-on-surface-variant">
                  {contact.title}
                </p>
                {contact.href ? (
                  <a
                    href={contact.href}
                    className="font-headline font-semibold text-sm tracking-tight text-on-surface hover:text-primary transition-colors"
                  >
                    {contact.text}
                  </a>
                ) : (
                  <p className="font-headline font-semibold text-sm tracking-tight text-on-surface">
                    {contact.text}
                  </p>
                )}
              </div>
            </div>
          ))}

          {/* Social links */}
          <div className="surface-card p-5">
            <p className="font-label text-xs text-on-surface-variant mb-3">
              Find me on
            </p>
            <div className="flex flex-wrap gap-2">
              {socials.map((social) => (
                <UTMLink
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="flex items-center gap-2 px-3 py-2 rounded border border-outline text-on-surface-variant hover:text-primary hover:border-primary/60 transition-colors duration-150 text-xs font-label"
                >
                  <Icon icon={social.icon} width={16} />
                  {social.name}
                </UTMLink>
              ))}
            </div>
          </div>
        </div>

        {/* CTA card — 3 cols */}
        <div className="lg:col-span-3">
          <div className="h-full rounded-lg border border-primary/30 bg-primary/[0.04] p-8 flex flex-col justify-between gap-8">
            <div>
              <h3 className="font-headline font-bold text-2xl tracking-tighter text-on-surface mb-3">
                Have something interesting in mind?
              </h3>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                {me.cta.message}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <CTA btn={`${me.cal}`} className="btn-primary justify-center">
                <Icon icon="ion:calendar-outline" width={16} />
                Book a call
              </CTA>
              <UTMLink href={me.personalWebsiteUrl} className="btn-ghost justify-center">
                <Icon icon="ion:document-outline" width={16} />
                Open CV
              </UTMLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
