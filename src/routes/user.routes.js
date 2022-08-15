const express = require('express');

const router = express.Router();
const userController = require('../controllers/user.controller.js');
const { verifyExistingUser } = require('../middlewares/validations');
const { verifyToken } = require('../middlewares/jwtValidation');

router.get('/', verifyToken, userController.getAll);
router.get('/:id', verifyToken, userController.getById);
router.post('/', verifyExistingUser, userController.createUser);

module.exports = router;