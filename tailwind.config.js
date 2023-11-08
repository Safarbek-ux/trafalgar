/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'muli': ['"Mulish"'],
      },
      colors:{
        'bl' : '#458FF6',
        'logotext': '#233348',
        'navtextcolor': '#1F1534',
        'textp' : '#7D7987',
      },
      backgroundImage: {
        'svg_smal': "url('../src/images/svg_bg.svg')",
        'svg_our': "url('../src/images/our_bg.svg')",
        'svg_right': "url('../src/images/Vectorrigtht.png')",
        'customers': 'linear-gradient(208deg, #67C3F3 9.05%, #5A98F2 76.74%)',
      },
      boxShadow:{
        'lishadow' :'10px 40px 50px 0px rgba(229, 233, 246, 0.40)',
      },
    },
  },
  plugins: [],
}

