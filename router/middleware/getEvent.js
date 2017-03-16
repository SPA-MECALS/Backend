const request = require('request');

// Handler to forward http queries towards NARMS server.
module.exports = function(url, path, callback) {

  // GET the data
  request(url + path, function (error, response, body) {
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
