/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'white/12': 'rgba(255, 255, 255, 0.12)',
      },
      borderColor: {
        'white/35': 'rgba(255, 255, 255, 0.35)',
      },
      animation: {
        'glass-shine': 'shine 7s cubic-bezier(0.4, 0, 0.2, 1) infinite',
      },
      keyframes: {
        shine: {
          '0%': { left: '-150%' },
          '15%': { left: '150%' },
          '100%': { left: '150%' },
        },
      },
    },
  },
  plugins: [],
}