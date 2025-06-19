<template>
  <section id="experiencia" class="py-16 px-6 bg-gray-50">
    <div class="max-w-8xl mx-auto">
      <h2 class="text-4xl font-bold text-center text-gray-800 mb-12">
        Experiencia
        <span class="text-blue-600">Profesional</span>
      </h2>

      <div class="relative">
        <div class="absolute left-1/2 md:left-1/2 left-4 transform md:-translate-x-1/2 w-1 bg-blue-200 h-full timeline-line"></div>

        <div class="space-y-12">
          <div 
            v-for="(experience, index) in experiences" 
            :key="index"
            class="relative flex items-center timeline-item">
            
            <div class="absolute left-1/2 md:left-1/2 left-4 transform md:-translate-x-1/2 -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10 timeline-dot"></div>
            
            <div :class="[
              'w-full md:w-1/2',
              index % 2 === 0 ? 'md:pr-8 pl-12 md:pl-0' : 'md:ml-auto md:pl-8 pl-12'
            ]">
              <TimelineCard
                :company="experience.company"
                :position="experience.position"
                :location="experience.location"
                :work-mode="experience.workMode"
                :period="experience.period"
                :description="experience.description"
                :achievements="experience.achievements"
                :projects="experience.projects"
                :technologies="experience.technologies"
                :card-position="index % 2 === 0 ? 'right' : 'left'" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import TimelineCard from '~/components/ui/TimelineCard.vue'

interface Project {
  name: string
  period: string
  description: string
}

interface Experience {
  company: string
  position: string
  location: string
  workMode: 'Remoto' | 'Presencial' | 'Híbrido'
  period: string
  description: string
  achievements: string[]
  projects: Project[]
  technologies: string[]
}

const experiences: Experience[] = [
  {
    company: 'Consultor Técnico Independiente',
    position: 'Desarrollador Senior por contrato',
    location: 'Guayaquil, Ecuador',
    workMode: 'Remoto',
    period: 'Diciembre 2023 – Enero 2025',
    description: 'Gestioné el mantenimiento y la optimización de 5 sistemas complejos para un proyecto internacional.',
    achievements: [
      'Contribuí al aumento del 24% en el MRR anual',
      'Obtuve un MRR del 50% en Q2 gracias al desarrollo de una nueva funcionalidad',
      'Ayudé al cierre de un cliente estratégico',
      'Aumenté la eficiencia del equipo del 40% al 84% en el cierre de tickets',
      'Desarrollé 3 nuevos workers utilizando GCF y Cloud Scheduler'
    ],
    projects: [],
    technologies: ['Node.js', 'Angular', 'Flutter', 'MongoDB', 'Big Query', 'WorkOS', 'GCP']
  },
  {
    company: 'Nextgen',
    position: 'Desarrollador FullStack y Líder Técnico',
    location: 'Guayaquil, Ecuador',
    workMode: 'Híbrido',
    period: 'Junio 2021 – Abril 2024',
    description: 'Lideré múltiples proyectos y equipos de desarrollo, implementando soluciones escalables y optimizando procesos.',
    achievements: [
      'Lideré un equipo de 5 desarrolladores y 1 QA',
      'Implementé mejoras que redujeron los tiempos de desarrollo en un 20%',
      'Mejoré la gestión del equipo en un 30%',
      'Optimicé código para manejar 1M+ registros/petición'
    ],
    projects: [
      {
        name: 'Senscloud',
        period: '2021 - 2024',
        description: 'Gestión del desarrollo de nuevas funcionalidades para los clientes'
      },
      {
        name: 'Xtrim',
        period: '2024',
        description: 'Optimización de comunicación y entrega de resultados'
      },
      {
        name: 'Nextsign',
        period: '2024',
        description: 'Resolución de errores críticos y desarrollo de nuevas características'
      },
      {
        name: 'NextTrace',
        period: '2023',
        description: 'Desarrollo e implementación de arquitectura serverless'
      }
    ],
    technologies: ['Node.js', 'Angular', 'React', 'MongoDB', 'PostgreSQL', 'Docker', 'AWS']
  },
  {
    company: 'Lanubetv S.A.',
    position: 'Consultor técnico por contrato',
    location: 'Guayaquil, Ecuador',
    workMode: 'Remoto',
    period: 'Enero 2021 – Presente',
    description: 'Dirigí el diseño, desarrollo e implementación de una nueva plataforma optimizada de gran calidad.',
    achievements: [
      'Automaticé el proceso de conversión reduciendo tiempos de 1h a 4 min (+93% eficiencia)',
      'Reduje costos de almacenamiento del 90% migrando a Space Storage (S3)',
      'Eliminé servidor Windows Server reduciendo costos en un 65%',
      'Disminuí costos adicionales en un 35% optimizando la infraestructura',
      'Implementé Screaming Architecture, testing y CI/CD'
    ],
    projects: [],
    technologies: ['Node.js', 'Ffmpeg/Ffmbc', 'Vue.js', 'Quasar', 'Docker', 'GitHub Actions', 'Vitest', 'MongoDB']
  }
]
</script>

<style scoped>
/* Estilos responsive para el timeline */
@media (max-width: 768px) {
  /* En móviles, la línea va al lado izquierdo */
  .timeline-line {
    left: 1rem;
  }
  
  /* Las cartas ocupan todo el ancho disponible */
  .timeline-item {
    padding-left: 3rem;
  }
  
  /* Los dots se mueven al lado izquierdo */
  .timeline-dot {
    left: 1rem;
  }
}
</style>