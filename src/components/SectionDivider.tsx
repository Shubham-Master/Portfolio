export default function SectionDivider() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative h-10 overflow-hidden">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-outline-variant/35 to-transparent" />
        <div className="animate-divider-beam absolute left-0 top-1/2 h-px w-28 -translate-y-1/2 bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
        <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/70 shadow-[0_0_22px_rgba(224,137,61,0.4)]" />
      </div>
    </div>
  );
}
