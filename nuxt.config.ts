// https://nuxt.com/docs/api/configuration/nuxt-config/
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/seo",
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/image",
    "@unocss/nuxt",
    "@vueuse/nuxt",
    "reka-ui/nuxt",
  ],
  css: ["~/assets/css/main.css"],
  site: {
    name: "Daniel Waltz",
    jobTitle: "Web Developer",
    description:
      "Web developer with a passion for delivering the most usable, accessible, and beautiful interfaces imaginable!",
  },
  content: {
    experimental: {
      nativeSqlite: true,
    },
    build: {
      markdown: {
        highlight: {
          theme: "nord",
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      hostingProvider: import.meta.env.NUXT_PUBLIC_HOSTING_PROVIDER,
    },
  },
  routeRules: {
    "/articles": { isr: 3600 },
    "/articles/**": { isr: 3600 },
  },
  future: {
    compatibilityVersion: 4,
  },
  experimental: {
    asyncContext: true,
    typedPages: true,
    viewTransition: true,
  },
  compatibilityDate: "2025-04-18",
  nitro: {
    compressPublicAssets: true,
  },
  vite: {
    vue: {
      features: {
        optionsAPI: false,
      },
    },
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
