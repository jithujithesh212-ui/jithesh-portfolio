import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Archivo, Inter, Newsreader } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  weight: ['500', '600', '700', '800', '900'],
  display: 'swap',
})

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jithesh — Visual Designer & Motion Graphics Artist',
  description:
    'Jithesh is a Visual Designer & Motion Graphics Artist crafting identities, campaigns, digital experiences and motion that turn ideas into memorable visuals.',
  generator: 'v0.app',
  keywords: [
    'Visual Designer',
    'Motion Graphics',
    'Branding',
    'Creative Direction',
    'UI/UX',
    'Portfolio',
  ],
  openGraph: {
    title: 'Jithesh — Visual Designer & Motion Graphics Artist',
    description:
      'Identities, campaigns, digital experiences and motion that make brands stand out.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#3b5bff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`bg-background ${inter.variable} ${archivo.variable} ${newsreader.variable}`}
    >
      <body className="antialiased grain">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
