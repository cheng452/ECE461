const mongoose = require('mongoose')
const User = require('./user')
const PackageMetadata = require('./packageMetadata')

const PackageHistoryEntrySchema = new mongoose.Schema({
    User: {
        ref: 'User',
        type: mongoose.Schema.Types.ObjectId,
        description: "",
        required: true
    },
    Date: {
        description: "Date of activity using ISO-8601 Datetime standard in UTC format.",
        type: Date, // spec calls for string but Mongoose doesn't let us specify format so this should be date for our uses 
        example: "2023-03-23T23:11:15Z",
        required: true
    },
    PackageMetaData: {
        ref: 'PackageMetadata',
        type: mongoose.Schema.Types.ObjectId,
        description: "",
        required: true
    },
    Action: {
        description: "",
        enum: ['CREATE', 'UPDATE', 'DOWNLOAD', 'RATE'], // enum is a validation option that ensures what is entered is one of 
                                                        // the strings in this list. Results in validation error if not
        type: String,
        required: true
    }
})

module.exports = mongoose.model('PackageHistoryEntry', PackageHistoryEntrySchema)
