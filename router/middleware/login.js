const config = require('./config.json');
const forwardEvent = require('./forwardEvent');

module.exports = function login (req, res) {
  forwardEvent(config.NARMS, req.body, 'auth/login/', function(error, resp){
    if (error) {
      console.log(error);
    }
    res.status(resp.statusCode)
       .json(resp.body.worker_profiles);
  });
};
