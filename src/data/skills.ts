import type { Skill } from '@/types'

export const skills: Skill[] = [
  { name: 'Vue.js', level: 5, category: 'frontend' },
  { name: 'React', level: 4, category: 'frontend' },
  { name: 'TypeScript', level: 4, category: 'frontend' },
  { name: 'Node.js', level: 3, category: 'backend' },
  { name: 'Express', level: 3, category: 'backend' },
  { name: 'MongoDB', level: 3, category: 'backend' },
  { name: 'Git', level: 4, category: 'tools' },
  { name: 'Docker', level: 3, category: 'tools' }
]

export const skillCategories = {
  frontend: '前端開發',
  backend: '後端開發',
  tools: '開發工具'
}