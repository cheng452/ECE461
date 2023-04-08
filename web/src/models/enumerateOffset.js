const mongoose = require('mongoose')

const enumerateOffsetSchema = new mongoose.Schema({
    EnumerateOffset: {
        description: "Offset in pagination.",
        type: String,
        example: "1"
    }
})

module.exports = mongoose.model('EnumerateOffset', enumerateOffsetSchema)