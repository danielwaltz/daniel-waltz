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
    "motion-v/nuxt",
    "reka-ui/nuxt",
  ],
  app: {
    head: {
      titleTemplate: "%s %separator %siteName",
    },
  },
  css: ["~/assets/css/main.css"],
  site: {
    name: "Daniel Waltz",
    url: "https://danielwaltz.me",
    separator: "·",
    defaultLocale: "en-US",
    jobTitle: "Web Developer",
    repository: "https://github.com/danielwaltz/daniel-waltz",
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
    typescript: {
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
      strict: true,
      secret: "daniel-waltz",
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
  sitemap: {
    sources: ["/api/__sitemap__/urls"],
  },
  unocss: {
    disableNuxtInlineStyle: false,
  },
});
