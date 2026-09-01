import { marqueeItems } from '@/lib/portfolio-data'

export function Marquee() {
  // duplicate the list so the -50% translate loops seamlessly
  const loop = [...marqueeItems, ...marqueeItems]

  return (
    <section
      aria-label="Disciplines"
      className="hover-pause border-y border-border py-8 md:py-10"
    >
      <div className="flex w-max animate-marquee items-center">
        {loop.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="font-display px-8 text-[clamp(1.5rem,4vw,3rem)] font-extrabold uppercase tracking-tight text-foreground/90">
              {item}
            </span>
            <span
              aria-hidden
              className="text-[clamp(1.5rem,4vw,3rem)] text-accent"
            >
              ·
            </span>
          </span>
        ))}
      </div>
    </section>
  )
}
