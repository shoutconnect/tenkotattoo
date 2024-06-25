/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Heebo", "sans-serif"],
        title: ["Quicksand", "sans-serif"],
        boldTitle: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
};
