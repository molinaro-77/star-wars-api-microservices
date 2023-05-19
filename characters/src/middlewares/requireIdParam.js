const { ClientError } = require("../utils/errors");
const characters  = require("../data/characters.json")

module.exports = (req, res, next) => {
  const { id } = req.params;
  const intId = parseInt(id);
  if(isNaN(intId)) throw new ClientError("Not found", 404);
  if(intId > characters.length ) throw new ClientError("invalid Id", 400);
  else return next();
}