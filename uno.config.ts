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
      background: '#121212',
      foreground: '#f1f1f1',
    },
  },
  shortcuts: [
    {
      'h-viewport': 'min-h-full min-h-100dvh',
      'bg-gradient-background-radial':
        'bg-gradient-radial bg-gradient-[circle_at_bottom_right,#181818_0%,#121212,#121212_100%]',
      'bg-viewport': 'bg-background bg-gradient-background-radial',
      'bg-gradient-primary': 'bg-gradient-to-r from-primary to-secondary',
      'text-gradient-primary':
        'bg-gradient-primary bg-clip-text text-transparent',
    },
  ],
});
