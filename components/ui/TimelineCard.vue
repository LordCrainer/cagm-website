<template>
  <div 
    class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 max-w-xl"
    :class="cardPosition === 'left' ? 'ml-auto' : 'mx-auto'">
    
    <!-- Header de la carta -->
    <div class="mb-4">
      <h3 class="text-xl font-bold text-gray-800 mb-1">{{ company }}</h3>
      <h4 class="text-lg font-semibold text-blue-600 mb-2">{{ position }}</h4>
      <div class="flex items-center text-sm text-gray-500 mb-2">
        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M15 11a3 3 0 11-6 0 3 3 0 616 0z"></path>
        </svg>
        {{ location }}
        <span class="mx-2">•</span>
        <span :class="[
          'px-2 py-1 rounded-full text-xs font-medium',
          workMode === 'Remoto' ? 'bg-green-100 text-green-700' : 
          workMode === 'Presencial' ? 'bg-blue-100 text-blue-700' : 
          'bg-purple-100 text-purple-700'
        ]">
          {{ workMode }}
        </span>
      </div>
      <div class="flex items-center text-sm text-gray-500">
        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 8h6M3 21h18M5 21V9a2 2 0 012-2h10a2 2 0 012 2v12"></path>
        </svg>
        {{ period }}
      </div>
    </div>

    <p class="text-gray-600 mb-4 leading-relaxed">{{ description }}</p>

    <!-- Logros -->
    <div v-if="achievements.length" class="mb-4">
      <h5 class="font-semibold text-gray-800 mb-2">Logros principales:</h5>
      <ul class="space-y-2">
        <li 
          v-for="(achievement, index) in achievements" 
          :key="index"
          class="flex items-start space-x-2 text-sm text-gray-600">
          <div class="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
          <span>{{ achievement }}</span>
        </li>
      </ul>
    </div>

    <!-- Proyectos -->
    <div v-if="projects.length" class="mb-4">
      <h5 class="font-semibold text-gray-800 mb-2">Proyectos:</h5>
      <div class="space-y-3">
        <div 
          v-for="project in projects" 
          :key="project.name"
          class="bg-gray-50 rounded-lg p-3">
          <h6 class="font-medium text-gray-800 text-sm">{{ project.name }} ({{ project.period }})</h6>
          <p class="text-xs text-gray-600 mt-1">{{ project.description }}</p>
        </div>
      </div>
    </div>

    <!-- Tecnologías -->
    <div class="flex flex-wrap gap-1.5">
      <span 
        v-for="tech in technologies" 
        :key="tech"
        class="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
        {{ tech }}
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Project {
  name: string
  period: string
  description: string
}

interface Props {
  company: string
  position: string
  location: string
  workMode: 'Remoto' | 'Presencial' | 'Híbrido'
  period: string
  description: string
  achievements: string[]
  projects: Project[]
  technologies: string[]
  cardPosition?: 'left' | 'right'
}

withDefaults(defineProps<Props>(), {
  cardPosition: 'left'
})
</script>
