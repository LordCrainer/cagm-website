<template>
  <section id="habilidades" class="py-16 px-6 bg-white/50">
    <div class="max-w-8xl mx-auto">
      <h2 class="text-4xl font-bold text-center text-gray-800 mb-12">
        {{ t('home.skillsTitle') }}
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

import { useI18n } from 'vue-i18n'
const { t, tm } = useI18n()

type SkillCategory = TranslationKeys['profile']['skills']['categories'][number]

const skillCategories = computed(() =>
  tm('profile.skills.categories') as SkillCategory[]
)
</script>

<style></style>
