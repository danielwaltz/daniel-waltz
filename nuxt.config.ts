// https://nuxt.com/docs/api/configuration/nuxt-config/
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@unocss/nuxt',
  ],
  css: ['~/assets/css/main.css'],
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
  routeRules: {
    '/': { prerender: true },
    '/articles': { swr: 3600 },
    '/articles/**': { swr: 3600 },
  },
  future: {
    compatibilityVersion: 4,
  },
  features: {
    noScripts: true,
  },
  experimental: {
    asyncContext: true,
    typedPages: true,
    viewTransition: true,
  },
  compatibilityDate: '2024-09-06',
  postcss: {
    plugins: {
      '@csstools/postcss-oklab-function': { preserve: true },
    },
  },
  eslint: {
    config: {
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },
});
