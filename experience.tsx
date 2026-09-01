import { experience } from '@/lib/portfolio-data'
import { Reveal, TextReveal } from './reveal'

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 border-t border-border py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4"><p className="mb-5 text-[.65rem] uppercase tracking-[.2em] text-muted-foreground">(04 — Career)</p><h2 className="font-display text-[clamp(3rem,7vw,7rem)] font-black uppercase leading-[.8] tracking-[-.06em]"><TextReveal text="Experience" /></h2></div>
          <div className="md:col-span-8">
            {experience.map((item,i)=><Reveal key={`${item.company}-${i}`} delay={i*.06}><article className="border-t border-border py-8 last:border-b">
              <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between"><h3 className="font-display text-xl font-semibold md:text-2xl">{item.role}</h3><span className="text-xs uppercase tracking-[.14em] text-muted-foreground">{item.period}</span></div>
              <p className="mt-1 text-sm">{item.company}</p>
              <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">{item.points.map(x=><li key={x} className="text-xs text-muted-foreground">— {x}</li>)}</ul>
            </article></Reveal>)}
          </div>
        </div>
      </div>
    </section>
  )
}
