const { ClientError } = require("../utils/errors");

module.exports = (req, res, next) => {
  const { id } = req.params;
  const intId = parseInt(id);
  if(isNaN(intId)) throw new ClientError("Not found", 404);
  else return next();
}