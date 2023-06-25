import { defineConfig, presetWind, presetIcons, presetWebFonts } from 'unocss';

// https://unocss.dev/config/
export default defineConfig({
  presets: [
    presetWind({
      dark: 'media',
    }),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        verticalAlign: 'middle',
      },
    }),
    presetWebFonts({
      fonts: {
        sans: 'Open Sans:300,700',
        heading: 'Oswald:400',
        script: 'Neucha',
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
      'bg-gradient-primary': 'bg-gradient-to-r from-primary to-secondary',
      'text-gradient-primary':
        'bg-clip-text text-transparent bg-gradient-primary',
    },
  ],
});
