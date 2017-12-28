const express = require('express')
const app = express()
var config = require('config')
var mysql  = require('mysql')
console.log('config',config)
// var connection = mysql.createConnection({
//   host     : config.get('DB_ENDPOINT'),
//   user     : config.get('DB_USER'),
//   password : config.get('DB_PASS'),
//   database : config.get('DB_NAME')
// });
// connection.connect(function(err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   }
//   console.log('connected as id ' + connection.threadId);
// })
app.get('/hello', function (req, res) {
  res.status(200).send({'blog':'hd7exploit'}); 
})

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})