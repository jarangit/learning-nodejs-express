const express = require('express')
const { readdirSync } = require('fs')
const morgan = require('morgan')
const bodyParser = require('body-parser')



const app = express()
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// loop fot get file in folder routes
readdirSync('./src/routes').map((r) => app.use('/api', require('./src/routes/' + r)))
app.listen(5001, () => console.log('server running on port 5001'))