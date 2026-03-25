
module.exports = {
  darkMode: 'class', 
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     extend: {
      boxShadow: {
        'top-2xl': '0 -15px 40px rgba(0,0,0,0.25)',
      }
    }
  },
  plugins: [],
}
