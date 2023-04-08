const mongoose = require('mongoose')

const authenticationTokenSchema = new mongoose.Schema({
    PackageName: {
        description: "The spec permits you to use any token format you like. You could,\
                    \ for example, look into JSON Web Tokens (\"JWT\", pronounced \"jots\"): https://jwt.io.",
        type: String           
    }
})

module.exports = mongoose.model('AuthenticationToken', authenticationTokenSchema)