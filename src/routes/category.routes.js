const express = require('express');

const router = express.Router();
const categoryController = require('../controllers/category.controller');
const { verifyToken, validateToken } = require('../middlewares/validations');

router.get('/', verifyToken, validateToken, categoryController.getAll);
router.post('/', verifyToken, validateToken, categoryController.createCategory);