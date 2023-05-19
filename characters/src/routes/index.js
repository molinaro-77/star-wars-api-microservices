const { Router } = require('express')
const controllers = require('../controllers')
const middlewares = require('../middlewares')

const router = Router();

router.get('/', middlewares.nameQuery, controllers.getCharacters);
router.get('/:id', middlewares.validateIdParam, controllers.getCharacterById)

module.exports = router;