'use strict';
const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var bookingSchema = new mongoose.Schema({
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    recipienist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
        default: null,
    },
    service: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
        required: true,
    },
    checkInDate: {
        type: Date,
        required: true,
    },
    checkOutDate: {
        type: Date,
        required: true,
    },
    bookingPrice: {
        type: Number,
        required: true,
        min: 0,
    },
    additionalPrice: {
        type: Number,
        min: 0,
        default: 0,
    },
    status: {
        type: String,
        enum: ['pending', 'paid', 'cancelled', 'completed', 'refunded', 'checkin', 'checkout'],
        default: 'pending',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
}, { timestamps: true });

//Export the model
module.exports = mongoose.model('Booking', bookingSchema);