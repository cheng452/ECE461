const mongoose = require('mongoose')

const packageRatingSchema = new mongoose.Schema({
    BusFactor: {
        type: Number,
        required: true
    },
    Correctness: {
        type: Number,
        required: true
    },
    RampUp: {
        type: Number,
        required: true
    },
    ResponsiveMaintainer: {
        type: Number,
        required: true
    },
    LicenseScore: {
        type: Number,
        required: true
    },
    GoodPinningPracice: {
        type: Number,
        required: true
    },
    PullRequest: {
        type: Number,
        required: true
    },
    NetScore: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('PackageRating', packageRatingSchema)
