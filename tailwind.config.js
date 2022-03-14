module.exports = {
  content: ["./src/**/*.{html,css,js}"],
  theme: {
    extend: {
      colors: {
        'grayish-cyan': 'hsl(184, 14%, 56%)',
        'very-dark-cyan': 'hsl(183, 100%, 15%)',
        'dark-grayish-cyan': 'hsl(186, 14% , 43%)',
        'light-grayish-cyan': 'hsl(185, 41% , 84%)',
        'very-light-grayish-cyan': 'hsl(189, 41% , 97%)',
        'white': 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        'space': ['Space Mono'],
      },
    },
  },
  plugins: [],
}