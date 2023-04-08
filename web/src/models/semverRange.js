const mongoose = require('mongoose')

const semverRangeSchema = new mongoose.Schema({
    SemverRange: {
        description: "",
        type: String,
        example: "Exact (1.2.3)\
                \ Bounded range (1.2.3-2.1.0)\
                \ Carat (^1.2.3)\
                \ Tilde (~1.2.0)"
    }
})

module.exports = mongoose.model('SemverRange', semverRangeSchema)