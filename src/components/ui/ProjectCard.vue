<script setup lang="ts">
import type { Project } from '@/types'

defineProps<{
  project: Project
}>()
</script>

<template>
  <article class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
    <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover">
    <div class="p-6">
      <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
      <p class="text-gray-600 mb-4">{{ project.description }}</p>
      <div class="flex flex-wrap gap-2 mb-4">
        <span v-for="tag in project.tags" :key="tag"
          class="px-3 py-1 bg-gray-100 text-sm text-gray-600 rounded-full">
          {{ tag }}
        </span>
      </div>
      <a v-if="project.link"
        :href="project.link"
        target="_blank"
        rel="noopener noreferrer"
        class="text-indigo-600 hover:text-indigo-800 transition-colors">
        查看專案 →
      </a>
    </div>
  </article>
</template>