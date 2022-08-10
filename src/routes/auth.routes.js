const { Router } = require('express');
const authController = require('../controllers/auth.controller');
const { verifyLoginReq } = require('../middlewares/validations');

const router = Router();

router.post('/', verifyLoginReq, authController.login);

module.exports = router;