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
        sans: 'Noto Sans:300,700',
        display: 'Big Shoulders Display:700',
        script: 'Shadows Into Light',
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
      background: '#0e0e0e', // oklch(16.5% 0 0)
      foreground: '#f0f0f0', // oklch(95.5% 0 0)
    },
    fontFamily: {
      sans: ['Noto Sans', 'Arial', defaultSans].join(','),
      display: ['Big Shoulders Display', 'Impact', defaultSans].join(','),
      script: ['Shadows Into Light', 'Bradley Hand', defaultSerif].join(','),
    },
  },
  shortcuts: [
    {
      'h-viewport': 'min-h-full min-h-screen min-h-100dvh',
      'bg-gradient-background-radial':
        'bg-background bg-gradient-radial bg-gradient-[circle_at_bottom_right,#131313_0%,#0e0e0e,#0e0e0e_100%]',
      'bg-viewport': 'bg-gradient-background-radial',
      'bg-gradient-primary':
        'bg-primary bg-gradient-to-r from-primary to-secondary',
      'text-gradient-primary':
        'bg-gradient-primary bg-clip-text text-transparent',
      'animate-fade':
        'animate-fade-in animate-duration-10s animate-ease-in-out animate-iteration-count-infinite',
      'shadow-box': 'absolute inset-0 animate-fade shadow-2xl',
    },
  ],
});
