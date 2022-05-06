
$('.gallery-img').click(function(){

$('.backdrop').show();

$('.gallery-img').removeClass('active');   
$(this).addClass('active');

})

$('.backdrop').click(function(){

    $('.backdrop').hide();
    
    $('.gallery-img').removeClass('active');   

})