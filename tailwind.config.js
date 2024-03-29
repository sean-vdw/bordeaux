/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/Hero.js",
    "./src/components/Hero_alt.js",
    "./src/components/About.js",
    "./src/components/Services.js",
    "./src/components/Services_alt.js",
    "./src/components/BlogSection.js",
    "./src/components/Cta.js",
    "./src/components/Footer.js",
    "./src/components/Contact.js",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 7s infinite linear',
        'bounce-slow': 'bounce 4s infinite',
        'wiggle': 'wiggle 16s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-180deg)' },
          '50%': { transform: 'rotate(180deg)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
