
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-jitsi.cjs.production.min.js')
} else {
  module.exports = require('./react-jitsi.cjs.development.js')
}
