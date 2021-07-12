module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'regal-light-gray': 'rgba(214, 226, 243, 0.7)',
        'regal-dark-gray': 'rgba(115, 125, 130, 0.4)',
        'regal-light-black': 'rgba(61, 73, 79, 0.4)',
        'regal-dark-black': '#1c1c1f',
      },
    },
    fontFamily: {
      sans: ['Nunito Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
    },
    boxShadow: {
      inner: 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
