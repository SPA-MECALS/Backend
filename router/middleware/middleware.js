const request = require('request');
const querystring = require('querystring');

const config = require('./config.json');

// Handler to forward http queries towards NARMS server.
function forwardEvent(url, body, path, callback) {
  // debug

  // HTTP request options
  var options = {
    method: 'POST',
    uri: 'http://193.10.30.126/api/cals/auth/login/',
    body: body,
    json: true
  };

  // Post the data
  request(options, function (error, response, body) {
      var res = {
        body: body,
        statusCode: response.statusCode
      };
      if (body.success === "False") {
        res.body = {};
        res.statusCode = 500;
      }
      callback(res);
    });
}

module.exports = {
  default : function(req, res) {
    res.json({ statusCode: 200 });
  },
  login : function(req, res) {
    //console.log(req);
    console.log("==== POST /login ====");
    console.log(req.body);
    console.log("======== END ========");
    forwardEvent(config.NARMS, req.body, 'auth/login/', function(resp){
      res.status(resp.statusCode)
         .json(resp.body.worker_profiles);
    });
    // need to handle properly result
  },
  logout : function(req, res) {
    console.log("==== POST /logout ====");
    console.log(req.body);
    console.log("======== END ========");
    forwardEvent(config.NARMS, req.body, 'logout/');
    // need to handle properly result
    res.json({ message: 'logout event'});
  },
  roleChange : function(req, res) {
    console.log("==== POST /roleChange ====");
    console.log(req.body);
    console.log("======== END ========");
    forwardEvent(config.NARMS, req.body, 'roleChange/');
    // need to handle properly result
    res.json({ message: 'roleChange event'});
  }
};
