const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  name: String,
  price: Number,
}, { timestamps: true })
//timestamps จะทำหารสร้างฟิว time ให้เรา auto

module.exports = mongoose.model('products', productSchema)