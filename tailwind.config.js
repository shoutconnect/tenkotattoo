/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Quicksand", "sans-serif"],
        title: ["Quicksand", "sans-serif"],
        header: ["Eldwin", "sans-serif"],
      },
    },
  },
  plugins: [require("preline/plugin")],
};
