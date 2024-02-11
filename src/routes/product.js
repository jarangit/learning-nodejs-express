const express = require('express');
const router = express.Router()

router.get('/product', (req, res) => {
  res.send("get api data product")
})

router.get('/products', (req, res) => {
  res.send("get api data products")
})

module.exports = router