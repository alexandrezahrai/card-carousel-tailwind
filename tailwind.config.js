/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark: "#060606",
        light: "#f3f7fb",
        primary: "#cc5c92",
        secondary: "#b9d0e9",
        accent: "#69a333",
      },
      screens: {
        lg: "992px",
        xl: "1358px",
      },
      container: {
        padding: {
          DEFAULT: "36px",
          md: "44px",
        },
      },
      boxShadow: {
        custom:
          "0 100px 140px -50px rgba(0,0,0,0.25), 0 0 20px 0 rgba(0,0,0,0.03)",
      },
    },
  },
  plugins: [],
};
