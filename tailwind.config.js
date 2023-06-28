/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        brand: {
          100: "#a5fff5",
          200: "#a2eeff",
          300: "#a2bbff"
        },
      },
    },
  },
  plugins: [],
};
