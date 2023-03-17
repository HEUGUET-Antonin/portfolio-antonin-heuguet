/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        madeblack: ['MadeAltBlack'],
        madebold: ['MadeAltBold'],
        maderegular: ['MadeAltRegular'],
        madelight: ['MadeAltLight'],
        mademedium: ['MadeAltMedium'],
        madethin: ['MadeAltThin'],
        fantome: ['Fantome'],
        kenoky: ['Kenoky'],
      }
    },
  },
  plugins: [],
}