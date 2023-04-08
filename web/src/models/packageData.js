const mongoose = require('mongoose')

const packageDataSchema = new mongoose.Schema({
    Content: {
        description: "Package contents. This is the zip file uploaded by the user. (Encoded as text using a Base64 encoding). This will be a zipped version of an npm package's \
                      GitHub repository, minus the \".git/\" directory.\" It will, for example, include the \"package.json\" file that can be used to retrieve the project homepage. \
                      See https://docs.npmjs.com/cli/v7/configuring-npm/package-json#homepage.",
        type: String
    },
    URL: {
        description: "Package URL (for use in public ingest)",
        type: String
    },
    JSProgram: {
        description: "A JavaScript program (for use with sensitive modules)",
        type: String
    }
})

module.exports = mongoose.model('PackageData', packageDataSchema)