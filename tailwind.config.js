const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.html',
    './src/**/*.njk',
    './src/**/*.md',
    './src/**/*.11ty.js'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      customRed: '#BB2637',
      customBlue: '#010020',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      skyblue: colors.skyblue,
      sky: colors.sky,
      indigo: colors.indigo,
    },
    backgroundImage: {
      'hero-lg': "url('../img/bg_modified_resized.webp')",
      'hero-sm': "url('../img/bg_modified_resized_sm.webp')",
    },
    extend: {},
  },
  plugins: [],
} 