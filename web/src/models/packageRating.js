const mongoose = require('mongoose')

const packageRatingSchema = new mongoose.Schema({
    BusFactor: {
        description: "",
        type: Number,
        required: true
    },
    Correctness: {
        description: "",
        type: Number,
        required: true
    },
    RampUp: {
        description: "",
        type: Number,
        required: true
    },
    ResponsiveMaintainer: {
        description: "",
        type: Number,
        required: true
    },
    LicenseScore: {
        description: "",
        type: Number,
        required: true
    },
    GoodPinningPracice: {
        description: "The fraction of its dependencies that are pinned to at least\
                    \ a specific major+minor version, e.g. version 2.3.X of a package. (If\
                    \ there are zero dependencies, they should receive a 1.0 rating. If there\
                    \ are two dependencies, one pinned to this degree, then they should receive\
                    \ a Â½ = 0.5 rating).",
        type: Number,
        required: true
    },
    PullRequest: {
        description: "The fraction of project code that was introduced through pull requests with a code review.",
        type: Number,
        required: true
    },
    NetScore: {
        description: "From Part 1",
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('PackageRating', packageRatingSchema)