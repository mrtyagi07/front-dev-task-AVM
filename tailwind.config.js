module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#5448C8",
      secondary: "#6DD0A5",
      gray: "#2D2D2D",
      shade: "#999999",
      card: "#f3f4f6",
    },
    fontFamily: {
      roto: ["Roto", "sans-serif"],
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
