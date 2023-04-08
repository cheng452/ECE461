const mongoose = require('mongoose')
const semverRange = require('./semverRange')
const packageName = require('./packageName')

const packageQuerySchema = new mongoose.Schema({
    Version: {
        ref: 'SemverRange',
        description: ""
    },
    Name: {
        ref: 'PackageName',
        description: "",
        required: true
    }
})

module.exports = mongoose.model('PackageQuery', packageQuerySchema)