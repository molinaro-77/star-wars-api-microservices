const { Router } = require('express')
const controllers = require('../controllers');
const middlewares = require('../middlewares');

const router = Router();

router.get('/', controllers.getPlanets);
router.get('/:id', middlewares.validateIdParam, controllers.getPlanetByID)

module.exports = router;