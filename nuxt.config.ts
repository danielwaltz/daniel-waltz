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
  css: ['@unocss/reset/tailwind.css'],
});
