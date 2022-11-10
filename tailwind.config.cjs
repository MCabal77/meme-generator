/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{jsx, js}'],
  theme: {
    extend: {
      colors: {
        leftGradient: '#672280',
        rightGradient: '#A626D3',
        inputBorder: '#D5D4D8',
      },
      fontFamily: {
        'karla': ['Karla', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
