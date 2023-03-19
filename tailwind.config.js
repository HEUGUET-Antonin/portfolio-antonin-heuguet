/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

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
        manrope: ['Manrope']
      }
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const myUtilities = {
        ".bg-radial": { background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,252,252,0) 90%)" },
        ".sym-h": {
          transform: "scaleX(-1)",
        },
      };
      addUtilities(myUtilities);
    }),
  ],

}