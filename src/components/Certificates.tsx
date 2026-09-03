import { Icon } from "@iconify/react";
import type { Certificate } from "@/types";
import SectionHeader from "./SectionHeader";

interface CertificatesProps {
  certificates: Certificate[];
}

export default function Certificates({ certificates }: CertificatesProps) {
  return (
    <section id="certificates" className="section-base">
      <SectionHeader
        label="Credentials"
        title="Certifications"
        description="Formal credentials that complement practical experience."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certificates.map((cert, idx) => {
          const isUpcoming = /^expected/i.test(cert.issuedAt);
          return (
            <a
              key={`${cert.title}-${idx}`}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="surface-card group flex flex-col gap-4 p-6 h-full"
            >
              {/* Issuer */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded border border-outline flex items-center justify-center flex-shrink-0 overflow-hidden p-1">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cert.issuerIcon}
                    alt={cert.issuer}
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="font-headline font-semibold text-xs tracking-tight text-primary">
                    {cert.issuer}
                  </p>
                  <p className="font-label text-xs text-on-surface-variant">
                    {cert.issuedAt}
                  </p>
                </div>
                <div className="ml-auto text-on-surface-variant group-hover:text-primary transition-colors">
                  <Icon icon="ion:open-outline" width={14} />
                </div>
              </div>

              {/* Title */}
              <p className="font-headline font-semibold text-sm tracking-tight text-on-surface leading-snug group-hover:text-primary transition-colors">
                {cert.title}
              </p>

              {/* Status badge */}
              <div className="mt-auto flex items-center gap-1.5 text-xs font-label text-on-surface-variant">
                <Icon icon={isUpcoming ? "ion:time-outline" : "ion:checkmark-circle-outline"} width={14} className="text-primary" />
                {isUpcoming ? "In Progress" : "Verified Certificate"}
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
