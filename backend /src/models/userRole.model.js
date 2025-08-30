'use strict';
const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userRoleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    description: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});

//Export the model
module.exports = mongoose.model('UserRole', userRoleSchema);