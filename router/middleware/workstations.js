const config = require('./config.json');
const getEvent = require('./getEvent');

module.exports = function login (req, res) {
  getEvent(config.NARMS, 'workstations/', function(error, resp){
    if (error) {
      console.log(error);
    }
    var workstations = JSON.parse(resp.body).workstations;
    res.status(resp.statusCode)
       .json(workstations);
  });
};
