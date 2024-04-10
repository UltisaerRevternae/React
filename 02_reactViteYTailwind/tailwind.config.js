/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'strong-inset': 'inset 0 0 16px 10px #b4b4b4f2',
      }
    }
  },
  plugins: [
    ({ addUtilities }) => {
      const newUtilities = {
        '.scrollbar-custom': {
          'scrollbar-color': '#7c7c7c transparent',
        },
      }
      addUtilities(newUtilities);
    }
  ],
}
