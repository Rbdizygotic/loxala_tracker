/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'mulish': ['Mulish', 'sans-serif'],
          'open-sans': ['Open Sans', 'sans-serif'],
        },
        screens: {
          xs: "446px", // custom screen size
        },
        width: {
          'xs': '446px', // custom width utility
        },
        height: {
          'xs': '755px', // custom height utility
          'screen-70': '70vh',     // example: 70% of viewport height
          'custom-300': '300px',   // custom fixed height
        },
      },
    },
    plugins: [],
  }
  