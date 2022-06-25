/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  presets: [require('tailwind-preset-base')],
  content: [
    '../../apps/**/*.tsx',
    '../../packages/ui/**/*.tsx',
    './src/**/*.mdx',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
