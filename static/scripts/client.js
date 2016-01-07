/**
 * Created by JFCS on 1/6/16.
 */
$(document).ready(function(){
    $('.test').text('Express Solo challange');
    $('.get').on('click', function(event){
        event.preventDefault();
        addBalance();
    });






function addBalance(){
    $.ajax('/balance').then(function(response){
        $('.balance').html(response);

    });
};

});