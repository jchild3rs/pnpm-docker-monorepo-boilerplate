/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: [
    '../../packages/ui/**/*.tsx',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
