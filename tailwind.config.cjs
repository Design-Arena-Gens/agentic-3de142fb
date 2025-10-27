/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blushPink: '#FFC0CB',
        softGray: '#D3D3D3',
        royalGold: '#FFD700',
        richBlack: '#0d0d0d',
        softWhite: '#fdfbfb',
      },
      fontFamily: {
        heading: ['Montserrat', 'ui-sans-serif', 'system-ui'],
        body: ['Open Sans', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        goldGlow: '0 10px 25px rgba(255, 215, 0, 0.25)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.8s ease-out both',
      },
    },
  },
  plugins: [],
};
