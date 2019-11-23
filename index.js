var express = require('express');
var app = express();
// Request, Response
function callBack(req, res){
    console.log('In registration');
    var x = {name: "Softwarica", location: "Dillibazaar"};
    res.json(x);
    res.status(200);
    //res.send('test')
    }
app.get('/registration', callBack);
app.get('/booking',
function(req, res, next){
    console.log('in first middileware do something');
    next();
   },
function(req, res, next){
    console.log('in first middileware do something');
    next();
   }, 
),
app.listen(3092);