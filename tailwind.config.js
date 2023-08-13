/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Mont: ['Montserrat', 'sans-serif']
      }
    },
    screens: {
      'sm': {'max': '540px'}
    }
  },
  plugins: [],
}