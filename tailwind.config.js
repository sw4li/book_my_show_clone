/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bmsprimary:
        {
          50: '#efeffd',
          100: '#d0d3e4',
          200: '#b2b5cd',
          300: '#9397b8',
          400: '#757aa3',
          500: '#2B3149',
          600: '#464b6b',
          700: '#32354d',
          800: '#1d2030',
          900: '#070b16',
        },
        bmssecondary:
        {
          50: '#ffe3eb',
          100: '#ffb3c2',
          200: '#fb8399',
          300: '#f95370',
          400: '#f62448',
          500: '#dc0d2f',
          600: '#ac0624',
          700: '#7c031a',
          800: '#4c000e',
          900: '#1f0003',
        },
      }
    },
  },
  plugins: [],
}

