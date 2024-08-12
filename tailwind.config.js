/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        appear: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        appearFromRight: {
          '0%': { opacity: 0, transform: 'translateX(100px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        appearFromLeft: {
          '0%': { opacity: 0, transform: 'translateX(-100px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      },
      animation: {
        appearFromRight: 'appearFromRight 1s ease-in-out',
        appearFromLeft: 'appearFromLeft 1s ease-in-out 1s forwards',
        appear: 'appear 1s ease-in-out 2s forwards',
      },
      backgroundImage: {
        rainbow: 'linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)',
        formBackground: "url('./src/assets/img/form-bg-1.jpg')",
      },
      filter: {
        'blur-10': 'blur(20px)',
      },
      minHeight: {
        inherit: 'inherit',
      },
    },
  },
  plugins: [],
};
