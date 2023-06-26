import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config/
export default defineNuxtConfig({
  modules: ['@unocss/nuxt'],
  experimental: {
    noScripts: true,
  },
  devtools: {
    enabled: true,
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
