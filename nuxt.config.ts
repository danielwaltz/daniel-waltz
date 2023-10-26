// https://nuxt.com/docs/api/configuration/nuxt-config/
export default defineNuxtConfig({
  modules: ['@unocss/nuxt'],
  experimental: {
    appManifest: false, // https://github.com/unjs/nitro/issues/1844
    asyncContext: true,
    headNext: true,
    noScripts: true,
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
