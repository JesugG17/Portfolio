/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'background':  '#212224',
        'primary': '#343639',
      }
    },
  },
  plugins: [],
}

