const Characters = require('../data');
const { response } = require('../utils');

module.exports = async (req, res) => {
  const allCharacters = await Characters.list();
  response(res, 200, allCharacters)
}