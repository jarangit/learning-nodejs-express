const express = require('express')
const { readdirSync } = require('fs')
const app = express()


// Route1
// app.use('/api')

// loop fot get file in folder routes
readdirSync('./routes').map((r) => app.use('/api', require('./routes/' + r)))
app.listen(5001, () => console.log('server running on port 5001'))