module.exports = {
  mode: 'jit',
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
      // => @media (min-width: 640px) { ... }

      md: '640px',
      // => @media (min-width: 768px) { ... }

      lg: '768px',
      // => @media (min-width: 1024px) { ... }

      xl: '1024px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1280px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
