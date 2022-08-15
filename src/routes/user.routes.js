const express = require('express');

const router = express.Router();
const userController = require('../controllers/user.controller.js');
const { verifyExistingUser } = require('../middlewares/validations');
const { verifyToken, validateToken } = require('../middlewares/validations');

router.get('/', verifyToken, validateToken, userController.getAll);
router.get('/:id', verifyToken, validateToken, userController.getById);
router.post('/', verifyExistingUser, userController.createUser);

module.exports = router;