<template>
  <div
    class="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden cursor-pointer"
    @mouseenter="startAutomaticGeneration"
    @mouseleave="stopAutomaticGeneration">
    <div class="absolute inset-0 pointer-events-none">
      <div
        v-for="circle in randomCircles"
        :key="circle.id"
        class="absolute bg-gray-400 rounded-full opacity-8"
        :style="{
          width: circle.size + 'px',
          height: circle.size + 'px',
          top: circle.top + '%',
          left: circle.left + '%',
          transform: 'translate(-50%, -50%)'
        }"></div>
    </div>

    <div class="relative z-10">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">
        {{ title }}
      </h3>

      <div class="flex flex-column items-center space-x-8">
        <div
          :class="`w-16 h-16 bg-gradient-to-r ${gradient} rounded-xl flex items-center justify-center mb-6`">
          <svg
            class="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            v-html="icon"></svg>
        </div>

        <div class="space-y-2">
          <div
            v-for="skill in skills"
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
</template>

<script lang="ts" setup>
interface Skill {
  name: string
  level: 'green' | 'blue' | 'yellow'
  description?: string
}

interface Props {
  title: string
  icon: string
  gradient: string
  skills: Skill[]
}

interface Circle {
  id: number
  size: number
  top: number
  left: number
}

defineProps<Props>()

const randomCircles = ref<Circle[]>([])
let timeoutId: NodeJS.Timeout | null = null
let isGenerating = false

const getLevelColor = (level: string) => {
  const colors = {
    green: 'bg-green-500',
    blue: 'bg-blue-500',
    yellow: 'bg-yellow-500'
  }
  return colors[level as keyof typeof colors] || 'bg-gray-500'
}

const generateRandomCircles = (): void => {
  const numberOfCircles = Math.floor(Math.random() * 5) + 1
  randomCircles.value = []

  for (let i = 0; i < numberOfCircles; i++) {
    randomCircles.value.push({
      id: i,
      size: Math.floor(Math.random() * 60) + 20,
      top: Math.floor(Math.random() * 100),
      left: Math.floor(Math.random() * 100)
    })
  }
}

function startAutomaticGeneration() {
  if (isGenerating) return

  isGenerating = true
  generateRandomCircles()
  const generateContinuously = () => {
    if (isGenerating) {
      generateRandomCircles()
      timeoutId = setTimeout(generateContinuously, 500)
    }
  }

  timeoutId = setTimeout(generateContinuously, 500)
}

function stopAutomaticGeneration() {
  isGenerating = false

  if (timeoutId) {
    clearTimeout(timeoutId)
    timeoutId = null
  }
}

onMounted(() => {
  generateRandomCircles()
})
</script>
