import { defineNuxtConfig } from 'nuxt'
import UnpluginComponentsVite from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'

export default defineNuxtConfig({
  runtimeConfig: {
    cmcApiKey: '',
    public: {
      cmcApiBase: ''
    }
  },
  app: {
    head: {
      title: 'Nuxt 3 Demo',
      titleTemplate: '%s - Nuxt 3 demo',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Nuxt 3 Demo',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
    },
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
