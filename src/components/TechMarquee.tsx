interface TechMarqueeProps {
  items: string[];
}

export default function TechMarquee({ items }: TechMarqueeProps) {
  return (
    <section className="border-y border-outline-variant py-4">
      <div className="section-base flex flex-wrap items-center justify-center gap-3 py-0">
        {items.map((item) => (
          <div
            key={item}
            className="rounded border border-outline px-4 py-2 text-xs font-label uppercase tracking-widest text-on-surface-variant"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
