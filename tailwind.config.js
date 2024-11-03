/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'violetPrimary': '#9538E2',
        'card-bg': '#D9D9D9',
        'body-bg': '#F7F7F7'
            },
    },
  
  },
  plugins: [
    require('daisyui'),
  ],
}

