import { process } from '@/lib/portfolio-data'
import { Reveal, TextReveal } from './reveal'

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-accent">
          Process
        </p>
        <h2 className="font-display mb-16 text-[clamp(2.25rem,6vw,4.5rem)] font-extrabold leading-[0.95] tracking-[-0.03em]">
          <TextReveal text="How I Work" />
        </h2>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {process.map((stage, i) => (
            <Reveal key={stage.index} delay={i * 0.1} className="h-full">
              <div className="group flex h-full flex-col justify-between gap-16 bg-background p-7 transition-colors hover:bg-foreground/[0.02] md:p-8">
                <span className="font-display text-sm font-semibold text-accent">
                  {stage.index}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold tracking-tight text-foreground transition-transform duration-500 group-hover:-translate-y-1 md:text-3xl">
                    {stage.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {stage.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
