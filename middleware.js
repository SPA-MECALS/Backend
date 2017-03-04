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

//
// Work in Progress
//
function sign_handler(req,res) {
  console.log('sign handler');
}

module.exports = {
  default : function(req, res) {
    res.json({ statusCode: 200 });
  },
  //
  // Work in Progress
  //
  signIn : function(req, res) {
    sign_handler(req, res);
    res.json({ statusCode: 200 });
  },
  //
  // Work in Progress
  //
  signOut : function(req, res) {
    sign_handler(req, res);
    res.json({ statusCode: 200 });
  },


  login : function(req, res) {
    forward_event(config.CALS, req, '/login');
    // need to handle properly result
    res.json({ message: 'login event'});
  },
  logout : function(req, res) {
    forward_event(config.CALS, req, '/logout');
    // need to handle properly result
    res.json({ message: 'logout event'});
  },
  roleChange : function(req, res) {
    forward_event(config.CALS, req, '/roleChange');
    // need to handle properly result
    res.json({ message: 'roleChange event'});
  }
};
