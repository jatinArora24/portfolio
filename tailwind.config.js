/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "text-md": "1px 1px 2px rgba(0, 0, 0, 0.5)", // Medium shadow
        "text-lg": "2px 2px 4px rgba(0, 0, 0, 0.5)", // Large shadow
        "text-xl": "3px 3px 6px rgba(0, 0, 0, 0.5)", // Extra large shadow
      },
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
        gold: {
          50: "#fdf6e3",
          100: "#fceeb5",
          200: "#f9d67e",
          300: "#f7b848",
          400: "#f5a020",
          500: "#e69700",
          600: "#b87e00",
          700: "#8d6400",
          800: "#6b4b00",
          900: "#4a3200",
          950: "#2e1e00",
        },
      },
    },
  },
  plugins: [],
};
