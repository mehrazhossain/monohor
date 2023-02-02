/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "lightning-yellow": {
          50: "#fefbf3",
          100: "#fdf7e6",
          200: "#faecc1",
          300: "#f7e19c",
          400: "#f0ca52",
          500: "#eab308",
          600: "#d3a107",
          700: "#b08606",
          800: "#8c6b05",
          900: "#735804",
        },
        "brilliant-rose": {
          50: "#fef6fa",
          100: "#fdedf5",
          200: "#fad1e6",
          300: "#f7b6d6",
          400: "#f27fb8",
          500: "#ec4899",
          600: "#d4418a",
          700: "#b13673",
          800: "#8e2b5c",
          900: "#74234b",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
