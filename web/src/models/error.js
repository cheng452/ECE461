const mongoose = require('mongoose')

const errorSchema = new mongoose.Schema({
    code: {
        type: Number,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Error', errorSchema)