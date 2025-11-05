<template>
  <div id="projects" class="text-white mt-2 px-0 p-2 mx-4">
    <h1 class="text-center mb-4 text-2xl font-bold">Projetos</h1>

    <ul
      class="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory 
      no-scrollbar"
      ref="carousel"
    >
      <li
        v-for="(project, index) in projects"
        :key="index"
        class="snap-start flex-shrink-0"
      >
        <ProjectCard :project="project" />
      </li>
    </ul>

    <div class="flex justify-center gap-4 mt-8">
      <button @click="prev" 
        class="fill-primary cursor-pointer"
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-10 h-10"
          viewBox="0 0 16 16"
        >
          <path
            d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 
               4.796a1 1 0 0 0 0 1.506z"
          />
        </svg>
      </button>

      <button @click="next" 
        class="fill-primary cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-10 h-10"
          viewBox="0 0 16 16"
        >
          <path
            d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 
               0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import projects from '../assets/projects.json'
import ProjectCard from './ProjectCard.vue'

const carousel = ref(null)

function next() {
  carousel.value?.scrollBy({ left: 320, behavior: 'smooth' })
}

function prev() {
  carousel.value?.scrollBy({ left: -320, behavior: 'smooth' })
}
</script>

<!-- util para esconder scrollbar no tailwind -->
<style>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
