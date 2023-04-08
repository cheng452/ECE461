const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        description: "",
        type: String,
        example: "Alfalfa",
        required: true
    },
    isAdmin: {
        description: "Is this user an admin?",
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('User', userSchema)