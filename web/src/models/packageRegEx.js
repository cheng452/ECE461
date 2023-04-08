const mongoose = require('mongoose')

const packageRegExSchema = new mongoose.Schema({
    PackageRegEx: {
        description: "A regular expression over package names and READMEs that is used for searching for a package.",
        type: String
    }
})

module.exports = mongoose.model('PackageRegEx', packageRegExSchema)