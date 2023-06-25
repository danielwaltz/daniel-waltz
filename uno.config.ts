import { defineConfig, presetWind, presetIcons } from 'unocss';
import { theme } from '@unocss/preset-wind';

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
  ],
  content: {
    filesystem: ['nuxt.config.*'],
  },
  theme: {
    colors: {
      primary: 'oklch(70% .4 222)',
      secondary: 'oklch(70% .4 185)',
    },
    fontFamily: {
      sans: ['Roboto', 'Helvetica', theme.fontFamily!.sans],
      heading: ['Impact', theme.fontFamily!.sans],
      script: ['Bradley Hand', theme.fontFamily!.serif],
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
