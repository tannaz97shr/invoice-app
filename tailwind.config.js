/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "blue-cornflower": "#7C5DFA",
        heliotrope: "#9277FF",
        pink: "#ff49db",
        mirage: "#1E2139",
        "ebony-clay": "#252945",
        selago: "#DFE3FA",
        "bali-hai": "#888EB0",
        "ship-cove": "#7E88C3",
        vulcan: "#0C0E16",
        "burnt-sienna": "#EC5757",
        "mona-lisa": "#FF9797",
        "bg-light": "#F8F8FB",
        "mirage-dark": "#141625",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
