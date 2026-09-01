'use client'

import { motion } from 'motion/react'
import { toolkit } from '@/lib/portfolio-data'
import { TextReveal } from './reveal'

export function Toolkit() {
  return (
    <section id="skills" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-accent">
          Skills / Toolkit
        </p>
        <h2 className="font-display mb-16 text-[clamp(2.25rem,6vw,4.5rem)] font-extrabold leading-[0.95] tracking-[-0.03em]">
          <TextReveal text="My Toolkit" />
        </h2>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          {toolkit.map((group) => (
            <div
              key={group.category}
              className="border-t border-border pt-6"
            >
              <h3 className="mb-6 text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.04,
                      ease: [0.21, 0.47, 0.32, 0.98],
                    }}
                    whileHover={{ y: -4 }}
                    data-cursor="hover"
                    className="font-display cursor-default rounded-full border border-border bg-foreground/[0.03] px-5 py-2.5 text-base font-semibold tracking-tight text-foreground transition-colors hover:border-accent hover:text-accent md:text-lg"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
