const express = require('express');
const { getProductByID, getListProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/product');



// dev zone
const router = express.Router()

router.get('/product/:id', getProductByID)
router.get('/products', getListProduct)
router.post('/create-product', createProduct)
router.put('/update-product/:id', updateProduct)
router.delete('/delete-product/:id', deleteProduct)

// export zone
module.exports = router