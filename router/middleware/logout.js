const config = require('./config.json');
const forwardEvent = require('./forwardEvent');

module.exports = function(req, res) {
  console.log("==== POST /logout ====");
  console.log(req.body);
  console.log("======== END ========");
  forwardEvent(config.NARMS, req.body, 'logout/');
  // need to handle properly result
  res.json({ message: 'logout event'});
};
