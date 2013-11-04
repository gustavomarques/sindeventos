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



$(document).ready(function() {
	$(".accordion .accord-header").click(function() {
		$(".accordion .accord-header").removeClass("active");
		$(this).addClass("active");
		if($(this).next("div").is(":visible")){
			$(this).next("div").slideUp("fast");
		} else {
			$(".accordion .accord-content").slideUp("fast");
			$(this).next("div").addClass("active").slideToggle("fast");
		}
	});

	$(".cidade > a").click(function(){
		$(".cidade > nav").slideToggle();
	});

	$('#banner ul').after('<div id="bannerNav">').cycle({ 
		fx: 'fade', 
		speed: 'fast', 
		timeout: 0, 
		pager: '#bannerNav'
	});

	$('#dataPesquisa').daterangepicker({
		opens: 'left'
	});
});








