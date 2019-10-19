// module.exports = {
//   exportPathMap: function () {
//     return {
//       '/': { page: '/' },
//       '/about': { page: '/about' }
//     }
//   }
// }

const withCSS = require('@zeit/next-css')
module.exports = withCSS({/* my next config */ })