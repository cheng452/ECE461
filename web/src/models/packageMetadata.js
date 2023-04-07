const mongoose = require('mongoose')

const packageMetadataSchema = new mongoose.Schema({
    Name: {
        // $ref? See line 546 in YAML
        required: true
    },
    Version: {
        type: String,
        required: true
    },
    ID: {
        // $ref? See line 554 in YAML
        required: true
    }
})

module.exports = mongoose.model('PackageMetadata', packageMetadataSchema)
