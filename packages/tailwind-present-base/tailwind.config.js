/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  theme: {
    extend: {
      foo: 'green'
    }
  },
  plugins: [require('prettier-plugin-tailwindcss')]
}
