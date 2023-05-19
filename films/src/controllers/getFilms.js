const axios = require('axios');
const { response } = require('../utils')

module.exports = async (req, res) => {
  console.log("im in the controller");
  console.log(req);
  const allFilms = await axios.get("http://database:8004/Film")
  response(res, 200, allFilms.data);
}