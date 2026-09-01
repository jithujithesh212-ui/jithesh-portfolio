import { ArrowUp } from 'lucide-react'
import { site } from '@/lib/portfolio-data'

export function Footer() {
  return (
    <footer className="border-t border-background/10 bg-foreground py-7 text-background">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-4 px-6 text-xs text-background/50 md:flex-row md:items-center md:justify-between md:px-10">
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <a href="#top" className="inline-flex items-center gap-2 self-start uppercase tracking-[.15em] hover:text-background md:self-auto">
          Back to top <ArrowUp className="h-3 w-3" />
        </a>
      </div>
    </footer>
  )
}
