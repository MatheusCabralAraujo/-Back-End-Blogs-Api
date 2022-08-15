const router = require('express').Router();
const postController = require('../controllers/post.controller');
const { verifyToken } = require('../middlewares/jwtValidation');
const { validatePost } = require('../middlewares/post.validations');

router.get('/', verifyToken, postController.getAllPosts);
router.get('/:id', verifyToken, postController.getPostById);
router.post('/', verifyToken, validatePost, postController.createPost);
router.delete('/:id', verifyToken, postController.deleteBlogPostsById);

module.exports = router;