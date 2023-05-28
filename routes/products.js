const express = require('express');
const {
    getProducts,
    getShopProducts,
    postOrder,
} = require('../controllers/productsController')

const router = express.Router();

router.get('/', getProducts);

router.get('/:shop', getShopProducts);

router.post('/cart', postOrder)

module.exports = router