/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        background: '#f2f7fb', // Add your custom background color
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('flowbite/plugin')({
      charts: true,
    }),
    require('tailwind-scrollbar'),
  ],
};
