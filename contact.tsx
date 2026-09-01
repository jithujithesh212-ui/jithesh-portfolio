import { ArrowUpRight } from 'lucide-react'
import { site } from '@/lib/portfolio-data'
import { Reveal } from './reveal'

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-border bg-foreground py-28 text-background md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="mb-20 flex items-start justify-between text-[.65rem] uppercase tracking-[.2em] text-background/50"><span>(05 — Contact)</span><span>Let's make something memorable.</span></div>
        <h2 className="font-display max-w-6xl text-[clamp(4rem,11vw,11rem)] font-black uppercase leading-[.78] tracking-[-.065em]">Have an<br/><span className="text-background/45">idea?</span></h2>
        <div className="mt-16 flex flex-col gap-10 border-t border-background/20 pt-8 md:flex-row md:items-end md:justify-between">
          <div><p className="max-w-lg text-base leading-relaxed text-background/65 md:text-lg">For freelance projects, collaborations or creative opportunities, get in touch.</p>
          <a href={`mailto:${site.email}`} className="mt-7 inline-flex items-center gap-2 border-b border-background/40 pb-2 text-lg transition-opacity hover:opacity-60">{site.email}<ArrowUpRight className="h-4 w-4"/></a></div>
          <div className="flex flex-wrap gap-x-7 gap-y-3">{site.socials.map(s=><a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="text-sm text-background/65 hover:text-background">{s.label} ↗</a>)}</div>
        </div>
      </div>
    </section>
  )
}
