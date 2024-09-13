/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      screens: {
        xs: '370px',
      },
      fontFamily: {
        robotoCondensed: ['Roboto Condensed', 'sans-serif'],
        bebasNeue: ['Bebas Neue', 'sans-serif'],
        robotoFlex: ['Roboto Flex', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
