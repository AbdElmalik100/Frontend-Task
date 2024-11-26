/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true
    },
    fontFamily: {
      League: "League Spartan"
    },
    extend: {
      colors: {
        "primary": {
          '50': '#f3f7fc',
          '100': '#deebf6',
          '200': '#c7e0f0',
          '300': '#96c6e3',
          '400': '#5da8d3',
          '500': '#398dbe',
          '600': '#2871a1',
          '700': '#225a82',
          '800': '#204e6c',
          '900': '#1f425b',
          '950': '#152a3c',
        },
        "secondary": "#C2C2D6",
        "light-gray": "#F4F4F4",
        "middle-light-gray": "#D9D9D9",
        "dark-gray": "#737373",
      }
    },
  },
  plugins: [],
}