module.exports = {
  // mode: 'jit',
  purge: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'regal-light-gray': 'rgba(214, 226, 243, 0.7)',
        'regal-weight-gray': 'rgba(115, 125, 130, 0.4)',
        'regal-light-black': 'rgba(61, 73, 79, 0.4)',
        'regal-middle-black': '#1d1d1f',
        'regal-weight-black': '#1c1c1f',
        'regal-header-black': 'rgba(0, 0, 0, 0.91)',
        'regal-footer-black': '#111',
        'regal-footer-light-gray': '#6e6e73',
      },
    },
    fontFamily: {
      sans: ['Nunito Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
    },
    boxShadow: {
      inner: 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset',
    },
    screens: {
      sm: '501px',
      md: '640px',
      lg: '768px',
      xl: '1024px',
      '2xl': '1280px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
