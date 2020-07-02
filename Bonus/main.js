
$('.fa-bars').click(function(){
    $('.hamburger-menu').addClass('active');
    $('.hidden').removeClass('hidden');
});

$('.fa-times').click(function(){
    $('.hamburger-menu').removeClass('active');
    $('.hamburger-menu a').addClass('hidden');
});



