var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.json())

function handlePost(req, res){
    // sending back the body as a test
    req.send(req.body);
}

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