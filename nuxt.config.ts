// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

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
    defaultLocale: 'es',
    langDir: 'locales/',
    restructureDir: './',
    strategy: 'prefix_and_default'
  }
})
