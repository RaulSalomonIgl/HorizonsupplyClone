/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "title": "#EDEDED",
        "paragraph": "#A1A1A1",
        "dark": "#0A0A0A",
        "dark-contrast": "#1A1A1A",
        hover: "#1F1F1F",
        "active": "#292929",
      },
    },
    darkMode: 'class',
  },
  plugins: [],
}

