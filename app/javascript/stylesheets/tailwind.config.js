module.exports = {
  mode: "jit",
  purge: [
    "./app/views/**/*.html.erb",
    "./app/helpers/**/*.rb",
    "./app/javascript/**/*.js",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      accent: "#FFB600",
    },
    height: {
      400: "400px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
