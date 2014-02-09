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


//	$(".cidade > a").click(function(){
//		$(".cidade > nav").slideToggle();
//	});




$(document).ready(function() {
	$(".accordion .accord-header").click(function() {
		$(".accordion .accord-header").removeClass("active");
		$(this).addClass("active");
		if($(this).next("div").is(":visible")){
			$(this).next("div").slideUp("fast");
		} else {
			$(".accordion .accord-content").slideUp("fast");
			$(this).next("div").addClass("active").slideDown("fast");
		}
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


	$(".modal .btClose").click(function(){
		$(".modal").removeClass("open").addClass("close").slideUp("fast");
		return false;
	});


	$(".newsletter_link").click(function(){
		$(".modal.login.open").removeClass("open").addClass("close").slideUp("fast"); 
		$(".modal.newsletter").removeClass("close").addClass("open").slideDown("slow");
		return false;
	});

	$(".login_link").click(function(){
		$(".modal.newsletter.open").removeClass("open").addClass("close").slideUp("fast"); 
		$(".modal.login").removeClass("close").addClass("open").slideDown("slow");
		return false;
	});

});


$(window).load(function(){
	$('#carousel_foto').flexslider({
		animation: "slide",
		controlNav: false,
		animationLoop: false,
		slideshow: false,
		itemWidth: 210,
		minItems: 5,
		itemMargin: 5,
		asNavFor: '#galeria_foto'
	});

	$('#galeria_foto').flexslider({
		animation: "slide",
		controlNav: false,
		animationLoop: false,
		slideshow: false,
		sync: "#carousel_foto"
	});

	$('#carousel_video').flexslider({
		animation: "slide",
		controlNav: false,
		animationLoop: false,
		slideshow: false,
		itemWidth: 210,
		minItems: 5,
		itemMargin: 5,
		asNavFor: '#galeria_video'
	});

	$('#galeria_video').flexslider({
		animation: "slide",
		controlNav: false,
		animationLoop: false,
		slideshow: false,
		sync: "#carousel_video"
	});
});


$('.custom-upload input[type=file]').change(function(){
    $(this).next().find('input').val($(this).val());
});


$('.multiple-select').multipleSelect({
	placeholder: "Select com múltiplas opções",
	width: 320,
	multiple: true,
	multipleWidth: 130
});

$( "#navMobile > a" ).click(function() {
  $( "#navMobile > nav" ).slideToggle( "slow", function() {

  });
});

