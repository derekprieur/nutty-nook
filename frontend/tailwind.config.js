/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-brown': '#A67C52',
        'medium-brown': '#8B4513',
        'dark-brown': '#5C3317',
        'light-green': '#9ACD32',
        'medium-green': '#228B22',
        'dark-green': '#006400',
        'light-gray': '#D3D3D3',
        'medium-gray': '#808080',
        'dark-gray': '#404040',
        'light-orange': '#FFA07A',
        'medium-orange': '#FF8C00',
        'dark-orange': '#FF4500',
        'light-yellow': '#FFFFE0',
        'medium-yellow': '#FFD700',
        'dark-yellow': '#FFAA00',
      }
    },
  },
  plugins: [],
}