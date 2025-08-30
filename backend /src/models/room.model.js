const mongoose = require('mongoose');
const roomSchema = new mongoose.Schema({
    name: { type: String, required: true }, // VD: Phòng 101
    price: { type: Number, required: true },
    capacity: { type: Number, required: true }, // sức chứa
    amenities: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Amenity' }], // tiện ích riêng cho phòng
}, { _id: true }); // để mỗi room có id riêng
//Export the model
module.exports = mongoose.model('Room', roomSchema);