const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      border: ["first", "last"],
      screens: {
        xs: "475px",
        ...defaultTheme.screens,
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
}
