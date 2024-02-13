const express = require('express');
const { getProductByID, getListProduct, createProduct } = require('../controllers/product');



// dev zone
const router = express.Router()

router.get('/product/:id', getProductByID)
router.get('/products', getListProduct)
router.post('/product/:id', createProduct)

// export zone
module.exports = router