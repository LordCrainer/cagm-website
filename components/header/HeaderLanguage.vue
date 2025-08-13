<template>
  <button
    @click="switchLanguage"
    class="ml-4 px-3 py-1 rounded bg-blue-600 text-white">
    {{ locale === 'es' ? 'EN' : 'ES' }}
  </button>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { locale, setLocale } = useI18n()

function switchLanguage() {
  setLocale(locale.value === 'es' ? 'en' : 'es')
}
</script>
