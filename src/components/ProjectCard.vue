<template>
  <div
    class="group relative flex flex-col h-[400px] w-[400px] flex-shrink-0 snap-center rounded-2xl overflow-hidden"
  > 
    <!-- imagem :src="baseUrl + project.image"
    :src="project.image"-->
    <img
      :src="baseUrl + project.image"
      :alt="project.name"
      class="w-full h-full object-cover"
    />

    <!-- overlay de status -->
    <div
      v-if="project.status === 'not-started' || project.status === 'in-progress'"
      class="absolute inset-0 bg-[rgba(70,70,70,0.5)] flex items-center justify-center text-xl font-bold uppercase z-10 pointer-events-none"
    >
      <span class="text-[28px] font-semibold text-primary">
        {{ project.status === 'not-started' ? 'Não iniciado' : 'Em progresso' }}
      </span>
    </div>

    <!-- conteúdo -->
    <div class="absolute bottom-0 left-0 w-full p-4 transform 
      translate-y-0 md:translate-y-[70%] transition-transform duration-400 ease-in-out 
      md:group-hover:translate-y-0
      bg-[radial-gradient(circle_at_top_left,#4a0080,#1a0033)]">

      <h2 class="mb-2 text-lg font-semibold">{{ project.name }}</h2>

      <!-- tags -->
      <div class="flex flex-wrap gap-1">
        <TechnologiesTag
          v-for="tag in project.tags"
          :key="tag"
          :text="tag"
        />
      </div>

      <!-- tecnologias -->
      <ul
        v-if="project.technologies && project.technologies.length"
        class="flex flex-wrap gap-1 mt-3"
      >
        <li v-for="tec in project.technologies" :key="tec" class="list-none">
          <img :src="getIconUrl(tec)" :alt="tec" class="w-6 h-6" />
        </li>
      </ul>

      <!-- links -->
      <div class="flex w-full gap-2 mt-2">
        <a class="flex items-center gap-2 rounded-lg bg-primary py-3 px-6 
                  font-sans text-xs font-bold uppercase text-white shadow-md 
                  transition-all hover:shadow-primary/20 
                  focus:opacity-[0.85] focus:shadow-none 
                  active:opacity-[0.85] active:shadow-none disabled:pointer-events-none 
                  disabled:opacity-50 disabled:shadow-none w-fit"
        :blank="true"
        :href="project.github">GitHub</a>

        <a class="flex items-center gap-2 rounded-lg bg-primary py-3 px-6 
                  font-sans text-xs font-bold uppercase text-white shadow-md 
                  transition-all hover:shadow-primary/20 
                  focus:opacity-[0.85] focus:shadow-none 
                  active:opacity-[0.85] active:shadow-none disabled:pointer-events-none 
                  disabled:opacity-50 disabled:shadow-none w-fit"
        :blank="true"
        :href="project.deploy">Ver projeto</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, toRefs } from 'vue'
import TechnologiesTag from './TechnologiesTag.vue'

// ✅ no Vite é assim
const baseUrl = import.meta.env.BASE_URL


const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
})

const { project } = toRefs(props)

// ✅ substitui require.context pelo import.meta.glob
const icons = import.meta.glob('../assets/images/icons/techs/*', { eager: true })

function getIconUrl(name) {
  const file = Object.keys(icons).find((path) =>
    path.endsWith(`${name}.png`)
  )
  return file ? icons[file].default : ''
}
</script>
