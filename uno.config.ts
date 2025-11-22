import { FileSystemIconLoader } from "@iconify/utils/lib/loader/node-loaders";
import { resolve } from "pathe";
import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetWind4,
  transformerDirectives,
} from "unocss";
import type { Theme } from "unocss/preset-wind4";

// https://unocss.dev/config/
export default defineConfig({
  presets: [
    presetWind4(),
    presetIcons({
      collections: {
        app: FileSystemIconLoader(resolve("./app/assets/icons")),
      },
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
    presetTypography({
      colorScheme: {
        body: ["inherit", "inherit"],
        headings: ["inherit", "inherit"],
        lead: ["inherit", "inherit"],
        links: ["inherit", "inherit"],
        bold: ["inherit", "inherit"],
        counters: ["inherit", "inherit"],
        bullets: ["inherit", "inherit"],
        hr: ["inherit", "inherit"],
        quotes: ["inherit", "inherit"],
        "quote-borders": ["inherit", "inherit"],
        captions: ["inherit", "inherit"],
        kbd: ["inherit", "inherit"],
        "kbd-shadows": ["inherit", "inherit"],
        code: ["inherit", "inherit"],
        "pre-code": ["inherit", "inherit"],
        "pre-bg": ["inherit", "inherit"],
        "th-borders": ["inherit", "inherit"],
        "td-borders": ["inherit", "inherit"],
      },
    }),
  ],
  transformers: [transformerDirectives()],
  theme: {
    colors: {
      primary: {
        50: "oklch(0.95 0.4 222)",
        100: "oklch(0.9 0.4 222)",
        200: "oklch(0.8 0.4 222)",
        300: "oklch(0.7 0.4 222)",
        400: "oklch(0.6 0.4 222)",
        500: "oklch(0.5 0.4 222)",
        600: "oklch(0.4 0.4 222)",
        700: "oklch(0.3 0.4 222)",
        800: "oklch(0.2 0.4 222)",
        900: "oklch(0.1 0.4 222)",
        950: "oklch(0.05 0.4 222)",
        DEFAULT: "oklch(0.7 0.4 222)",
      },
      secondary: {
        50: "oklch(0.95 0.4 185)",
        100: "oklch(0.9 0.4 185)",
        200: "oklch(0.8 0.4 185)",
        300: "oklch(0.7 0.4 185)",
        400: "oklch(0.6 0.4 185)",
        500: "oklch(0.5 0.4 185)",
        600: "oklch(0.4 0.4 185)",
        700: "oklch(0.3 0.4 185)",
        800: "oklch(0.2 0.4 185)",
        900: "oklch(0.1 0.4 185)",
        950: "oklch(0.05 0.4 185)",
        DEFAULT: "oklch(0.7 0.4 185)",
      },
      neutral: {
        50: "oklch(0.95 0 0)",
        100: "oklch(0.9 0 0)",
        200: "oklch(0.8 0 0)",
        300: "oklch(0.7 0 0)",
        400: "oklch(0.6 0 0)",
        500: "oklch(0.5 0 0)",
        600: "oklch(0.4 0 0)",
        700: "oklch(0.3 0 0)",
        800: "oklch(0.2 0 0)",
        900: "oklch(0.1 0 0)",
        950: "oklch(0.05 0 0)",
        DEFAULT: "oklch(0.15 0 0)",
      },
    },
    font: {
      sans: "Noto Sans, sans-serif",
      serif: "Noto Serif, serif",
      display: "Antonio, sans-serif",
      script: "Caveat, serif",
      mono: "JetBrains Mono, monospace",
    },
    leading: {
      heading: "1.03",
    },
  } satisfies Theme,
  rules: [
    [
      "clip-hexagon",
      {
        "clip-path":
          "polygon(50% 0, 92% 25%, 92% 75%, 50% 100%, 8% 75%, 8% 25%)",
      },
    ],
  ],
  shortcuts: [
    {
      "app-prose":
        "prose prose-a:text-primary prose-blockquote:border-solid prose-blockquote:border-current prose-blockquote:border-is-3 prose-code:text-code prose-h1:max-w-fit prose-h1:text-h1! prose-h1:m-0! prose-h1:pbe-2 [&_h1>a,&_h2>a,&_h3>a,&_h4>a,&_h5>a,&_h6>a]:text-unset prose-pre:text-pre text-pretty text-p font-serif",
      "bg-primary-gradient":
        "bg-primary bg-linear-to-r from-primary to-secondary",
      "bg-secondary-gradient":
        "bg-secondary bg-linear-to-r from-secondary to-primary",
      interactive:
        "cursor-pointer outline-offset-2 transition-200 transition-property-[background-color,color,outline-width] focus:outline-2 focus:outline-dashed",
      "min-h-viewport": "min-h-full min-h-screen min-h-100dvh",
      "shadow-box": "absolute inset-0 animate-backwards shadow-2xl",
      "shadow-box-animate":
        "animate-fade-in animate-duration-5s animate-ease-in-out animate-iteration-count-infinite",
      "text-code":
        "inline-block ws-nowrap rounded-lg bg-neutral-100 p-inline-1 text-neutral font-mono before:hidden after:hidden",
      "text-h1":
        "text-primary-gradient text-6xl font-normal font-display uppercase 2xl:text-9xl md:text-8xl sm:text-7xl leading-heading!",
      "text-h2":
        "text-5xl font-normal font-display uppercase 2xl:text-8xl md:text-7xl sm:text-6xl leading-heading!",
      "text-h3":
        "text-4xl font-normal font-display uppercase 2xl:text-7xl md:text-6xl sm:text-5xl leading-heading!",
      "text-h4":
        "text-3xl font-normal font-display uppercase 2xl:text-6xl md:text-5xl sm:text-4xl leading-heading!",
      "text-h5":
        "text-2xl font-normal font-display uppercase 2xl:text-5xl md:text-4xl sm:text-3xl leading-heading!",
      "text-h6":
        "text-xl font-normal font-display uppercase 2xl:text-4xl md:text-3xl sm:text-2xl leading-heading!",
      "text-p": "text-lg 2xl:text-3xl md:text-2xl sm:text-xl leading-relaxed!",
      "text-pre": "font-mono",
      "text-primary-gradient":
        "bg-primary-gradient bg-clip-text text-transparent outline-primary",
      "text-secondary-gradient":
        "bg-secondary-gradient bg-clip-text text-transparent outline-secondary",
    },
  ],
});
