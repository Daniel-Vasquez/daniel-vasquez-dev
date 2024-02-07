/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          DEFAULT: "#b6babf", // golden
        },

        blue: {
          DEFAULT: "#111827", // hard blue
          light: "#374151", // soft blue
          medium: "#202a37", // medium blue
        },

        /* GREY */
        grey: {
          100: "#FCFDFD",
          200: "#E5E5E5",
          300: "#BFBFBF",
          400: "#999999",
          DEFAULT: "#4D4D4D", // 900
        },

        black: "#121112",
        white: "#FFFFFF",
        border: "#374151",
      },
    },
  },
  plugins: [],
}
