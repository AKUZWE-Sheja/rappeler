/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#fea928",
        secondary: "#ed8900"
      },
      dropShadow: {
        custom: '1px 1px 1px rgba(0, 0, 0, 0.1)', 
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          sm: "3rem",
        }
      },
    },
  },
  plugins: [],
}

