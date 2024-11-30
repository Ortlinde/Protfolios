<script setup lang="ts">
import { onMounted } from 'vue'
import { projects } from '@/data/projects'
import ProjectCard from './ui/ProjectCard.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const swiperModules = [Pagination, Navigation, Autoplay]
</script>

<template>
  <section id="projects" class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">作品集</h2>
      <div class="relative">
        <Swiper
          :modules="swiperModules"
          :slides-per-view="1"
          :space-between="30"
          :pagination="{ clickable: true }"
          :navigation="true"
          :autoplay="{ delay: 5000, disableOnInteraction: false }"
          :breakpoints="{
            '640': { slidesPerView: 2 },
            '1024': { slidesPerView: 3 }
          }"
          class="project-swiper"
        >
          <SwiperSlide v-for="project in projects" :key="project.title">
            <ProjectCard :project="project" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<style scoped>
.project-swiper {
  padding: 20px 40px;
}

:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  color: #4f46e5;
  background-color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

:deep(.swiper-button-prev)::after,
:deep(.swiper-button-next)::after {
  font-size: 20px;
}

:deep(.swiper-pagination-bullet) {
  background: #4f46e5;
}

:deep(.swiper-pagination-bullet-active) {
  background: #4f46e5;
}
</style>