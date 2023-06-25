import { defineConfig, presetWind, presetIcons, presetWebFonts } from 'unocss';
import { theme } from 'unocss/preset-mini';

const { sans: defaultSans, serif: defaultSerif } = theme.fontFamily!;

// https://unocss.dev/config/
export default defineConfig({
  presets: [
    presetWind(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        ['vertical-align']: 'middle',
      },
    }),
    presetWebFonts({
      extendTheme: false,
      fonts: {
        sans: 'Open Sans:300,700',
        display: 'Big Shoulders Display:700',
        script: 'Caveat',
      },
    }),
  ],
  content: {
    filesystem: ['nuxt.config.*'],
  },
  theme: {
    colors: {
      primary: 'oklch(70% .4 222)', // #00afd8
      secondary: 'oklch(70% .4 185)', // #00b7a8
      background: '#121212', // oklch(18.22% 0 0)
      foreground: '#f1f1f1', // oklch(95.81% 0 0)
    },
    fontFamily: {
      sans: ['Open Sans', 'Arial', defaultSans].join(','),
      display: ['Big Shoulders Display', 'Impact', defaultSans].join(','),
      script: ['Caveat', 'Bradley Hand', defaultSerif].join(','),
    },
  },
  shortcuts: [
    {
      'h-viewport': 'min-h-full min-h-100vh min-h-100dvh',
      'bg-gradient-background-radial':
        'bg-background bg-gradient-radial bg-gradient-[circle_at_bottom_right,#181818_0%,#121212,#121212_100%]',
      'bg-viewport': 'bg-gradient-background-radial',
      'bg-gradient-primary':
        'bg-primary bg-gradient-to-r from-primary to-secondary',
      'text-gradient-primary':
        'bg-gradient-primary bg-clip-text text-transparent',
    },
  ],
});
