/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('https://wallpaperset.com/w/full/f/6/c/211453.jpg')",
      },
      }
    },
  plugins: [],
}