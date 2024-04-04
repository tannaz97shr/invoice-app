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
        "bg-main-menu": "#373B53",
        "text-pending": "#FF8F00",
        "bg-pending": "rgba(255, 143, 0, 0.2)",
        "text-paid": "#33D69F",
        "bg-paid": "rgba(51, 214, 159, 0.2)",
        "text-draft": "#373B53",
        "bg-draft": "rgba(55, 59, 83, 0.2)",
        "bg-backdrop": "rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
