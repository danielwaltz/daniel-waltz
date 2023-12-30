// https://nuxt.com/docs/api/configuration/nuxt-config/
export default defineNuxtConfig({
  modules: ['@unocss/nuxt'],
  features: {
    // Remove when fixed https://github.com/unocss/unocss/issues/3468
    inlineStyles: false,
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
});
