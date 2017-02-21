const express = require('express');
const middlewares = require('./middleware.js');

// Our router with which we define each route.
const router = express.Router();

// Default behavior for any routes
router.use(function(req, res, next) {
    // Authentication of users using NARMS server.

    // Ensure to pass through all routes.
    next();
});

// Default middleware.
router.get('/', middlewares.default);

// middleware handling login event.
router.post('/login', middlewares.login);

// middleware handling logout event.
router.post('/logout', middlewares.logout);

// middleware handling roleChange event.
router.post('/roleChange', middlewares.roleChange);

// Export the router.
module.exports = router;
