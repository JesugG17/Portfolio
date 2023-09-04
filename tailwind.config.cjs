/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        "background": "#f3f4f5",
        "background-skills": "#273036"
      },
      backgroundImage: {
        hero: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,0,0.7204131652661064) 100%), url(/img/hero2.jpg)',
      },
    },
  },
  plugins: [],
};
