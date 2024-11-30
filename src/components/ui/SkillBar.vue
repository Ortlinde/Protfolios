<script setup lang="ts">
defineProps<{
  name: string
  level: number
}>()
</script>

<template>
  <div class="w-full">
    <div class="flex justify-between mb-1">
      <span class="text-sm font-medium text-gray-700">{{ name }}</span>
      <span class="text-sm text-gray-500">{{ level }}/5</span>
    </div>
    <div class="w-full bg-gray-200 rounded-full h-2">
      <div
        class="bg-indigo-600 h-2 rounded-full transition-all duration-300"
        :style="{ width: `${(level / 5) * 100}%` }"
      />
    </div>
  </div>
</template>