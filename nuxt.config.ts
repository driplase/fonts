// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    "data": "/<srcDir>/data",
  },
  css: [
    'assets/main.css'
  ],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})
