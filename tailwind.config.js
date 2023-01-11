/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/Header.js",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 12s infinite',
        'bounce-slow': 'bounce 4s infinite'
      }
    },
  },
  plugins: [],
}
