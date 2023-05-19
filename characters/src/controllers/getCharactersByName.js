const Characters = require('../data');
const { response } = require('../utils');
const { ClientError } = require('../utils/errors');

module.exports = async (req, res) => {
  const { name } = req.query
  const characters = await Characters.getByName(name);
  if(characters.length === 0) throw new ClientError("Not Found", 404)
  response(res, 200, characters)
}