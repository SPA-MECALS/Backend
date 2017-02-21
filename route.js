const express = require('express');
const middlewares = require('./middleware.js');

// Our router
const router = express.Router();

// Default behavior for any routes
router.use(function(req, res, next) {
    // do logging if necessary

    // debug
    console.log(req.body)

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
