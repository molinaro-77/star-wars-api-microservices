const { ClientError } = require('../utils/errors')

module.exports = (req, res, next) => {
  const {name} = req.query;
  if (name) return next();
  else throw new ClientError("Falta el nombre", 401)
};