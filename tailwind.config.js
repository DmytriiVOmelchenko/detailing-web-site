const { hover } = require('@testing-library/user-event/dist/hover');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins',
    },
    container: {
      padding: {
        DEFAULT: '1.5rem',
        lg: '3rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      body: '#fafaff',
      blue: {
        DEFAULT: '#196376',
        secondary: '#67698B',
        tertiary: '#c2e5dc',
        quaternary: '#d6f5f5',
        hover: '#196386',
      },
      white: '#fff',
      pink: 'pink',
      transparent: 'transparent',
    },
    extend: {
      backgroundImage: {
        triangle: "url('/src/assets/img/triangle.svg')",
      },
      boxShadow: {
        primary: '0px 4px 40px rgba(0, 0, 0, 0.03)',
      },
    },
  },
  plugins: [],
};
