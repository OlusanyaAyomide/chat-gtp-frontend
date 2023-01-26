/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto Sans Symbols", "sans-serif"],
      },
    },
  },
  plugins: [],
};
