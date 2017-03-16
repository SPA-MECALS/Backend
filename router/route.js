const express = require('express');

// Our router with which we define each route.
const router = express.Router();

// Default behavior for any routes
router.use(function(req, res, next) {
    // Authentication of users using NARMS server.

    // Ensure to pass through all routes.
    next();
});

// middleware handling login event.
router.post('/login', require('./middleware/login'));

// middleware handling logout event.
router.post('/logout', require('./middleware/logout'));

// middleware handling roleChange event.
router.post('/roleChange', require('./middleware/roleChange'));

// middleware handling workstations event.
router.get('/workstations', require('./middleware/workstations'));

// Export the router.
module.exports = router;
