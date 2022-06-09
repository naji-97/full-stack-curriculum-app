const express = require('express')
const cors = require('cors')

var app = express()
 
app.use(cors())
require('../db/index')()
 
require('dotenv').config()

const port = process.env.PORT || 5000

app.use('/api/v1/curricula', require('./api/curricula'))


app.listen(port,()=>console.log(`http://localhost:${port}`))