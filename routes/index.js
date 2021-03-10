var express = require('express');
var router = express.Router();

const userController = require('../controllers/user.controller')


/**
 * @PATH /
 * @Method GET
 */
router.get('/', userController.list);

/**
 * @PATH /
 * @Method POST
 */
router.post('/', userController.create);

/**
 * @PATH /
 * @Method PUT
 */
router.put('/:_id', userController.update);

module.exports = router;
