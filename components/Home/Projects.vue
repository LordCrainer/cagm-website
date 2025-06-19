<template>
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Mis Proyectos</h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Una colección de proyectos en los que he trabajado, desde aplicaciones
          web completas hasta plataformas empresariales.
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project" />
      </div>

      <!-- Call to Action -->
      <div class="text-center mt-12">
        <p class="text-gray-600 mb-4">
          ¿Interesado en colaborar en un proyecto?
        </p>
        <a
          href="mailto:carlosgarcia.cagm@gmail.com"
          class="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200">
          <svg
            class="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
          Contáctame
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import ProjectCard from '~/components/ui/ProjectCard.vue'
const { projects } = useProjects()
</script>
