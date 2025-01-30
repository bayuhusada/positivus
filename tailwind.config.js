/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      dark: '#191A23',
      green: '#B9FF66',
      white: '#ffffff',
      grey: '#F3F3F3',
    },
    fontFamily: {
      sans: ['Space Grotesk', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}