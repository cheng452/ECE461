const mongoose = require('mongoose')
const user = require('./user')
const userAuthenticationInfo = require('./userAuthenticationInfo')

const authenticationRequestSchema = new mongoose.Schema({
    User: {
        ref: 'User',
        description: "",
        required: true
    },
    Secret: {
        ref: 'UserAuthenticationInfo',
        description: "",
        required: true
    }
})

module.exports = mongoose.model('AuthenticationRequest', authenticationRequestSchema)