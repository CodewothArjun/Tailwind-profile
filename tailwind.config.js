/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    screens: {
      xs: "343px",
      mobile: "640px",
      tablet: "776px",
      desktop: "1000px",
    },
  },
  plugins: [],
};
