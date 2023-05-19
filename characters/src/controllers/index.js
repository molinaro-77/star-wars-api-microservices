const { asyncCatcher } = require('../utils')

module.exports = {
  getCharacters : asyncCatcher(require('./getCharacters')),
  getCharacterById : asyncCatcher(require('./getCharacterById')),
  getCharactersByName : asyncCatcher(require('./getCharactersByName')),
}