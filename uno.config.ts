import { defineConfig, presetWind, presetIcons, presetWebFonts } from 'unocss';

// https://unocss.dev/config/
export default defineConfig({
  presets: [
    presetWind(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        verticalAlign: 'middle',
      },
    }),
    presetWebFonts({
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
      primary: 'oklch(70% .4 222)',
      secondary: 'oklch(70% .4 185)',
    },
  },
  shortcuts: [
    {
      'h-viewport': 'min-h-full min-h-100dvh',
      'bg-gradient-primary': 'bg-gradient-to-r from-primary to-secondary',
      'text-gradient-primary':
        'bg-gradient-primary bg-clip-text text-transparent',
    },
  ],
});
