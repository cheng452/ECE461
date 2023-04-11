const mongoose = require('mongoose')
const semverRange = require('./semverRange')
const packageName = require('./packageName')

const packageQuerySchema = new mongoose.Schema({
    Version: {
        ref: 'SemverRange',
        type: mongoose.Schema.Types.ObjectId,
        description: ""
    },
    Name: {
        ref: 'PackageName',
        type: mongoose.Schema.Types.ObjectId,
        description: "",
        required: true
    }
})

module.exports = mongoose.model('PackageQuery', packageQuerySchema)