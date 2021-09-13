var express = require('express');

var bodyParser = require('body-parser')
var request = require('request');
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

var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://mc6vgk-sxj9p08pqwxqz9hw9-4my.auth.marketingcloudapis.com/v2/token',
  'headers': {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "grant_type": "authorization_code",
    "code": "eyJhbGciOiJIUzI1NiIsImtpZCI6IjQiLCJ2ZXIiOiIxIiwidHlwIjoiSldUIn0.eyJhdXRoX2NvZGUiOiIyVXpiaEhDbWloZnV2MkFFYWdlNEhWR1YiLCJjbGllbnRfaWQiOiI0YjNhMWh5cWFydHJuYnUwZmp3NGM3eTEiLCJlaWQiOjExMDAwNTY5MCwic3RhY2tfa2V5IjoiUzExIiwicGxhdGZvcm1fdmVyc2lvbiI6MiwiY2xpZW50X3R5cGUiOiJDb25maWRlbnRpYWwifQ.DzF5n7c9eUjtWpTNuIF9ZLlOQcuefAnj-tkai941mEw.yzkGgmGCBJwtWEOsQ5ADfwSQbRz1qyzlqpaFvLEgilTxFeSean8lLFt1fuDAp7uvyL5n2of-6iANIdjL_UfqDM3uuy6sZRWEakHBgC1LJQLa1vTzuLDN8irEkEmmWi8TinET0eyNAmOp4m9GPWrywvvW8CZT9lQdIcgD6NTL3hARrvW7OFMWTdORS",
    "client_id": "4b3a1hyqartrnbu0fjw4c7y1",
    "client_secret": "zRWL2uqxxIsRA9BWU6zdcPes",
    "redirect_uri": "https://sfmc-slack-app.herokuapp.com/",
    "scope": "email_read email_write email_send"
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});


app.post("/credential", async function (req, res) {
     console.log('MYDATA CODE '+req.body.urlButton);
    

});
// Serve your app
console.log('Served: http://localhost:' + port);
app.listen(port);