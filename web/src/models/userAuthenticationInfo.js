const mongoose = require('mongoose')

const userAuthenticationSchema = new mongoose.Schema({
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('UserAuthentication', userAuthenticationSchema)
