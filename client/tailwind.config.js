/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "playfair-display": ["'Playfair Display'", "serif"],
        "source-serif-pro": ["'Source Serif Pro'", "serif"],
        manrope: ["'Manrope'", "sans-serif"],
        poppins: ["'Poppins'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
