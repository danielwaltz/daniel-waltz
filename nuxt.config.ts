import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config/
export default defineNuxtConfig({
  modules: ['@unocss/nuxt'],
  typescript: {
    shim: false,
  },
  css: ['@unocss/reset/tailwind.css'],
});
