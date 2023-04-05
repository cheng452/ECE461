const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/packages', { useNewUrlParser: true })

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

var packageRouter = require('./routes/packages')
app.use('/packages', packageRouter)

app.listen(3000, () => console.log('Server started'))
