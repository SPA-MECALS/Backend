const express = require('express')
var middlewares = require('./middleware.js')

// Our router
const router = express.Router();

router.use(function(req, res, next) {
    // do logging
    console.log(req.body)
    next(); // make sure we go to the next routes and don't stop here
});

router.get('/', function(req, res) {
    res.json({ message: ':)' });
});

router.post('/login', function(req, res) {
    res.json({ message: 'login event' });
})

router.post('/logout', function(req, res) {
    res.json({ message: 'logout event' });
})


module.exports = router;
