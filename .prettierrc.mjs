/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ],
  tabWidth: 2,
  printWidth: 100,
  semi: true,
  singleQuote: true,
  trailingComma: 'none',
  arrowParens: 'avoid',
  bracketSpacing: true,
  bracketSameLine: true,
  endOfLine: 'auto'
};
