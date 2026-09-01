import { testimonials } from '@/lib/portfolio-data'
import { Reveal } from './reveal'

export function Testimonials() {
  return (
    <section aria-label="Testimonials" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <p className="mb-16 text-xs font-medium uppercase tracking-[0.25em] text-accent">
          Kind Words
        </p>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <figure className="flex h-full flex-col">
                <span
                  aria-hidden
                  className="font-display mb-4 text-6xl leading-none text-accent/40"
                >
                  &ldquo;
                </span>
                <blockquote className="font-display flex-1 text-pretty text-xl font-medium leading-snug tracking-tight text-foreground md:text-2xl">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8 border-t border-border pt-5">
                  <p className="text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {t.role}, {t.company}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
