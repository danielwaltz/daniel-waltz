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
    description:
      "Web developer with a passion for delivering the most usable, accessible, and beautiful interfaces imaginable!",
    jobTitle: "Web Developer",
  },
  content: {
    experimental: {
      sqliteConnector: "native",
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
  future: {
    compatibilityVersion: 5,
  },
  experimental: {
    asyncContext: true,
    extractAsyncDataHandlers: true,
    typedPages: true,
    typescriptPlugin: true,
    viewTransition: true,
  },
  compatibilityDate: "latest",
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
      typescript: {
        tsconfigPath: "./tsconfig.json",
      },
    },
  },
  fonts: {
    families: [
      {
        name: "Noto Sans",
        weights: [400, 600, 700],
        subsets: ["latin"],
        global: true,
      },
      {
        name: "Noto Serif",
        weights: [400, 600, 700],
        subsets: ["latin"],
        global: true,
      },
      {
        name: "Antonio",
        weights: [400],
        subsets: ["latin"],
        global: true,
      },
      {
        name: "Caveat",
        weights: [400],
        subsets: ["latin"],
        global: true,
      },
      {
        name: "JetBrains Mono",
        weights: [400],
        subsets: ["latin"],
        global: true,
      },
    ],
  },
  ogImage: {
    zeroRuntime: true,
  },
  unocss: {
    disableNuxtInlineStyle: false,
  },
});
