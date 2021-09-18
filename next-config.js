// const withPWA = require('next-pwa')
const withPWA = await import('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: 'public',
  },
})
