$("#cardDisplay").hide();

	$("#cardDisplay").show();

$(document).ready(function(){

//hide all except the one that's class that's clicked on.
	$(".all").click(display);
		
		function display() {
			$("#cardDisplay").show();
		}

	$('.minorArcana').click(function(){
		$('.major').hide();
		$('.minor').show();
	});

	$('.majorArcana').click(function(){
		$('.minor').hide();
		$('.major').show();
	});

	$('.wands').click(function(){
		$('.minor').hide();
		$('.major').hide();
		$('.wands').show();
	});

	$('.swords').click(function(){
		$('.minor').hide();
		$('.major').hide();
		$('.swords').show();
	});

	$('.pentacles').click(function(){
		$('.minor').hide();
		$('.major').hide();
		$('.pents').show();
	});

	$('.cups').click(function(){
		$('.minor').hide();
		$('.major').hide();
		$('.cups').show();
	});
});