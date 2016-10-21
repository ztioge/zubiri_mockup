$(document).ready(function(){

$('.navbar-nav li').click(function(item){$(this).siblings().removeClass('active');$(this).addClass('active');});

//parallax
$('.parallax').parallax();
});

