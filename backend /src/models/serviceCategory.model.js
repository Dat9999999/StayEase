'use strict';
const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var serviceCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    value: {
        type: String,
        required: true,
        unique: true,
        enum: ['foods & drinks', 'transportation', 'tour', 'spa', 'other'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
}, { timestamps: true });
//Export the model
module.exports = mongoose.model('ServiceCategory', serviceCategorySchema);