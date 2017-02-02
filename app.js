var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.json())

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'DB_HOST',
  user     : 'DB_USER',
  password : 'DB_PASSWORD',
  database : 'DB_NAME'
});

function handlePost(req, res){
    
    // connection.connect();

    // sending back the body as a test
    req.send(req.body);

    

    //need to parse the json body and format the correct string to put into the database

    // python code used to format the query
    //          arg = "INSERT INTO `log_event` (`id_controller`, `event_type`, `controller_role`, `controller_responsability`, `operational_status`, `controller_time`, `traffic`, `weather`, `facility`, `air_space_segment`, `workstation`, `send_to_narms`) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s %s, %s, %s)"
    //          cur.execute(arg, (int(result_json['id_controller']), result_json['event_type'], result_json['controller_role'], result_json['controller_responsability'], result_json['operational_status'], result_json['controller_time'], result_json['traffic'], result_json['weather'], result_json['facility'], result_json['air_space_segment'], result_json['workstation'], int(result_json['send_to_narms'])))

    // connection.query('INSERT INTO ...', function(err, rows, fields) {
    // if (!err)
    //     console.log('Query result: ', rows);
    // else
    //     console.log('Error while performing Query.');
    // });

    // connection.end();
}

app.get('/', function (req, res) {
  req.send('Hello World!')
})

app.post('/login', function (req, res) {
  console.log('Log : Login event')
  handlePost(req, res)
})

app.post('/logout', function (req, res) {
  console.log('Log : Log out event')
  handlePost(req, res)
})

app.post('/roleChange', function (req, res) {
  console.log('Log : Role change event')
  handlePost(req, res)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})