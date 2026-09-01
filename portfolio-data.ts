// ─────────────────────────────────────────────────────────────
// All portfolio content lives here. Edit this file to update the
// site — swap image paths in /public/images with your own assets.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'JITHESH',
  role: 'Visual Designer · Motion Graphics Artist',
  email: 'hello@jithesh.design',
  socials: [
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Behance', href: 'https://behance.net' },
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'Dribbble', href: 'https://dribbble.com' },
  ],
}

export const navLinks = [
  { label: 'Home', href: '#top' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

// Extra links surfaced in the mobile menu / footer navigation
export const secondaryLinks = [
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
]

// Small floating image thumbnails scattered around the hero headline.
// pos values are percentages relative to the hero container.
export const heroThumbs = [
  { image: '/images/work-marap.png', top: '8%', left: '26%', w: 96, r: -6 },
  { image: '/images/work-adriatic.png', top: '10%', left: '66%', w: 104, r: 5 },
  { image: '/images/work-shoeskoda.png', top: '44%', left: '10%', w: 118, r: -4 },
  { image: '/images/work-digital.png', top: '46%', left: '82%', w: 112, r: 6 },
  { image: '/images/work-dtdc.png', top: '80%', left: '24%', w: 100, r: 4 },
  { image: '/images/work-educafe.png', top: '82%', left: '68%', w: 108, r: -5 },
]

export type Project = {
  id: string
  index: string
  title: string
  category: string
  description: string
  image: string
  highlight?: string
  span: 'wide' | 'tall' | 'regular'
}

export const projects: Project[] = [
  {
    id: 'marap',
    index: '01',
    title: 'MaRap',
    category: 'Branding · Campaign · Motion',
    description:
      'Visual identity and campaign design for MaRap, creating a bold visual language across digital content and promotional campaigns.',
    image: '/images/work-marap.png',
    highlight: '5.9M+ views in 30 days',
    span: 'wide',
  },
  {
    id: 'educafe',
    index: '02',
    title: 'UAE Educafe',
    category: 'Campaign · Social Media · Visual Design',
    description:
      'A digital campaign system designed to create engaging educational content and a consistent visual identity.',
    image: '/images/work-educafe.png',
    span: 'regular',
  },
  {
    id: 'adriatic',
    index: '03',
    title: 'Adriatic Furniture',
    category: 'Branding · Brochure · Art Direction',
    description:
      'Premium furniture-focused visual communication combining editorial layouts, typography and product presentation.',
    image: '/images/work-adriatic.png',
    span: 'tall',
  },
  {
    id: 'dtdc',
    index: '04',
    title: 'DTDC',
    category: 'Campaign · Advertising · Graphic Design',
    description:
      'Creative campaign visuals developed for brand communication and digital advertising.',
    image: '/images/work-dtdc.png',
    span: 'regular',
  },
  {
    id: 'shoeskoda',
    index: '05',
    title: 'ShoeSkoda',
    category: 'Branding · Creative Direction · Visual Design',
    description:
      'A distinctive visual identity and campaign direction built around bold visual storytelling.',
    image: '/images/work-shoeskoda.png',
    span: 'regular',
  },
  {
    id: 'digital',
    index: '06',
    title: 'Digital Experiences',
    category: 'UI/UX · Web Design · Creative Development',
    description:
      'Modern digital interfaces and web experiences combining visual design, usability and motion.',
    image: '/images/work-digital.png',
    span: 'wide',
  },
]

export const marqueeItems = [
  'Visual Design',
  'Motion Design',
  'Branding',
  'UI/UX',
  'Creative Direction',
  'AI Creative',
]

export const stats = [
  { value: '4+', label: 'Years Experience' },
  { value: '50+', label: 'Creative Projects' },
  { value: '5.9M+', label: 'Campaign Views' },
]

export const services = [
  {
    index: '01',
    title: 'Visual Design',
    description:
      'Brand visuals, campaigns, social media, advertising and creative direction.',
  },
  {
    index: '02',
    title: 'Motion Graphics',
    description:
      'Motion identities, promotional videos, social animations and visual storytelling.',
  },
  {
    index: '03',
    title: 'Brand Identity',
    description:
      'Logo systems, visual identities, typography, color systems and brand applications.',
  },
  {
    index: '04',
    title: 'UI/UX Design',
    description:
      'Websites, landing pages, digital interfaces and user-focused experiences.',
  },
  {
    index: '05',
    title: 'AI Creative',
    description:
      'AI-assisted image generation, concept development, visual exploration and creative workflows.',
  },
  {
    index: '06',
    title: 'Creative Direction',
    description: 'Concept development, art direction and visual storytelling.',
  },
]

export const toolkit = [
  {
    category: 'Design',
    items: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'Framer'],
  },
  {
    category: 'Motion',
    items: ['After Effects', 'Premiere Pro', 'DaVinci Resolve'],
  },
  {
    category: 'AI / Creative Technology',
    items: [
      'Adobe Firefly',
      'Runway',
      'Krea',
      'Google Flow',
      'ImagineArt',
      'InVideo',
      'LTX',
    ],
  },
  {
    category: 'Skills',
    items: [
      'Branding',
      'Art Direction',
      'Motion Design',
      'Visual Design',
      'UI/UX',
      'Creative Campaigns',
      'Typography',
      'Image Editing',
    ],
  },
]

export type ExperienceItem = {
  role: string
  company: string
  period: string
  points: string[]
}

export const experience: ExperienceItem[] = [
  {
    role: 'Visual Designer & Motion Graphics Artist',
    company: 'Creative Studio', // replace with real company
    period: '2023 — Present',
    points: [
      'Brand identity',
      'Campaign design',
      'Motion graphics',
      'AI-assisted creative production',
    ],
  },
  {
    role: 'Visual Designer',
    company: 'Digital Agency', // replace with real company
    period: '2021 — 2023',
    points: ['Social media creatives', 'Art direction', 'Campaign design'],
  },
  {
    role: 'Graphic & Motion Designer',
    company: 'Design Collective', // replace with real company
    period: '2020 — 2021',
    points: ['Visual design', 'UI/UX', 'Motion graphics'],
  },
]

export const process = [
  {
    index: '01',
    title: 'Discover',
    description: 'Understand the problem, audience and objective.',
  },
  {
    index: '02',
    title: 'Explore',
    description: 'Research, references, concepts and visual directions.',
  },
  {
    index: '03',
    title: 'Create',
    description: 'Design, animate, refine and develop the final experience.',
  },
  {
    index: '04',
    title: 'Deliver',
    description: 'Polish every detail and deliver work ready for real-world use.',
  },
]

