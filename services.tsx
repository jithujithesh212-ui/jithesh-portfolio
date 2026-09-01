'use client'

import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import { services } from '@/lib/portfolio-data'
import { Reveal, TextReveal } from './reveal'

export function Services() {
  const [active, setActive] = useState<number | null>(null)
  return (
    <section id="services" className="scroll-mt-20 border-t border-border py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="mb-16 flex items-end justify-between">
          <div><p className="mb-5 text-[.65rem] uppercase tracking-[.2em] text-muted-foreground">(03 — Expertise)</p>
          <h2 className="font-display text-[clamp(3.5rem,8vw,8rem)] font-black uppercase leading-[.8] tracking-[-.06em]"><TextReveal text="What I do" /></h2></div>
          <span className="hidden text-[.65rem] uppercase tracking-[.18em] text-muted-foreground md:block">01 — 06</span>
        </div>
        <div className="border-t border-border">
          {services.map((s,i)=><Reveal key={s.index} delay={i*.03}><div onMouseEnter={()=>setActive(i)} onMouseLeave={()=>setActive(null)} className="group border-b border-border py-7 md:py-9">
            <div className="flex items-center gap-5"><span className="w-8 text-xs text-muted-foreground">{s.index}</span>
              <h3 className={`font-display flex-1 text-[clamp(1.8rem,4vw,4rem)] font-semibold tracking-[-.035em] transition-transform duration-500 ${active===i?'translate-x-3':''}`}>{s.title}</h3>
              <ArrowUpRight className={`h-6 w-6 transition-all duration-500 ${active===i?'translate-x-0 opacity-100':'-translate-x-2 opacity-0'}`} />
            </div>
            <p className={`ml-13 mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground transition-all duration-500 md:ml-13 ${active===i?'opacity-100':'opacity-60'}`}>{s.description}</p>
          </div></Reveal>)}
        </div>
      </div>
    </section>
  )
}
