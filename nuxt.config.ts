// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: ['@nuxt/eslint', '@nuxt/ui'],

  future: {
    compatibilityVersion: 4,
  },
  vite: {
    server: {
      fs: {
        strict: false,
      },
    },
  },
  css: ['@/assets/css/main.css'],
  runtimeConfig: {
    openaiApiKey: '',
  },
})
