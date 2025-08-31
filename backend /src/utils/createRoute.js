const express = require('express');
function createRoute(controller) {
    const router = express.Router();
    // Define standard CRUD routes
    router.post('/', controller.create);
    // router.get('/:id', controller.getById);
    // router.put('/:id', controller.update);
    // router.delete('/:id', controller.delete);
    // router.get('/', controller.getAll);

    return router;
}
module.exports = createRoute;