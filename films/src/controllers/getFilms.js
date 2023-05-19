const Films = require('../data');
const { response } = require('../utils')

module.exports = async (req, res) => {
  const allFilms = await Films.list();
  response(res, 200, allFilms);
}