/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'blue': '#1D9BF0',
        'lightblue': 'rgba(29, 155, 240, 0.1)',
        'black': '#0f1419',
        'gray': '#536471'
      },
    },
    plugins: [],
  }
}