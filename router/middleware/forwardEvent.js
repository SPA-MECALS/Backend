const request = require('request');

// Handler to forward http queries towards NARMS server.
module.exports = function(url, body, path, callback) {
  // HTTP request options
  var options = {
    method: 'POST',
    uri: url + path,
    body: body,
    json: true
  };

  // POST the data
  request(options, function (error, response, body) {
      var res = {
        body: body,
        statusCode: response.statusCode
      };
      if (body.success === "False") {
        res.body = {};
        res.statusCode = 400;
      }
      callback(error, res);
    });
};
