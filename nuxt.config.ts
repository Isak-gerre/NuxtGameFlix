// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  typescript: {
    typeCheck: true,
    strict: false,
  },
  runtimeConfig: {
    apiKey: process.env.API_KEY,
    public: {
      apiKey: process.env.API_KEY,
    },
  },
})