/**
 * Created by JFCS on 1/6/16.
 */
var express = require('express');
var path = require ('path');
var app = express ();
var accountBalance = require('./modules/accountBalance');



app.use(express.static('static'));

app.get('/', function (request,response) {
    response.sendFile(path.join(__dirname ,'/static/views/index.html'));
});

app.get('/balance', function (request,response) {
    var sendBalance = '<p>'+ accountBalance.balance() + accountBalance.dollar() + '</p>';
    response.send(sendBalance);
});


var server = app.listen(3000, function(){
    var port = server.address().port ;

    console.log( 'listening on port ', port );
});
