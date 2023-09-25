const mongoose = require('mongoose');
const { ADMIN, USER } = require('../utils/constants');
const Schema = mongoose.Schema;
const userSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: false
        },
        role: {
            type: String,
            enum: [ADMIN, USER],
            default: USER 
        },
    },
    {
        timestamps: true
    }
);
module.exports = mongoose.model('User', userSchema);
