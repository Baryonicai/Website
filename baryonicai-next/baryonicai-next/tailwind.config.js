/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        baryonic: {
          bg: "#0B0F1A",
          blue: "#3A86FF",
          teal: "#2EC4B6",
          paper: "#F7F8FC"
        }
      }
    },
  },
  plugins: [],
};
