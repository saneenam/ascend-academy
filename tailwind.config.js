/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'primary-400': "#E8BB45",
        'dark': "#161716",
      },
      backgroundImage: {
        'gradient-dark': "linear-gradient(to top right, #1C1D1C, #4C4D4C)",
        'gradient-overlay': "linear-gradient(to top, rgba(22, 23, 22, 1), rgba(102, 102, 102, 0))",
        'box-gradient': "linear-gradient(to right, rgba(232, 187, 69, 0) 0%, rgba(232, 187, 69, 1) 50%, rgba(232, 187, 69, 0) 100%)",
      },
      fontFamily: {
        'playFair': ['Playfair Display', 'serif'],
      },
      keyframes: {
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
    },
    plugins: [],
  }
}
