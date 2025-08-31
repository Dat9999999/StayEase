const express = require('express');
const router = express.Router();

// Import route modules
// const accommodationRoutes = require('./routes/accommodation.routes');
// const bookingRoutes = require('./routes/booking.routes');
const userRoutes = require('./user.route');

// Use route modules
// router.use('/accommodations', accommodationRoutes);
// router.use('/bookings', bookingRoutes);
router.use('/users', userRoutes);

module.exports = router;