const mongoose = require('mongoose')

const packageDataSchema = new mongoose.Schema({
    Content: {
        type: String
    },
    URL: {
        type: String
    },
    JSProgram: {
        type: String
    }
})

module.exports = mongoose.model('PackageData', packageDataSchema)
