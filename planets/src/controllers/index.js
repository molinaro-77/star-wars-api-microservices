const { asyncCatcher } = require('../utils')

module.exports = {
  getPlanets : asyncCatcher(require('./getPlanets')),
  getPlanetByID : asyncCatcher(require('./getPlanetByID')),
}