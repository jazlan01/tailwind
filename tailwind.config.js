/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/*.html"],
  theme: {
    extend: {
      colors: {
        
      },
    },
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    "prettier-plugin-tailwindcss",
  ],
};
