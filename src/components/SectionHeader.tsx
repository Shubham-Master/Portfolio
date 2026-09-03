interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
}

export default function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-14">
      {label && (
        <p className="text-primary font-label text-xs font-medium tracking-widest uppercase mb-3">
          {label}
        </p>
      )}
      <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tighter text-on-surface mb-4">
        {title}
      </h2>
      <div className="mb-5 h-px w-16 bg-outline" />
      {description && (
        <p className="text-on-surface-variant font-body text-base leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
