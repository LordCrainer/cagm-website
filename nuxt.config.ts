// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  app: {
    head: {
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
    }
  },

  css: ['~/assets/css/main.css'],

  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxtjs/tailwindcss',
    '@nuxt/ui',
    '@nuxtjs/i18n'
  ],
  i18n: {
    locales: [
      { code: 'en', name: 'English', iso: 'en-US', file: 'en-US.ts' },
      { code: 'es', name: 'Spanish', iso: 'es-ES', file: 'es-ES.ts' }
    ],
    defaultLocale: 'en',
    langDir: 'locales/',
    restructureDir: './',
    strategy: 'prefix_and_default'
  }
})
