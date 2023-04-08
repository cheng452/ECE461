const mongoose = require('mongoose')
const packageName = require('./packageName')
const packageID = require('./packageID')

const packageMetadataSchema = new mongoose.Schema({
    Name: {
        ref: 'PackageName',
        description: 'Package Name',
        example: 'my-package',
        required: true
    },
    Version: {
        description: 'Package Version',
        type: String,
        example: '1.2.3',
        required: true
    },
    ID: {
        ref: 'PackageID',
        description: 'Unique ID for use with the /package/{id} endpoint.',
        example: '123567192081501',
        required: true
    }
})

module.exports = mongoose.model('PackageMetadata', packageMetadataSchema)
