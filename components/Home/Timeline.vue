<template>
  <section id="experiencia" class="py-16 px-6 bg-gray-50">
    <div class="max-w-8xl mx-auto">
      <h2 class="text-4xl font-bold text-center text-gray-800 mb-12">
        {{ t('home.timelineTitle') }}
      </h2>

      <div class="relative">
        <div
          class="absolute left-1/2 md:left-1/2 left-4 transform md:-translate-x-1/2 w-1 bg-blue-200 h-full timeline-line"></div>

        <div class="space-y-12">
          <div
            v-for="(experience, index) in experiences"
            :key="index"
            class="relative flex items-center timeline-item">
            <div
              class="absolute left-1/2 md:left-1/2 left-4 transform md:-translate-x-1/2 -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10 timeline-dot"></div>

            <div
              :class="[
                'w-full md:w-1/2',
                index % 2 === 0
                  ? 'md:pr-8 pl-12 md:pl-0'
                  : 'md:ml-auto md:pl-8 pl-12'
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
import { useI18n } from 'vue-i18n'
const { t, tm } = useI18n()
import TimelineCard from '~/components/ui/TimelineCard.vue'

type TimelineExperience = TranslationKeys['profile']['timeline']['experiences'][number]

const experiences = computed(() =>
  tm('profile.timeline.experiences') as TimelineExperience[]
)
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
