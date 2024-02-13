const express = require('express')
const morgan = require('morgan')
const { readdirSync } = require('fs')
const bodyParser = require('body-parser')
const connectDB = require('./src/config/db')



const app = express()

// context db
connectDB()
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// loop fot get file in folder routes
readdirSync('./src/routes').map((r) => app.use('/api', require('./src/routes/' + r)))
app.listen(5001, () => console.log('server running on port 5001'))