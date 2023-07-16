import {
  defineConfig,
  presetWind,
  presetIcons,
  presetWebFonts,
  transformerDirectives,
} from 'unocss';
import { theme } from 'unocss/preset-mini';
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders';

const { sans: defaultSans, serif: defaultSerif } = theme.fontFamily!;

// https://unocss.dev/config/
export default defineConfig({
  presets: [
    presetWind(),
    presetIcons({
      collections: {
        app: FileSystemIconLoader('assets/icons'),
      },
      extraProperties: {
        display: 'inline-block',
        ['vertical-align']: 'middle',
      },
    }),
    presetWebFonts({
      extendTheme: false,
      fonts: {
        sans: 'Noto Sans:300,700',
        display: 'Big Shoulders Display:700',
        script: 'Shadows Into Light',
      },
    }),
  ],
  transformers: [transformerDirectives()],
  content: {
    filesystem: ['nuxt.config.*'],
  },
  theme: {
    colors: {
      primary: 'oklch(70% .4 222)', // #00afd8
      secondary: 'oklch(70% .4 185)', // #00b7a8
      background: 'oklch(16.5% 0 0)', // #0e0e0e
      foreground: 'oklch(95.5% 0 0)', // #f0f0f0
    },
    fontFamily: {
      sans: ['Noto Sans', 'Arial', defaultSans].join(','),
      display: ['Big Shoulders Display', 'Impact', defaultSans].join(','),
      script: ['Shadows Into Light', 'Bradley Hand', defaultSerif].join(','),
    },
  },
  rules: [
    [
      /^scheme-(normal|light|dark|both)$/,
      ([, scheme]) => ({
        ['color-scheme']: scheme === 'both' ? 'light dark' : scheme,
      }),
    ],
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
      'h-viewport': 'min-h-full min-h-screen min-h-100dvh',
      'bg-gradient-background-radial':
        'bg-background bg-gradient-radial bg-gradient-[circle_at_bottom_right,#131313_0%,#0e0e0e,#0e0e0e_100%]',
      'bg-viewport': 'bg-gradient-background-radial',
      'bg-primary-gradient':
        'bg-primary bg-gradient-to-r from-primary to-secondary',
      'text-primary-gradient':
        'bg-primary-gradient bg-clip-text text-transparent',
      interactive:
        'cursor-pointer outline-2 outline-current outline-offset-2 transition-200 transition-property-[background-color,color,outline-width] focus:outline-dashed',
      'animate-fade':
        'animate-fade-in animate-duration-10s animate-ease-in-out animate-iteration-count-infinite',
      'shadow-box': 'absolute inset-0 animate-fade shadow-2xl',
    },
  ],
});
