// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    "assets": "/<srcDir>/assets",
    "data": "/<srcDir>/data",
  },
  css: [
    'assets/main.css'
  ],
  routeRules: {
    "/**": { redirect: undefined }, // Prevent infinite redirects
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})
