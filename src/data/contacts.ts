import type { Contact } from '@/types'

export const contacts: Contact[] = [
  {
    type: 'Email',
    value: 'your.email@example.com',
    icon: '📧',
    link: 'mailto:your.email@example.com'
  },
  {
    type: 'GitHub',
    value: 'github.com/yourusername',
    icon: '💻',
    link: 'https://github.com/yourusername'
  },
  {
    type: 'LinkedIn',
    value: 'linkedin.com/in/yourusername',
    icon: '👔',
    link: 'https://linkedin.com/in/yourusername'
  }
]