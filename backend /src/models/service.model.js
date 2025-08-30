'use strict';
const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var serviceSchema = new mongoose.Schema({
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ServiceCategory',
        required: true,
    },
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
    provider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Accommodation',
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
}, { timestamps: true });

//Export the model
module.exports = mongoose.model('Service', serviceSchema);