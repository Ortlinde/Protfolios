<script setup lang="ts">
import { skills, skillCategories } from '@/data/skills'
import SkillBar from './ui/SkillBar.vue'
</script>

<template>
  <section id="about" class="py-20 bg-gray-50">
    <div class="max-w-3xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">關於我</h2>
      <div class="prose prose-lg mx-auto">
        <p class="text-gray-600 mb-8">
          我是一名充滿熱情的全端工程師，專注於創建優秀的使用者體驗和高效能的網頁應用程式。
          擁有多年的網頁開發經驗，善於使用現代化的前端技術架構，並具備後端開發能力。
        </p>
        
        <div v-for="(categoryName, category) in skillCategories" :key="category" class="mb-8">
          <h3 class="text-xl font-semibold mb-4">{{ categoryName }}</h3>
          <div class="space-y-4">
            <SkillBar
              v-for="skill in skills.filter(s => s.category === category)"
              :key="skill.name"
              :name="skill.name"
              :level="skill.level"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>