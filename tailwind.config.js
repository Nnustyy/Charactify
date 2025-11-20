// // tailwind.config.js
const {heroui} = require("@heroui/theme");

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./node_modules/@heroui/theme/dist/components/navbar.js",
//   ],
//   theme: {
//     extend: {},
//   },
//   darkMode: "class",
//   plugins: [heroui()],
// };



/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@heroui/theme/dist/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [],
};
