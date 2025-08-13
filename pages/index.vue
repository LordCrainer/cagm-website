<template>
  <div>
    <Home />
  </div>
</template>

<script lang="ts" setup>
import Home from '~/components/Home/Home.vue'
useHead({
  title: 'Carlos García | Web Developer',
  htmlAttrs: { lang: 'es' }, // Cambia a 'en' para inglés
  meta: [
    {
      name: 'description',
      content:
        'Portfolio profesional de Carlos García, desarrollador web especializado en Nuxt, Vue y tecnologías modernas.'
    },
    {
      name: 'keywords',
      content:
        'nuxt, vue, desarrollador, portfolio, web, frontend, backend, devops'
    },
    { property: 'og:locale', content: 'es_ES' }
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
})
</script>
