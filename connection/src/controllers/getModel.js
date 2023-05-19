const store = require('../store');

module.exports = async (req, res) => {
  const { model } = req.params;
  const response = await store[model].list();
  res.status(200).json(response);
};