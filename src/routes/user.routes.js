const express = require('express');

const router = express.Router();
const userController = require('../controllers/user.controller.js');
const { verifyToken } = require('../middlewares/jwtValidation');

router.get('/:id', verifyToken, userController.getById);
router.get('/', verifyToken, userController.getAll);
router.post('/', userController.createUser);

module.exports = router;