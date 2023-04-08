const mongoose = require('mongoose')
const packageMetadata = require('./packageMetadata')
const packageData = require('./packageData')

const packageSchema = new mongoose.Schema({
    metadata: {
        ref: 'PackageMetadata',
        description: '',
        required: true
    },
    data: {
        ref: 'PackageData',
        description: '',
        required: true,
    }
})

module.exports = mongoose.model('Package', packageSchema)