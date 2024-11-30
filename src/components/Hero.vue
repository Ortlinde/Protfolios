<script setup lang="ts">
const name = "您的名字"
const title = "前端工程師"
</script>

<template>
  <section id="home" class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
    <div class="text-center">
      <h1 class="text-5xl font-bold text-gray-900 mb-4">{{ name }}</h1>
      <p class="text-xl text-gray-600 mb-8">{{ title }}</p>
      <a href="#projects" class="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
        查看作品
      </a>
    </div>
  </section>
</template>