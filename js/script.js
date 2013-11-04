/* Author: Gustavo Marques Fernandes

The designer of master codes!

*/


// Para fazer as animações
$("body > section").waypoint(function() {
	$('body > section').removeClass("active");
	$(this).addClass("active");
}, { offset: 400 });


$("body > header").waypoint(function() {
	$(this).addClass("active");
}, { offset: 400 });
