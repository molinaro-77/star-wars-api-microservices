const axios = require('axios');
const { response } = require('../utils');

module.exports = async (req, res) => {
  const { id } = req.params;
  const character = await axios.get(`http://localhost:8004/Character/${id}`)
  response(res, 200, character.data)
}