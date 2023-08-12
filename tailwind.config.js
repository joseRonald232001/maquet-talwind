/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      ligthbrown:"#dfae90",
      black:"#000000",
      ligthgray:"#BBBBBB",
      white:"#ffffff",
      ligthBlue:"#B9D1DE"
    },
    fontFamily:{
      righteoues:['Righteous','cursive'],
      roboto:['Roboto', 'sans-serif']
    },

    extend: {},
  },
  plugins: [],
}

