<script setup lang="ts">
import { contacts } from '@/data/contacts'
</script>

<template>
  <section id="contact" class="py-20 bg-white">
    <div class="max-w-3xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">聯絡方式</h2>
      <div class="space-y-6">
        <a
          v-for="contact in contacts"
          :key="contact.type"
          :href="contact.link"
          target="_blank"
          rel="noopener noreferrer"
          class="block hover:bg-gray-100 transition-colors rounded-lg"
        >
          <div class="flex items-center justify-center gap-4 p-4 bg-gray-50 rounded-lg">
            <span class="text-2xl">{{ contact.icon }}</span>
            <div>
              <h3 class="font-medium text-gray-900">{{ contact.type }}</h3>
              <p class="text-gray-600">{{ contact.value }}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>