const express = require('express');
const router = express.Router()
const books = require('../db.json')
const bodyParser = require('body-parser')

router.get('/book/:id', (req, res) => {
  const book = books.find((item) => item.id === req.params.id)
  res.send(book)
})

router.get('/books', (req, res) => {
  res.send(books)
})


router.post('/create-book', (req, res) => {
  books.push(req.body)
  res.status(201).json(req.body)
})

router.put('/update-book/:id', (req, res) => {
  const book = books.findIndex((item) => item.id === req.params.id)
  res.json(Object.assign(books[book], req.body))

})


router.delete('/delete-book/:id', (req, res) => {
  const book = books.findIndex((item) => item.id === req.params.id)
  if (book !== -1) {
    books.splice(book, 1)
    res.status(200).json({ message: 'Deleted successfully' });
  } else {
    res.status(404).json({ message: 'Not found id' });

  }

})
module.exports = router