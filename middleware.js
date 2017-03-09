const http = require('http');
const config = require('./config.json');
const querystring = require('querystring');

// Handler to forward https queries towards CALS/NARMS server.
function forward_event(url, req, path) {
  // debug
  console.log(url);

  // Data to forward to CALS/NARMS
  var data = querystring.stringify({
    // need to replace with the content of the HTTP query
    test: 'test :)'
  });

  // HTTP request options
  var options = {
    host: url,
    port: 80,
    method: 'POST',
    path: path,
    headers: {
       'Content-Type': 'application/x-www-form-urlencoded',
       'Content-Length': Buffer.byteLength(data)
   }
  };

  // Build the request
  var request = http.request(options, function(res) {
    res.setEncoding('utf8');
    res.on('data', function(chunk) {
      console.log('body ' + chunk);
    });
  });

  // Post the data
  request.write(data);
  request.end();
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
    forward_event(config.NARMS, req.body, '/login');
    // need to handle properly result
    res.json({ message: 'login event'});
  },
  logout : function(req, res) {
    console.log("==== POST /logout ====");
    console.log(req.body);
    console.log("======== END ========");
    forward_event(config.NARMS, req.body, '/logout');
    // need to handle properly result
    res.json({ message: 'logout event'});
  },
  roleChange : function(req, res) {
    console.log("==== POST /roleChange ====");
    console.log(req.body);
    console.log("======== END ========");
    forward_event(config.NARMS, req.body, '/roleChange');
    // need to handle properly result
    res.json({ message: 'roleChange event'});
  }
};
