// https://nuxt.com/docs/api/configuration/nuxt-config/
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxt/eslint', '@nuxt/fonts', '@unocss/nuxt'],
  features: {
    noScripts: true,
  },
  future: {
    compatibilityVersion: 4,
  },
  experimental: {
    asyncContext: true,
    typedPages: true,
    viewTransition: true,
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
  content: {
    sources: {
      content: {
        driver: 'github',
        repo: 'danielwaltz/content',
      },
    },
    highlight: {
      theme: 'nord',
    },
  },
});
