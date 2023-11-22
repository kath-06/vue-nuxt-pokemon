
import { updateAppConfig } from '#app'
import { defuFn } from 'C:/Users/user/Documents/vue-nuxt-pokemon/node_modules/defu/dist/defu.mjs'

const inlineConfig = {
  "nuxt": {
    "buildId": "da5e7e36-af94-4d2b-9a9f-7ecfa88b96cb"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}



export default /* #__PURE__ */ defuFn(inlineConfig)
