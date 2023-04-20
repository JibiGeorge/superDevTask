/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': { 'max': '576px' },
      'md': { 'min': '576px', 'max': '768px' },
      'lg': { 'min': '992px', 'max': '1200px' },
      'xl': { 'min': '1200px', 'max': '1400px' },
      'lg': { 'min': '1400px' },
    },
    extend: {},
  },
  plugins: [],
}

