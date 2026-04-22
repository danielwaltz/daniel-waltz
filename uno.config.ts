import { resolve } from "node:path";
import { FileSystemIconLoader } from "@iconify/utils/lib/loader/node-loaders";
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
        DEFAULT: "oklch(0 0 0)",
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
      "app-link":
        "tracking-wider font-mono font-semibold px-2 py-1 text-a inline-flex gap-0.5em uppercase items-center",
      "app-link-gradient":
        "text-primary-gradient [&>i]:text-primary [&>span+i]:text-secondary",
      "app-link-icon": "text-0.8em",
      "app-prose":
        "text-p font-serif text-pretty prose prose-a:text-primary prose-code:text-code [&_h1>a,&_h2>a,&_h3>a,&_h4>a,&_h5>a,&_h6>a]:text-unset prose-pre:text-pre prose-h1:pbe-2 prose-blockquote:border-is-3 prose-blockquote:border-current prose-blockquote:border-solid prose-h1:max-w-fit prose-h1:text-h1! prose-h1:m-0!",
      "bg-primary-gradient":
        "bg-primary from-primary to-secondary bg-linear-to-r",
      "bg-primary-gradient-reverse":
        "bg-secondary from-secondary to-primary bg-linear-to-r",
      interactive:
        "outline-offset-2 cursor-pointer transition-200 transition-property-[background-color,color,outline-width,transform] focus:outline-2 focus:outline-dashed active:scale-98",
      "min-h-viewport": "min-h-full min-h-screen min-h-100dvh",
      "shadow-box": "shadow-2xl inset-0 absolute",
      "shadow-box-animate":
        "animate-fade-in animate-duration-5s animate-ease-in-out animate-backwards animate-iteration-count-infinite",
      "text-a":
        "decoration-2 underline-offset-6 decoration-dashed hover:not-focus:underline",
      "text-code":
        "text-neutral font-mono px-1 rounded-lg bg-neutral-100 inline-block whitespace-nowrap after:hidden before:hidden",
      "text-h1":
        "text-6xl text-primary-gradient leading-heading font-display font-normal uppercase 2xl:text-9xl md:text-8xl sm:text-7xl",
      "text-h2":
        "text-5xl leading-heading font-display font-normal uppercase 2xl:text-8xl md:text-7xl sm:text-6xl",
      "text-h3":
        "text-4xl leading-heading font-display font-normal uppercase 2xl:text-7xl md:text-6xl sm:text-5xl",
      "text-h4":
        "text-3xl leading-heading font-display font-normal uppercase 2xl:text-6xl md:text-5xl sm:text-4xl",
      "text-h5":
        "text-2xl leading-heading font-display font-normal uppercase 2xl:text-5xl md:text-4xl sm:text-3xl",
      "text-h6":
        "text-xl leading-heading font-display font-normal uppercase 2xl:text-4xl md:text-3xl sm:text-2xl",
      "text-p":
        "text-lg leading-relaxed font-serif 2xl:text-3xl md:text-2xl sm:text-xl",
      "text-pre": "font-mono",
      "text-primary-gradient":
        "text-transparent outline-primary bg-primary-gradient decoration-primary bg-clip-text",
      "text-primary-gradient-reverse":
        "text-transparent outline-secondary bg-primary-gradient-reverse decoration-secondary bg-clip-text",
    },
  ],
});
