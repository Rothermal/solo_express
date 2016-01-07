/**
 * Created by JFCS on 1/6/16.
 */
var randomNumber = require('./randomNumber');
var convertDollar = require('./convertDollar');

var randomDollar = function(){
    return convertDollar(randomNumber(100, 1000000));
};

var accountBalance = function(){
    return "Account Balance: \n";
};

exports.dollar = randomDollar;
exports.balance = accountBalance;