// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: { port: 3030},
  modules: ['@nuxtjs/tailwindcss'],
  components: [
    { path: '~/components', pathPrefix: false}
  ],
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
