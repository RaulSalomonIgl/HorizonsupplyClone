/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "light": "#FFFFFF",
        "light-contrast": "#FAFAFA",

        "title": "#EDEDED",
        "paragraph": "#A1A1A1",
        "dark": "#000000",
        "dark-contrast": "#0A0A0A",
        hover: "#1F1F1F",
        disabled: "#5B5B5B",
        "active": "#292929",
        success: "#4caf50",
      },
    },
  },
  darkMode: 'selector',
  plugins: [],
}

