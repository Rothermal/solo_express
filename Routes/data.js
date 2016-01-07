/**
 * Created by JFCS on 1/7/16.
 */
var express = require('express');
var router = express.Router();
var accountBalance = require('./../modules/accountBalance');

router.use(function timeLog(request,response,next){
   console.log('Time:',Date.now() );
    next();
});


router.get('/data', function(request,response){
        var sendBalance = '<p>'+ accountBalance.balance() + accountBalance.dollar() + '</p>';
        response.send(sendBalance);
});

module.exports = router;