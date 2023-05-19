const { asyncCatcher } = require('../utils')


module.exports = {
  getPlanets : asyncCatcher(require('./getPlanets')),
}