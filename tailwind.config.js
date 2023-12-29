/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        mustard: "#F4CE14",
        dgreen: "#495E57",
      },
      fontSize: {
        40: ["40px", "46px"],
        64: ["64px", "68px"],
      },
    },
    fontFamily: {
      display: ["Markazi Text"],
      body: ["Karla"],
    },
  },
  plugins: [],
};
