const { response } = require('../utils')

module.exports = async (req, res) => {
  const { name } = req.query
  response(res, 201, {
    created : true,
    error: false,
    data : {
      newFilmName: name
    }
  })
}