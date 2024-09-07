/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        "75vh": "75vh",
      },
      colors: {
        revolver: {
          50: "#f7f0fd",
          100: "#f0e3fc",
          200: "#e5ccf9",
          300: "#d7aef3",
          400: "#cd8dec",
          500: "#c571e3",
          600: "#be56d5",
          700: "#a847bb",
          800: "#883b98",
          900: "#6c3679",
          950: "#26132a",
        },
      },
    },
  },
  plugins: [],
};
