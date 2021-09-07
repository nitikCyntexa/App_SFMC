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
    var passText={
        "email":req.body.emailInputId,
        "pass":req.body.passInputId
    };

    if("staticEmail"==passText.email && "staticPass"==passText.pass)
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