/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        carouselWidth: "400px",
      },
      height: {
        carouselHeight: "500px",
      },
    },
  },
  plugins: [
    
  ],
};
