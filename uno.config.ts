import { resolve } from 'pathe';
import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
} from 'unocss';
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders';

// https://unocss.dev/config/
export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      collections: {
        app: FileSystemIconLoader(resolve(__dirname, './app/assets/icons')),
      },
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetTypography(),
  ],
  transformers: [transformerDirectives()],
  theme: {
    colors: {
      primary: {
        50: 'oklch(0.95 0.4 222)',
        100: 'oklch(0.9 0.4 222)',
        200: 'oklch(0.8 0.4 222)',
        300: 'oklch(0.7 0.4 222)',
        400: 'oklch(0.6 0.4 222)',
        500: 'oklch(0.5 0.4 222)',
        600: 'oklch(0.4 0.4 222)',
        700: 'oklch(0.3 0.4 222)',
        800: 'oklch(0.2 0.4 222)',
        900: 'oklch(0.1 0.4 222)',
        950: 'oklch(0.05 0.4 222)',
        DEFAULT: 'oklch(0.7 0.4 222)',
      },
      secondary: {
        50: 'oklch(0.95 0.4 185)',
        100: 'oklch(0.9 0.4 185)',
        200: 'oklch(0.8 0.4 185)',
        300: 'oklch(0.7 0.4 185)',
        400: 'oklch(0.6 0.4 185)',
        500: 'oklch(0.5 0.4 185)',
        600: 'oklch(0.4 0.4 185)',
        700: 'oklch(0.3 0.4 185)',
        800: 'oklch(0.2 0.4 185)',
        900: 'oklch(0.1 0.4 185)',
        950: 'oklch(0.05 0.4 185)',
        DEFAULT: 'oklch(0.7 0.4 185)',
      },
      surface: {
        50: 'oklch(0.95 0 0)',
        100: 'oklch(0.9 0 0)',
        200: 'oklch(0.8 0 0)',
        300: 'oklch(0.7 0 0)',
        400: 'oklch(0.6 0 0)',
        500: 'oklch(0.5 0 0)',
        600: 'oklch(0.4 0 0)',
        700: 'oklch(0.3 0 0)',
        800: 'oklch(0.2 0 0)',
        900: 'oklch(0.1 0 0)',
        950: 'oklch(0.05 0 0)',
        DEFAULT: 'oklch(0.15 0 0)',
      },
    },
    fontFamily: {
      sans: 'Noto Sans, sans-serif',
      serif: 'Noto Serif, serif',
      display: 'Big Shoulders Display, sans-serif',
      script: 'Caveat, serif',
    },
  },
  rules: [
    [
      'clip-hexagon',
      {
        'clip-path':
          'polygon(50% 0, 92% 25%, 92% 75%, 50% 100%, 8% 75%, 8% 25%)',
      },
    ],
  ],
  shortcuts: [
    {
      'animate-fade':
        'animate-fade-in animate-duration-5s animate-ease-in-out animate-iteration-count-infinite',
      'bg-primary-gradient':
        'bg-primary bg-gradient-to-r from-primary to-secondary',
      'bg-secondary-gradient':
        'bg-secondary bg-gradient-to-r from-secondary to-primary',
      h1: 'text-primary-gradient text-6xl font-bold font-display uppercase 2xl:text-9xl sm:text-8xl',
      h2: 'text-4xl font-bold font-display uppercase 2xl:text-6xl sm:text-5xl',
      h3: 'text-3xl font-bold font-display uppercase 2xl:text-5xl sm:text-4xl',
      p: 'text-lg 2xl:text-3xl sm:text-2xl !leading-relaxed',
      interactive:
        'cursor-pointer outline-2 outline-current outline-offset-2 transition-200 transition-property-[background-color,color,outline-width] focus:outline-dashed',
      'min-h-viewport': 'min-h-full min-h-screen min-h-100dvh',
      'shadow-box':
        'absolute inset-0 animate-fade animate-backwards shadow-2xl',
      'text-primary-gradient':
        'bg-primary-gradient bg-clip-text text-transparent outline-primary',
      'text-secondary-gradient':
        'bg-secondary-gradient bg-clip-text text-transparent outline-secondary',
    },
  ],
});
