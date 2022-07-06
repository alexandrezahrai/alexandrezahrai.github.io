/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      colors: {
        forest: '#2C6B4F',
        ivory: '#FFFFF9',
        ash: '#383838',
        volt: '#BAFF39',
        greyCustom: '#6E6E6E',
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      },
      variants: {
        animation: ["motion-safe"]
    }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
