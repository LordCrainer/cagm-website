<template>
  <section id="habilidades" class="py-16 px-6 bg-white/50">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold text-center text-gray-800 mb-12">
        Habilidades
        <span class="text-blue-600">Técnicas</span>
      </h2>

      <div class="grid md:grid-cols-3 gap-8">
        <!-- Skill Categories usando v-for -->
        <div
          v-for="category in skillCategories"
          :key="category.id"
          class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
          <div
            :class="`w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-xl flex items-center justify-center mb-6`">
            <svg
              class="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              v-html="category.icon"></svg>
          </div>

          <h3 class="text-xl font-semibold text-gray-800 mb-4">
            {{ category.title }}
          </h3>

          <!-- Skills -->
          <div class="space-y-3">
            <div
              v-for="skill in category.skills"
              :key="skill.name"
              class="flex items-center space-x-3">
              <div
                :class="`w-2 h-2 ${getLevelColor(skill.level)} rounded-full`"></div>
              <span class="text-gray-600">
                {{ skill.name }}
                <span v-if="skill.description" class="text-gray-500">
                  ({{ skill.description }})
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
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

const getLevelColor = (level: string) => {
  const colors = {
    green: 'bg-green-500',
    blue: 'bg-blue-500',
    yellow: 'bg-yellow-500'
  }
  return colors[level as keyof typeof colors] || 'bg-gray-500'
}
</script>

<style></style>
