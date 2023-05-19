const axios = require('axios');
const { response } = require('../utils');

module.exports = async (req, res) => {
  const allCharacters = await axios.get(`http://localhost:8004/Character`)
  response(res, 200, allCharacters.data)
}