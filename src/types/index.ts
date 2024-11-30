export interface NavItem {
  name: string
  href: string
}

export interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  link?: string
}

export interface Contact {
  type: string
  value: string
  icon: string
  link?: string
}

export interface Skill {
  name: string
  level: number // 1-5
  category: 'frontend' | 'backend' | 'tools'
}