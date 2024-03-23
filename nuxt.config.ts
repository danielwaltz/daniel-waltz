// https://nuxt.com/docs/api/configuration/nuxt-config/
export default defineNuxtConfig({
  modules: ['@unocss/nuxt', 'nuxt-build-cache', 'nuxt-security'],
  features: {
    noScripts: true,
  },
  experimental: {
    asyncContext: true,
    headNext: true,
  },
  typescript: {
    shim: false,
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
