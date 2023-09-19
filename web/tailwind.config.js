/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif']
      },
      colors: {
        'plaza': '#f81f9c',
        'cds-azul': '#0173d6',
        'cds-verdecaña': '#75a328'
      }
    },
  },
  plugins: [],
}

