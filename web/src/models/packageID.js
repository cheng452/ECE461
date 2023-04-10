const mongoose = require('mongoose')

const packageIDSchema = new mongoose.Schema({
    PackageID: {
      description: "",
      type: String
    }
})

module.exports = mongoose.model('PackageID', packageIDSchema)
