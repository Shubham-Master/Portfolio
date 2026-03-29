import AnimateOnScroll from "./AnimateOnScroll";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <AnimateOnScroll className="mb-14">
      <p className="text-primary font-label text-xs font-semibold tracking-widest uppercase mb-3">
        {label}
      </p>
      <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tighter text-on-surface mb-4">
        {title}
      </h2>
      <div className="mb-5 flex items-center gap-3">
        <span className="h-px w-20 bg-gradient-to-r from-primary/80 to-primary/15" />
        <span className="h-1.5 w-1.5 rounded-full bg-primary/75 shadow-[0_0_16px_rgba(224,137,61,0.35)]" />
      </div>
      {description && (
        <p className="text-on-surface-variant font-body text-base leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </AnimateOnScroll>
  );
}
