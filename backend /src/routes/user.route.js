const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const createRoute = require('../utils/createRoute');

const userRoutes = createRoute(userController);

// Define user-related routes
// CRUD routes are handled by createRoute
router.use(userRoutes);

module.exports = router;