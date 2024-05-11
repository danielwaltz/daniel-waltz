// https://nuxt.com/docs/api/configuration/nuxt-config/
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@unocss/nuxt',
    'nuxt-build-cache',
    'nuxt-security',
  ],
  features: {
    noScripts: true,
  },
  future: {
    compatibilityVersion: 4,
  },
  experimental: {
    asyncContext: true,
  },
  css: ['@/assets/css/main.css'],
  postcss: {
    plugins: {
      '@csstools/postcss-oklab-function': { preserve: true },
    },
  },
  security: {
    hidePoweredBy: false,
    headers: {
      crossOriginEmbedderPolicy:
        process.env.NODE_ENV === 'development' ? 'unsafe-none' : 'require-corp',
    },
  },
});
