const config = require('./config.json');
const forwardEvent = require('./forwardEvent');

module.exports = function(req, res) {
  if (!req.body.facility_pub_id || !req.body.workstation_id || !req.body.user_id) {
    res.status(400)
       .json();
  }

  var rightNow = new Date();
  var date = rightNow.toISOString().slice(0,10);
  var time = rightNow.toISOString().slice(11,19);

  var body = {
    user_id: req.body.user_id,
    workstation_id: req.body.workstation_id,
    happened_at: date + ' ' + time,
    event_type: "log_out",
    worker_role: "",
    worker_responsability: "",
    operational_status: ""
  };

  forwardEvent(config.NARMS, body, req.body.facility_pub_id + '/log_events/', function(error, resp){
    if (error) {
      console.log(error);
    }
    res.status(resp.statusCode)
       .json();
  });
};
