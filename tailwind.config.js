/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'SF Pro Display',
          'system-ui',
          'Avenir',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      colors: {
        background: {
          DEFAULT: '#F8F8F8',
          dark: '#18181A',
        },
        foreground: {
          DEFAULT: '#18181A',
          dark: '#F8F8F8',
        },
        primary: {
          DEFAULT: '#007AFF',
          dark: '#0A84FF',
        },
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
    },
  },
  plugins: [],
}

