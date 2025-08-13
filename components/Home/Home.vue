<template>
  <div>
    <Intro />
    <Skills />
    <Timeline />
    <Projects />
  </div>
</template>

<script lang="ts" setup>
import Intro from './Intro.vue'
import Projects from './Projects.vue'
import Skills from './Skills.vue'
import Timeline from './Timeline.vue'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style></style>
