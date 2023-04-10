const mongoose = require('mongoose')
const user = require('./user')
const userAuthenticationInfo = require('./userAuthenticationInfo')

const authenticationRequestSchema = new mongoose.Schema({
    User: {
        ref: 'User',
        type: mongoose.Schema.Types.ObjectId,
        description: "",
        required: true
    },
    Secret: {
        ref: 'UserAuthenticationInfo',
        type: mongoose.Schema.Types.ObjectId,
        description: "",
        required: true
    }
})

module.exports = mongoose.model('AuthenticationRequest', authenticationRequestSchema)