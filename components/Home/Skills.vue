<template>
  <section id="habilidades" class="py-16 px-6 bg-white/50">
    <div class="max-w-8xl mx-auto">
      <h2 class="text-4xl font-bold text-center text-gray-800 mb-12">
        Habilidades
        <span class="text-blue-600">Técnicas</span>
      </h2>

      <div class="flex flex-wrap gap-8 justify-center">
        <SkillCard
          v-for="category in skillCategories"
          :key="category.id"
          :title="category.title"
          :icon="category.icon"
          :gradient="category.gradient"
          :skills="category.skills"
          class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 min-w-sm" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import SkillCard from '~/components/ui/SkillCard.vue'

interface Skill {
  name: string
  level: 'green' | 'blue' | 'yellow'
  description?: string
}

interface SkillCategory {
  id: string
  title: string
  icon: string
  gradient: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    gradient: 'from-blue-500 to-blue-600',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>`,
    skills: [
      { name: 'Vue 3 & Composition API', level: 'green' },
      { name: 'Nuxt.js', level: 'green' },
      { name: 'JavaScript ES6+', level: 'green' },
      { name: 'Testing (Jest, Vitest)', level: 'blue' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend',
    gradient: 'from-orange-500 to-orange-600',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"></path>`,
    skills: [
      { name: 'Node.js', level: 'green' },
      { name: 'Express.js', level: 'green' },
      { name: 'MongoDB', level: 'green' },
      { name: 'MySQL', level: 'yellow', description: 'en práctica' }
    ]
  },
  {
    id: 'devops',
    title: 'DevOps & Arquitectura',
    gradient: 'from-purple-500 to-purple-600',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>`,
    skills: [
      { name: 'Docker', level: 'green' },
      { name: 'CI/CD', level: 'green' },
      { name: 'SOLID Principles', level: 'green' },
      { name: 'Design Patterns', level: 'blue' },
      { name: 'Queue Theory', level: 'blue' }
    ]
  }
]
</script>

<style></style>
