const mongoose = require('mongoose')
const packageMetadata = require('./packageMetadata')
const packageData = require('./packageData')

const packageSchema = new mongoose.Schema({
    metadata: {
        ref: 'PackageMetadata',
        type: mongoose.Schema.Types.ObjectId,
        description: '',
        required: true
    },
    data: {
        ref: 'PackageData',
        type: mongoose.Schema.Types.ObjectId,
        description: '',
        required: true,
    }
})

module.exports = mongoose.model('Package', packageSchema)