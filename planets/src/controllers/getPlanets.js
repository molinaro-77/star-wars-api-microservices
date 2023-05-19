const axios = require('axios');

module.exports = async (req, res) => {
  const allPlanets = await axios.get("http://localhost:8004/Planet")
  res.status(200).send(allPlanets.data);
}