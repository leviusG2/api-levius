const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        max: 50,
        unique: true
    },
    firstname: {
        type: String,
        required: true,
        max: 100
    },
    lastname: {
        type: String,
        required: true,
        max: 100
    },
    age: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true,
        max: 100
    },
    photoURL: {
        type: String,
        required: true,
        default: 'a'
    }
})

userSchema.plugin(uniqueValidator)

module.exports = mongoose.model('users', userSchema)