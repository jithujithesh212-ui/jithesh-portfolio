'use client'

import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/lib/portfolio-data'
import { Reveal, TextReveal } from './reveal'

function ProjectItem({ project, i }: { project: (typeof projects)[number]; i: number }) {
  const wide = i === 0 || i === 5
  return (
    <Reveal className={wide ? 'md:col-span-2' : ''}>
      <a href={`#${project.id}`} data-cursor="hover" className="group block">
        <div className={`project-image relative overflow-hidden bg-muted ${wide ? 'aspect-[16/8]' : 'aspect-[4/5]'}`}>
          <Image src={project.image} alt={`${project.title} — ${project.category}`} fill
            sizes={wide ? '100vw' : '(max-width: 768px) 100vw, 50vw'}
            className="object-cover transition-transform duration-1000 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.035]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          {project.highlight && (
            <span className="absolute left-5 top-5 border border-white/30 bg-black/50 px-3 py-2 text-[.65rem] font-medium uppercase tracking-[.15em] text-white backdrop-blur-md">
              {project.highlight}
            </span>
          )}
          <span className="absolute bottom-5 right-5 flex h-12 w-12 translate-y-3 items-center justify-center rounded-full bg-white text-black opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </div>
        <div className="mt-5 flex flex-col gap-2 border-b border-border pb-6 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="mb-1 text-[.65rem] uppercase tracking-[.18em] text-muted-foreground">{project.index} / {project.category.split('·')[0].trim()}</p>
            <h3 className="font-display text-2xl font-bold tracking-[-.02em] md:text-3xl">{project.title}</h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">{project.description}</p>
          </div>
          <span className="mt-1 text-sm text-muted-foreground md:text-right">View project ↗</span>
        </div>
      </a>
    </Reveal>
  )
}

export function SelectedWork() {
  return (
    <section id="work" className="scroll-mt-20 py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="mb-16 flex flex-col gap-6 border-b border-border pb-7 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-[clamp(3.5rem,9vw,9rem)] font-black uppercase leading-[.8] tracking-[-.06em]"><TextReveal text="Selected work" /></h2>
          <div className="flex gap-4 text-[.65rem] uppercase tracking-[.18em] text-muted-foreground md:pb-2">
            <span>Branding</span><span>Motion</span><span>Digital</span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-20 md:grid-cols-2 md:gap-y-28">
          {projects.map((p, i) => <ProjectItem key={p.id} project={p} i={i} />)}
        </div>
      </div>
    </section>
  )
}
