/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'dark-mode': {
          violet: '#AC80A0',
          black: '#151312',
          green: {
            DEFAULT: '#21A0A0',
            dark: '#046865'
          },
          orange: '#FFC700',
          gray: {
            dark: '#1c1a19',
            semiDark: '#343334',
            light: '#8f8f8f'
          }
        }
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};
