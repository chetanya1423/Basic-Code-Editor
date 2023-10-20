/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Montserrat', 'sans-serif'],
      },
      colors:{
        grayWhite:'#dcdbdc',
        releaseBlack:'#080202',
      }
    },
  },
  plugins: [],
}

