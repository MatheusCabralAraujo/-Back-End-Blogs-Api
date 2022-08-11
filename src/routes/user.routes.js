const express = require('express');

const router = express.Router();
const userController = require('../controllers/user.controller.js');
const { verifyExistingUser } = require('../middlewares/validations');

router.get('/', userController.getAll);
router.post('/user', verifyExistingUser, userController.createUser);

module.exports = router;