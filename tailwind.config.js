/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '1700px',
      // => @media (min-width: 1916px) { ... }
    },
    extend: {
      colors: {
        fontColor: '#B3B4B6',
        creamDark: '#C3C0B9',
        creamLight: '#F0EBE5',
        grayLight: '#8A8A8A',
      },
      
    },
  plugins: [],
  },
}