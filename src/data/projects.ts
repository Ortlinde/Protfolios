import type { Project } from '@/types'

export const projects: Project[] = [
  {
    title: '個人作品集網站',
    description: '使用 Vue 3 和 Tailwind CSS 開發的響應式個人作品集網站，展示我的專業技能和項目經驗。',
    image: 'https://picsum.photos/400/300',
    tags: ['Vue 3', 'TypeScript', 'Tailwind CSS'],
    link: 'https://github.com/yourusername/portfolio'
  },
  {
    title: '電商平台',
    description: '基於 React 開發的現代電商平台，整合支付系統和庫存管理。',
    image: 'https://picsum.photos/400/301',
    tags: ['React', 'Redux', 'Node.js', 'MongoDB'],
    link: 'https://github.com/yourusername/ecommerce'
  },
  {
    title: '任務管理系統',
    description: '團隊協作任務管理系統，支持即時更新和任務追蹤。',
    image: 'https://picsum.photos/400/302',
    tags: ['Vue.js', 'Express', 'Socket.io'],
    link: 'https://github.com/yourusername/task-manager'
  },
  {
    title: '社群媒體應用',
    description: '具有即時聊天和動態更新功能的社群媒體平台。',
    image: 'https://picsum.photos/400/303',
    tags: ['Vue 3', 'Firebase', 'Tailwind CSS'],
    link: 'https://github.com/yourusername/social-media'
  },
  {
    title: 'AI 圖像處理工具',
    description: '整合機器學習模型的圖像處理應用，支援多種濾鏡和特效。',
    image: 'https://picsum.photos/400/304',
    tags: ['Python', 'TensorFlow', 'React'],
    link: 'https://github.com/yourusername/ai-image-processor'
  }
]