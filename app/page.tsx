import { About } from '@/components/portfolio/about'
import { Contact } from '@/components/portfolio/contact'
import { Cursor } from '@/components/portfolio/cursor'
import { Experience } from '@/components/portfolio/experience'
import { Footer } from '@/components/portfolio/footer'
import { Hero } from '@/components/portfolio/hero'
import { Nav } from '@/components/portfolio/nav'
import { SelectedWork } from '@/components/portfolio/selected-work'
import { Services } from '@/components/portfolio/services'
import { Toolkit } from '@/components/portfolio/toolkit'

export default function Page() {
  return (
    <>
      <Cursor />
      <Nav />
      <main id="top">
        <Hero />
        <SelectedWork />
        <About />
        <Services />
        <Experience />
        <Toolkit />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
