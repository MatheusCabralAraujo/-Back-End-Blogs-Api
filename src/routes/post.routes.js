const router = require('express').Router();
const postController = require('../controllers/post.controller');
const { verifyToken } = require('../middlewares/jwtValidation');

router.get('/', verifyToken, postController.getAllPosts);
router.get('/:id', verifyToken, postController.getPostById);
router.post('/', verifyToken, postController.createPost);
router.put('/:id', verifyToken, postController.updatePost);
router.delete('/:id', verifyToken, postController.deleteBlogPostsById);

module.exports = router;