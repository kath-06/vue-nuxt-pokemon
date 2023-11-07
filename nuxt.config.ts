// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Vue-Nuxt Pokemon',
      meta: [
        { name: 'description', content: 'Vue 3, Nuxt 3 and Tailwind' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
      ]
    }
  },
  runtimeConfig: {
    apiUrl: process.env.API_URL
  }
})
