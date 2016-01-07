/**
 * Created by JFCS on 1/6/16.
 */
var convertDollar = function(intNum) {
    return '$' + (intNum + '').replace(/(\d)(?=(\d{3})+$)/g, '$1,') + ".00";
};


module.exports = convertDollar;