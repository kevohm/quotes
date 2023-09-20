/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { 
    extend: { 
      colors:{ 
      "black": "rgb(36, 36, 36)", 
      "black-light": "rgb(36, 36, 36, .8)",
      "black-lighter": "rgb(36, 36, 36, .15)",
      "white": "rgba(255, 255, 255, 1)",
      "white-light": "rgba(255, 255, 255, .8)",
      "secondary":"#0072f4",
      "primary":"#6200ff",
      },
      gridTemplateColumns: {
        'md': 'repeat(auto-fit, minmax(350px, 1fr))',
        'lg': 'repeat(auto-fit, minmax(500px, 1fr))',
        'sm': 'repeat(auto-fit, minmax(300px, 1fr))',
      }
    },
  },
  plugins: [],
}

