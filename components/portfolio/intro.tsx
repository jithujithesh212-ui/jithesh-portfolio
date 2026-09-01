'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

const paragraphs = [
  'I work at the intersection of visual design, motion and art direction — partnering with brands to shape identities and campaigns that feel considered, confident and built to move.',
  'With 4+ years of experience across branding, social campaigns, UI/UX, motion graphics and AI-assisted creative workflows, I turn ideas into visuals that feel clear, memorable and emotionally engaging.',
]

export function Intro() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const opacity = useTransform(scrollYProgress, [0, 0.35, 0.75, 1], [0.25, 1, 1, 0.4])

  return (
    <section className="relative z-10 py-28 md:py-40">
      <div ref={ref} className="mx-auto max-w-4xl px-6 text-center">
        <motion.div style={{ opacity }} className="space-y-10">
          {paragraphs.map((p) => (
            <p
              key={p}
              className="text-pretty font-serif text-[clamp(1.5rem,3.6vw,2.75rem)] font-light leading-[1.25] tracking-[-0.01em] text-muted-foreground"
            >
              {p}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
