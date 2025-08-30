const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var amenitySchema = new mongoose.Schema({
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
}, { timestamps: true
});

//Export the model
module.exports = mongoose.model('Amenity', amenitySchema);