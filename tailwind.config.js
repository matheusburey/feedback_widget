module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          500: "#8257e6",
					400: "#996DFF",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require('tailwind-scrollbar'),
  ],
};
