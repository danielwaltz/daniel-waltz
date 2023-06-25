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
  theme: {
    colors: {
      primary: 'oklch(80% .4 222)',
      secondary: 'oklch(55% .5 313)',
    },
  },
  shortcuts: [
    {
      'bg-gradient-base': 'bg-gradient-to-r',
      'bg-primary-gradient': 'bg-gradient-base from-primary to-secondary',
      'text-gradient-base': 'bg-clip-text text-transparent',
      'text-primary-gradient': 'text-gradient-base bg-primary-gradient',
    },
  ],
});
