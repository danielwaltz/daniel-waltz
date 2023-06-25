import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config/
export default defineNuxtConfig({
  modules: ['@unocss/nuxt', '@vueuse/nuxt'],
  experimental: {
    noScripts: true,
  },
  typescript: {
    shim: false,
  },
  css: ['@unocss/reset/tailwind.css'],
});
