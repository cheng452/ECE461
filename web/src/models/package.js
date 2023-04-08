const mongoose = require('mongoose')

const packageSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Version: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Package', packageSchema)
