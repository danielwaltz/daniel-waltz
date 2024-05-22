// https://nuxt.com/docs/api/configuration/nuxt-config/
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/fonts', '@unocss/nuxt'],
  features: {
    noScripts: true,
  },
  future: {
    compatibilityVersion: 4,
  },
  experimental: {
    asyncContext: true,
  },
  routeRules: {
    '/': {
      prerender: true,
    },
  },
  css: ['@/assets/css/main.css'],
  postcss: {
    plugins: {
      '@csstools/postcss-oklab-function': { preserve: true },
    },
  },
});
