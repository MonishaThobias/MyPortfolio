/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A",   // dark blue
        secondary: "#9333EA", // purple
        accent: "#F59E0B", 
        brand: {
      50:  "#f5faff",
      100: "#e0f2ff",
      200: "#bae6fd",
      500: "#0ea5e9",  // main brand color
      700: "#0369a1",
    },   // amber
    brand1:{
      50:""
    }
      },
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
        fancy: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}
