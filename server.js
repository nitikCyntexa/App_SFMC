var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var client_id="";
var client_secret="";
var client_credentials="";
var id=" ";
var password="";
// Serve static files
app.use(express.static(__dirname + '/public'));
app.post("/credential", async function(req,res){
    console.log("hello")
});
// Serve your app
console.log('Served: http://localhost:' + port);
app.listen(port);