/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'background':  '#03A688',
        'primary': '#045c4c',
        'primary-light': '#04D9B2'
      }
    },
  },
  plugins: [],
}

