/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        // body:['Montserrat']
        body:['Poppins']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        primary:"#264FAD",
        text :"#565656",
        cardbg:"#F6F6FC"
      },
      fontSize:{
        links: '20px'
      },
      height:{
        220:'550px'
      },
      width:{
        220:'600px'
      }
    },
  },
  plugins: [],
}
