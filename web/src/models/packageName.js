const mongoose = require('mongoose')

const packageNameSchema = new mongoose.Schema({
    PackageName: {
        description: "Name of a package.\
                    \ - Names should only use typical \"keyboard\" characters.\
                    \ - The name \"*\" is reserved. See the `/packages` API for its meaning.",
        type: String           
    }
})

module.exports = mongoose.model('PackageName', packageNameSchema)