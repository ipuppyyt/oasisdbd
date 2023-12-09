/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('https://wallpapers.com/images/hd/purple-gaming-nepi2tnxp6g0mvz9.jpg')"
      },
      colors: {
        'transparent': 'transparent',
      },
      fontFamily: {
        'nunito': ['NunitoSans', 'sans-serif'],
        'nunito-semibold': ['NunitoSans-SemiBold', 'sans-serif'],
        'nunito-bold': ['NunitoSans-Bold', 'sans-serif'],
      },
      }
    },
  plugins: [],
}