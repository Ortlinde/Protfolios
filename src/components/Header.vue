<script setup lang="ts">
import { navigationItems } from '@/data/navigation'
</script>

<template>
  <header class="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-sm z-50">
    <nav class="max-w-5xl mx-auto px-4 py-4">
      <ul class="flex items-center justify-end gap-8">
        <li v-for="item in navigationItems" :key="item.name">
          <a :href="item.href" class="text-gray-600 hover:text-gray-900 transition-colors">
            {{ item.name }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>