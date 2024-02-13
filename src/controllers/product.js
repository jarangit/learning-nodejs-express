const product = require("../models/product")

exports.getProductByID = async (req, res) => {
  try {
    const id = req.params.id
    const data = await product.findOne({ _id: id }).exec()
    res.send(data)
  } catch (error) {
    console.log(error)
    res.status(500).send("data not found")
  }
}
exports.getListProduct = async (req, res) => {
  try {
    const data = await product.find({}).exec()
    res.send(data)
  } catch (error) {
    console.log(error)
  }
}

exports.createProduct = async (req, res) => {
  try {
    if (req.body) {
      const data = await product(req.body).save()
      res.send(data)
    }
  } catch (error) {
    console.log(error)
  }
}

exports.updateProduct = async (req, res) => {
  try {
    const id = req.params.id
    const data = await product.findOneAndUpdate({ _id: id }, req.body, { new: true }).exec()
    res.send(data)
  } catch (error) {
    console.log(error)
    res.status(500).send("data not found")
  }
}
exports.deleteProduct = async (req, res) => {
  try {
    const id = req.params.id
    const data = await product.findOneAndDelete({ _id: id }).exec()
    res.send(data)
  } catch (error) {
    console.log(error)
    res.status(500).send("data not found")
  }
}

