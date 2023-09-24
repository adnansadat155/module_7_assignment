const express = require ('express');
const router = express.Router();

const blogController = require('../Controllers/blogController');
const commentController = require('../Controllers/commentController');
const messageController = require('../Controllers/messageController');
const portfolioController = require('../Controllers/portfolioController');
const productController = require('../Controllers/productController');

router.get('/createBlog',blogController.create);
router.get('/readBlog',blogController.read);
router.get('/updateBlog',blogController.update);
router.get('/deleteBlog',blogController.delete);

router.get('/createComment',commentController.create);
router.get('/readComment',commentController.read);
router.get('/updateComment',commentController.update);
router.get('/deleteComment',commentController.delete);

router.get('/createMessage',messageController.create);
router.get('/readMessage',messageController.read);
router.get('/updateMessage',messageController.update);
router.get('/deleteMessage',messageController.delete);

router.get('/createPortfolio',portfolioController.create);
router.get('/readPortfolio',portfolioController.read);
router.get('/updatePortfolio',portfolioController.update);
router.get('/deletePortfolio',portfolioController.delete);

router.get('/createProduct',productController.create);
router.get('/readProduct',productController.read);
router.get('/updateProduct',productController.update);
router.get('/deleteProduct',productController.delete);



module.exports = router