/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        bounceIn: {
          '0%, 100%': { transform: 'translateY(0)', animationTimingFunction: 'ease-in-out' },
          '50%': { transform: 'translateY(-20px)', animationTimingFunction: 'ease-out' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.8)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        rotateIn: {
          '0%': { transform: 'rotate(-45deg)', opacity: 0 },
          '100%': { transform: 'rotate(0deg)', opacity: 1 },
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'slide-up': 'slideUp 1s ease-out',
        'bounce-in': 'bounceIn 1s ease-in-out',
        'scale-up': 'scaleUp 0.8s ease-in',
        'spin': 'spin 2s linear infinite',
        'rotate-in': 'rotateIn 1s ease-out',
      },
      colors: {
        primary: "rgb(255, 145, 0)",
        secondary: "rgb(255, 183, 2)",
        "light-yellow": "rgb(255, 255, 176)",
        "orange-light": "rgb(250, 208, 128)",
      },
      gradientColorStops: {
        primary: ["rgb(255, 0, 0)", "rgb(255, 183, 2)"],
        background: ["rgb(255, 255, 176)", "rgb(250, 208, 128)"],
      },
    },
  },
  plugins: [],
};
