/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['SF Pro Display', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      boxShadow: {
        glass: '0 40px 100px rgba(255,255,255,0.1), 0 25px 60px rgba(0,0,0,0.8)',
      },
    },
  },
  plugins: [],
};
