const { Router } = require('express');
const middlewares = require('../middlewares');
const controllers = require('../controllers');

const router = Router();

router.get("/:model", middlewares.validateModel , controllers.getModel);
router.get("/:model/:id", middlewares.validateModel, controllers.getModelById);

module.exports = router;