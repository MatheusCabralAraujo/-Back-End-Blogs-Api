const express = require('express');

const router = express.Router();
const categoryController = require('../controllers/category.controller');
const { verifyToken } = require('../middlewares/jwtValidation');

router.get('/', verifyToken, categoryController.getAll);
router.post('/', verifyToken, categoryController.createCategory);