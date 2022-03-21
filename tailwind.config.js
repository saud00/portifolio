const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Staatliches": ["Staatliches", ...defaultTheme.fontFamily.sans],
        "Josefin": ["Josefin Sans", ...defaultTheme.fontFamily.sans],
        'press-start': ['"Press Start 2P"', 'cursive']

      },
      opacity: {
                '0': '0',
                 '10': '0.1',
                 '20': '0.2',
                 '85': '0.85',
                }
    },
  },
  plugins: [],
}
