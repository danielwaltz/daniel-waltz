// https://nuxt.com/docs/api/configuration/nuxt-config/
export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/image",
    "@unocss/nuxt",
    "@vueuse/nuxt",
  ],
  css: ["~/assets/css/main.css"],
  content: {
    sources: {
      content: {
        driver: "github",
        repo: "danielwaltz/content",
      },
    },
    highlight: {
      theme: "nord",
    },
  },
  routeRules: {
    "/articles": { swr: 3600 },
    "/articles/**": { swr: 3600 },
  },
  future: {
    compatibilityVersion: 4,
  },
  experimental: {
    asyncContext: true,
    typedPages: true,
    viewTransition: true,
  },
  compatibilityDate: "2025-01-01",
  nitro: {
    compressPublicAssets: true,
  },
  postcss: {
    plugins: {
      "@csstools/postcss-oklab-function": { preserve: true },
    },
  },
  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },
});
