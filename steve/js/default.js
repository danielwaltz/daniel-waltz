$(document).ready(function(){
	$('#rotatex').click(function(){
		$('.steve').toggleClass('rotatex');
	});
	$('#rotatey').click(function(){
		$('.steve').toggleClass('rotatey');
	});
	$('#rotatexy').click(function(){
		$('.steve').toggleClass('rotatexy');
	});
	$('#run').click(function(){
		$('.steve').toggleClass('run');
	});
	$('#look').click(function(){
		$('.steve').toggleClass('look');
	});
	$('#derp').click(function(){
		$('.steve').toggleClass('derp');
	});

	// $('#iframe').load(function() {
	// 	var responseText = $('#iframe').contents().find('body').html();
	// 	$('.steve').css('background-image','url(images/char.png)';
	// });
});