const request = require('request');

// Handler to forward http queries towards NARMS server.
module.exports = function(url, body, path, callback) {
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
      callback(error, res);
    });
};