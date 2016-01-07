/**
 * Created by JFCS on 1/6/16.
 */
$(document).ready(function() {
    $('.test').text('Express Solo challange');
    $('.get').on('click', function (event) {
        event.preventDefault();
        addBalance();
    });






function addBalance(){
    $.ajax('/get/data').then(function(response) {
        $('.balance').html(response).hide().slideDown();

        });
    }
});