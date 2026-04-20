/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/lib/esm/**/*.js', "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",],
  theme: {
    fontFamily: {
      primary: 'Comfortaa, sans-serif',
      secondary: 'Montserrat, sans-serif',
      hmApple: 'Homemade Apple, cursive',
      garamond: "EB Garamond, serif",
      tangerine: "Tangerine, cursive",
      baskerville: "Baskervville SC, serif"
    },
    container: {
      padding: {
        DEFAULT: '10px',
        // lg: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
    },
    extend: {
      colors: {
        body: '#e5e5e5',
        dark: '#0a0909',
        grey: {
          DEFAULT: '#777876',
          100: '#e4e4e3',
        },
        accent: {
          DEFAULT: '#fe7634',
          hover: '#F55304',
        },
        myColor: {
          DEFAULT: '#9e1d20'
        },
      },
      backgroundImage: {
        hero: "none",
        wineList: "url(assets/img/pozadina_WineList.png)"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
});
