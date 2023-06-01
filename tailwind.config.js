/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      colors:{
      'org':'#FFB647',
      'bckgrnd':'#364547',
      'bord':'#2F3C3E'
      }
    },
  },
  plugins: [],
}

