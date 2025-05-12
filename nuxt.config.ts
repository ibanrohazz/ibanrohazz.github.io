// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/content", "nuxt-svgo", "@nuxt/image", "@nuxtjs/tailwindcss"],
  css: ["@/assets/css/main.css"],
  components: true,

  content: {
    // Minimal configuration for Nuxt Content
    highlight: {
      theme: 'github-dark',
    },
  },

  compatibilityDate: '2024-11-09',
})