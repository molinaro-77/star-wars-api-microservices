const { asyncCatcher } = require('../utils');

module.exports = {
  getModel : asyncCatcher(require('./getModel')),
  getModelById : asyncCatcher(require('./getModelById')),
}