/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        // 'glowNavbar': "url('/assets/accents/glow-navbar.svg')",
        'favicon': "url('/public/favicon.ico')",
        'glowNavbar': "url('/public/assets/accents/glow-navbar.svg')",
        'backgroundGlow': "url('/public/assets/accents/background-glow.svg')",
        'homeMe' : "url('/public/assets/images/home-me.svg')",
        'homeMe2' : "url('/public/assets/images/home-me-2.svg')",
        'homeMe3' : "url('/public/assets/images/home-me-3.svg')",
        'testImage' : "url('/public/assets/images/Screenshot (12).png)",
      }
    },
  },
  plugins: [],
}

