/**
 * Created by JFCS on 1/6/16.
 */
var express = require('express');
var path = require ('path');
var accountBalance = require('./modules/accountBalance');
var index = require('./Routes/index');
var dataRouter = require('./Routes/data');
var app = express ();

app.use('/', index);

//will use the index route. interesting.



app.use(express.static('static'));
app.use('/get',dataRouter);
//app.get('/', function (request,response) {
//    response.sendFile(path.join(__dirname ,'/static/views/index.html'));
//});

//app.get('/balance', function (request,response) {
//    var sendBalance = '<p>'+ accountBalance.balance() + accountBalance.dollar() + '</p>';
//    response.send(sendBalance);
//});


var server = app.listen(3000, function(){
    var port = server.address().port ;

    console.log( 'listening on port ', port );
});
