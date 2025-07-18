const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      colors: {
        "p-primary": "#000066",
        "p-black": "#2A2E34",
        "p-primary-text": "#808080",
        "p-secondary": "#4F5762",
        "p-secondary-black": "#656F7D",
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'tilt-3d': 'tilt-3d 8s ease-in-out infinite',
      },
      keyframes: {
        'tilt-3d': {
          '0%, 100%': { transform: 'rotateX(8deg) rotateY(-8deg)' },
          '25%': { transform: 'rotateX(-8deg) rotateY(-8deg)' },
          '50%': { transform: 'rotateX(-8deg) rotateY(8deg)' },
          '75%': { transform: 'rotateX(8deg) rotateY(8deg)' },
        },
      },
    },
  },
  plugins: [
    flowbite.plugin(),
    require('preline/plugin'),
  ],
}