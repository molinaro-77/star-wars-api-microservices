const { asyncCatcher } = require('../utils')

module.exports = {
  getFilms : asyncCatcher(require('./getFilms')),
  createFilm : asyncCatcher(require('./createFilm')),
}