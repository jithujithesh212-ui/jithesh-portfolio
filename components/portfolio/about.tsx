import Image from 'next/image'
import { stats } from '@/lib/portfolio-data'
import { Reveal, TextReveal } from './reveal'

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="mb-16 flex items-center justify-between text-[.65rem] uppercase tracking-[.2em] text-muted-foreground">
          <span>(02 — About)</span><span className="hidden md:block">Designer / Maker / Problem Solver</span>
        </div>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <Image src="/images/portrait.png" alt="Portrait of Jithesh" fill sizes="(max-width: 1024px) 90vw, 35vw" className="object-cover grayscale transition-all duration-700 hover:grayscale-0" />
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-8 lg:pt-2">
            <h2 className="font-display max-w-5xl text-[clamp(2.5rem,6vw,6.5rem)] font-black leading-[.88] tracking-[-.055em]">
              <TextReveal text="I turn rough ideas into clear, memorable visual experiences." />
            </h2>
            <div className="mt-10 max-w-2xl space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              <Reveal><p>I’m Jithesh, a Visual Designer and Motion Graphics Artist with 4+ years of experience across branding, campaigns, digital experiences and motion.</p></Reveal>
              <Reveal delay={.08}><p>I like the space between strategy and aesthetics — finding the idea, building the visual language and pushing it until every detail feels intentional.</p></Reveal>
              <Reveal delay={.16}><p>Based in Kerala, India. Available for freelance projects, collaborations and creative opportunities.</p></Reveal>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 border-t border-border pt-8 sm:grid-cols-4">
              {stats.slice(0,4).map((s,i)=><Reveal key={s.label} delay={i*.06}><div><p className="font-display text-4xl font-bold tracking-tight md:text-5xl">{s.value}</p><p className="mt-2 text-xs text-muted-foreground">{s.label}</p></div></Reveal>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
