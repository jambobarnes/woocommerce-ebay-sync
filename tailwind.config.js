/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "sc-green": "#00A89D",
        "sc-hover": "#00211f",
        "sc-dark": "#00756d",
        "sc-grey": "#666666"
      }
    },
  },
  plugins: [],
}
