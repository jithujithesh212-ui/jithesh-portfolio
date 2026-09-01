'use client'

import Image from 'next/image'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { heroThumbs, site } from '@/lib/portfolio-data'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 55, damping: 22 })
  const sy = useSpring(my, { stiffness: 55, damping: 22 })

  function handleMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  return (
    <section id="top" onMouseMove={handleMove} className="hero-editorial relative min-h-[100svh] overflow-hidden px-6 pt-28 md:px-10 md:pt-32">
      <div className="mx-auto flex min-h-[calc(100svh-7rem)] max-w-[1600px] flex-col justify-between">
        <div className="flex items-start justify-between gap-8 text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
          <p>(01 — Portfolio)</p>
          <p className="hidden md:block">Kerala, India · {new Date().getFullYear()}</p>
          <p className="text-right">Available<br className="md:hidden" /> for selected projects</p>
        </div>

        <div className="relative py-20 md:py-12">
          {heroThumbs.slice(0, 4).map((t, i) => {
            const x = useTransform(sx, [-0.5, 0.5], [(i + 1) * 8, -(i + 1) * 8])
            const y = useTransform(sy, [-0.5, 0.5], [(i + 1) * 7, -(i + 1) * 7])
            return (
              <motion.div key={t.image} style={{ top: t.top, left: t.left, width: t.w, rotate: t.r, x, y }}
                initial={{ opacity: 0, scale: .8 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: .8, ease, delay: .45 + i * .08 }}
                className="absolute z-0 hidden overflow-hidden border border-foreground/10 bg-muted shadow-xl md:block"
              >
                <div className="aspect-[4/5]">
                  <Image src={t.image} alt="" fill sizes="160px" className="object-cover" />
                </div>
              </motion.div>
            )
          })}

          <div className="relative z-10 max-w-[1300px]">
            <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7,ease}}
              className="mb-6 text-xs font-medium uppercase tracking-[.25em] text-muted-foreground">
              {site.role}
            </motion.p>
            <h1 className="font-display max-w-[1250px] text-[clamp(4rem,12.5vw,12rem)] font-black uppercase leading-[.78] tracking-[-.065em]">
              <motion.span initial={{y:'110%'}} animate={{y:0}} transition={{duration:1,ease,delay:.08}} className="block overflow-hidden">Jithesh</motion.span>
              <motion.span initial={{y:'110%'}} animate={{y:0}} transition={{duration:1,ease,delay:.18}} className="block overflow-hidden text-muted-foreground">makes</motion.span>
              <motion.span initial={{y:'110%'}} animate={{y:0}} transition={{duration:1,ease,delay:.28}} className="block overflow-hidden">things move.</motion.span>
            </h1>
          </div>
        </div>

        <div className="flex flex-col gap-8 border-t border-border py-7 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
            Visual design, motion, branding and digital experiences built to make ideas clearer, sharper and more memorable.
          </p>
          <div className="flex gap-3">
            <a href="#work" className="pill-button bg-foreground text-background">Explore work ↘</a>
            <a href="#contact" className="pill-button border border-border">Contact ↗</a>
          </div>
        </div>
      </div>
    </section>
  )
}
