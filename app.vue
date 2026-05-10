<template>
  <div class="min-h-screen bg-gray-200 from-slate-50 to-blue-50">
    <Header />
    <div class="pt-16">
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

import Footer from './components/footer/Footer.vue'
import Header from './components/header/Header.vue'

const { locale, t } = useI18n()

const ogLocale = computed(() =>
  locale.value === 'es' ? 'es_ES' : 'en_US'
)

useHead(() => ({
  title: t('website.title'),
  htmlAttrs: { lang: locale.value },
  meta: [
    { name: 'description', content: t('website.description') },
    { name: 'keywords', content: t('website.keywords') },
    { property: 'og:locale', content: ogLocale.value }
  ],
  link: [
    {
      rel: 'alternate',
      hreflang: 'es',
      href: 'https://cagm-website.vercel.app/'
    },
    {
      rel: 'alternate',
      hreflang: 'en',
      href: 'https://cagm-website.vercel.app/en'
    }
  ]
}))
</script>
