'use strict';
const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var accommodationSchema = new mongoose.Schema({
    amenities: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Amenity' }],
        required: false,
        default: [],
    },
    manager: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    type: {
        type: String,
        required: true,
        enum: ['privated', 'per_room'],
    },
    rooms: {
        type: Number,
        required: true,
        min: 1,
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
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
}, { timestamps: true });

//Export the model
module.exports = mongoose.model('Accommodation', accommodationSchema);