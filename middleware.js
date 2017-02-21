const config = require('./config.json');

function test(req, res, next) {
    console.log(config.SAFAPS);
    res.json({ message: ':)' });
    next();
}

function test_login(req, res, next) {
    res.json({ message: 'login event' });
    next();
}

function test_logout(req, res, next) {
    res.json({ message: 'logout event' });
    next();
}

module.exports = test;
