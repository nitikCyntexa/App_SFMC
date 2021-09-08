var express = require('express');

var bodyParser = require('body-parser')
var app = express();
var port = process.env.PORT || 8080;
var client_id="vg7nf3qu6zj4l7wu1knom933";
var client_secret="CZSk4KCDDhWskx2kS2bXiqIF";
var client_credentials="https://mc6vgk-sxj9p08pqwxqz9hw9-4my.auth.marketingcloudapis.com/";
var id=" ";
var password="";
// Serve static files
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json())
/*app.post("/credential", async function(req,res){
    console.log(req);
    console.log(req.body);
    
    var passText={
        "email":req.body.username,
        "pass":req.body.password
    }
    console.log("passText.email=="+passText.email);
    console.log("passText.pass=="+passText.pass);
    if(id==passText.email && password==passText.pass)
    {
        console.log("Success");
    }
    else
    {
       console.log("Failed"); 
    }
});*/
app.post("/credential", async function (req, res) {
     var passText={
        "email":req.body.username,
        "pass":req.body.password
    }
    console.log("passText.email=="+passText.email);
    console.log("passText.pass=="+passText.pass);
    if(id==passText.email && password==passText.pass)
    {
        console.log("Success");
    }
    else
    {
       console.log("Failed"); 
    }
});
// Serve your app
console.log('Served: http://localhost:' + port);
app.listen(port);