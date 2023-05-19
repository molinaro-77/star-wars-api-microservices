const Planets = require('../data');

module.exports = async (req, res) => {
  const allPlanets = await Planets.list();
  res.status(200).send(allPlanets);
}