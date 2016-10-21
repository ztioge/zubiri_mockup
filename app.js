$(document).ready(function(){

$('.navbar-nav li').click(function(item){$(this).siblings().removeClass('active');$(this).addClass('active');});

//parallax
$('.parallax-window').parallax();

var options = [
    {selector: '.nosotros', offset: 200, callback: customCallbackFunc },
    {selector: '.proyectos', offset: 200, callback: function() {
      customCallbackFunc();
    } },
  ];
  Materialize.scrollFire(options);
});

