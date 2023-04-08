const mongoose = require('mongoose')

const packageIDSchema = new mongoose.Schema({
    PackageID: {
      description: "",
      type: string
    }
})

module.exports = mongoose.model('PackageID', packageIDSchema)