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
  app: {
    head: {
      titleTemplate: "%s %separator %siteName",
      templateParams: {
        separator: "-",
      },
    },
  },
  css: ["~/assets/css/main.css"],
  site: {
    name: "Daniel Waltz",
    description:
      "Web developer with a passion for delivering the most usable, accessible, and beautiful interfaces imaginable!",
    jobTitle: "Web Developer",
    url: "https://danielwaltz.me",
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
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
    typescript: {
      strict: true,
      tsConfig: {
        compilerOptions: {
          erasableSyntaxOnly: true,
        },
      },
    },
  },
  vite: {
    vue: {
      features: {
        optionsAPI: false,
      },
    },
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        erasableSyntaxOnly: true,
      },
    },
    sharedTsConfig: {
      compilerOptions: {
        erasableSyntaxOnly: true,
      },
    },
    nodeTsConfig: {
      include: ["../*.config.*"],
      compilerOptions: {
        erasableSyntaxOnly: true,
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
    defaults: {
      subsets: ["latin"],
      weights: ["400 700"],
    },
    families: [
      {
        name: "Noto Sans",
        global: true,
      },
      {
        name: "Noto Serif",
        global: true,
      },
      {
        name: "Antonio",
        global: true,
      },
      {
        name: "Caveat",
        global: true,
      },
      {
        name: "JetBrains Mono",
        global: true,
      },
    ],
  },
  ogImage: {
    security: {
      restrictRuntimeImagesToOrigin: true,
    },
  },
  robots: {
    groups: [
      {
        userAgent: "*",
        allow: "/",
        contentUsage: {
          bots: "y",
          "train-ai": "n",
        },
        contentSignal: {
          "ai-train": "no",
          search: "yes",
        },
      },
    ],
  },
  unocss: {
    disableNuxtInlineStyle: false,
  },
});
