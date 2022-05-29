import { defineNuxtConfig } from 'nuxt'
import UnpluginComponentsVite from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'

export default defineNuxtConfig({
  runtimeConfig: {
    cmcApiKey: 'xxx',
    public: {
      cmcApiBase: 'https://pro-api.coinmarketcap.com/v1/'
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'unplugin-icons/nuxt',
    '@vueuse/nuxt'
  ],
  typescript: {
    typeCheck: true,
    strict: true
  },
  experimental: {
    reactivityTransform: true
  },

  vite: {
    plugins: [
      UnpluginComponentsVite({
        dts: true,
        resolvers: [
          IconsResolver({
            prefix: 'Icon',
          }),
        ],
      }),
    ],
  },
})
