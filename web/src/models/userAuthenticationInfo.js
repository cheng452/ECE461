const mongoose = require('mongoose')

const userAuthenticationInfoSchema = new mongoose.Schema({
    password: {
        description: "Password for a user. Per the spec, this should be a \"strong\" password.",
        type: String,
        required: true
    }
})

module.exports = mongoose.model('UserAuthenticationInfo', userAuthenticationInfoSchema)