interface TechMarqueeProps {
  items: string[];
}

export default function TechMarquee({ items }: TechMarqueeProps) {
  const looped = [...items, ...items];

  return (
    <section className="overflow-hidden border-y border-white/6 bg-black/10 py-4">
      <div className="marquee-track flex min-w-max items-center gap-3">
        {looped.map((item, idx) => (
          <div
            key={`${item}-${idx}`}
            className="rounded-full border border-white/8 bg-white/[0.04] px-4 py-2 text-xs font-label uppercase tracking-[0.18em] text-on-surface-variant"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
