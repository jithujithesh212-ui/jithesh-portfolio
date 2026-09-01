'use client'

import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { navLinks, site } from '@/lib/portfolio-data'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll=()=>setScrolled(window.scrollY>40)
    onScroll(); window.addEventListener('scroll',onScroll,{passive:true})
    return()=>window.removeEventListener('scroll',onScroll)
  },[])
  useEffect(()=>{document.body.style.overflow=open?'hidden':'';return()=>{document.body.style.overflow=''}},[open])
  return <>
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled?'border-b border-border bg-background/85 backdrop-blur-xl':''}`}>
      <nav className="mx-auto hidden max-w-[1600px] grid-cols-4 items-center px-6 py-5 md:grid md:px-10">
        <a href="#top" className="font-display text-lg font-black tracking-[-.04em]">{site.name}.</a>
        <div className="col-span-2 flex justify-center gap-10">
          {navLinks.filter(x=>x.label!=='Home').map(link=><a key={link.href} href={link.href} className="text-[.7rem] uppercase tracking-[.18em] transition-opacity hover:opacity-50">({link.label})</a>)}
        </div>
        <a href="#contact" className="justify-self-end text-[.7rem] uppercase tracking-[.18em]">Available ↗</a>
      </nav>
      <nav className="flex items-center justify-between px-6 py-5 md:hidden">
        <a href="#top" className="font-display text-lg font-black">{site.name}.</a>
        <button type="button" aria-label={open?'Close menu':'Open menu'} onClick={()=>setOpen(v=>!v)} className="text-xs uppercase tracking-[.18em]">{open?'Close':'Menu'}</button>
      </nav>
    </header>
    <AnimatePresence>{open&&<motion.div className="fixed inset-0 z-40 flex flex-col justify-center bg-background px-6 md:hidden" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <ul>{navLinks.map((link,i)=><motion.li key={link.href} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:i*.06}}><a href={link.href} onClick={()=>setOpen(false)} className="font-display block border-b border-border py-5 text-5xl font-black uppercase tracking-[-.04em]">{link.label}</a></motion.li>)}</ul>
    </motion.div>}</AnimatePresence>
  </>
}
