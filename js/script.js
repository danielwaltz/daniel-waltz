// Update size of videos and backgrounds based on window size + center content
function updateVideoSize(wwidth,vwidth,ccontent) {
	// Videos and backgrounds
	if ( wwidth >= vwidth ) {
		$('body > section').each(function(){
			$(this).children('video').css({
				'width': wwidth,
				'height': 'auto'
			});
			$(this).css('background-size',wwidth);
		});
	} else {
		$('body > section').each(function(){
			$(this).children('video').css({
				'width': 'auto',
				'height':'100%'
			});
			$(this).css('background-size','auto 100%');
		});
	}

	// Content
	if ( ccontent ) {
		$('.vert-center-mobile').each(function(){
			var contentHeight = $(window).outerHeight() / 2 - $(this).outerHeight() / 2;
			$(this).css('top', contentHeight);
		});
	} else {
		$('.vert-center-mobile').each(function(){
			$(this).attr('style','');
		});
	}
}

// Dynamically load video + play/pause button
function dynamicVideo() {
	var load = localStorage.getItem('load');
	var videos = $('video');
	var playing = true;

	if ( load === 'false' ) {
		videos.hide();
		videos.each(function(){
			$(this).get(0).pause();
		});
		$('.playpause').removeClass('fa-pause').addClass('fa-play');
	}

	$('.playpause').click(function(e){
		e.preventDefault();
		if ( videos.get(0).paused ) {
			playing = true;
		} else {
			playing = false;
		}
		if ( load === 'false' ) {
			videos.show();
		}
		playingUpdate();
	});

	function playingUpdate(){
		if ( playing ) {
			videos.each(function(){
				$(this).get(0).play();
			});
			$('.playpause').removeClass('fa-play').addClass('fa-pause');
			localStorage.setItem('load', true);
		} else {
			videos.each(function(){
				$(this).get(0).pause();
			});
			$('.playpause').removeClass('fa-pause').addClass('fa-play');
			localStorage.setItem('load', false);
		}
	}
}

// Animated scrolling
function goToByScroll(id){
	$('html, body').animate({scrollTop: $(id).offset().top}, 'slow');
}

// Main function
function setup() {
	var windowHeight = $(window).outerHeight();
	$('body > section').css('height', windowHeight);
	
	var windowWidth = $(window).outerWidth();
	var videoWidth = $('video').outerWidth();
	var centerContent = false;

	if ( windowWidth <= 900 ) {
		centerContent = true;
	}

	updateVideoSize(windowWidth,videoWidth,centerContent);
}


// Form validation
function validateField(type, field) {
	var value = $(field).val();
	var valid = true;
	switch (type) {
		case 'text' :
			if ( $.trim(value) === '') {
				valid = false;
			}
			break;
		case 'email' :
			var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,10})?$/;
			if ( !emailReg.test( $.trim(value) ) || $.trim(value) === '' ) {
				valid = false;
			}
		break;
	}
	if ( valid ) {
		$(field).removeClass('error').addClass('good-to-go');
	} else {
		$(field).addClass('error').removeClass('good-to-go');
	}
	return valid;
}
function validateForm() {
	var hasError = false;

	$('form .required').each(function(){
		var type = $(this).attr('type');
		if ( !validateField(type, this) ) {
			hasError = true;
		}
	});

	return !hasError;
}

// Run setup function on load and on window resize
$(document).ready(function(){
	setup();
	dynamicVideo();
	
	// Form validation
	$('#contact').submit(function(e){
		if ( validateForm() ) {
			return true;
		}
		e.preventDefault();
	});
	$('form .required').on('keyup', function(e) {
		if ( e.which === 9 ) {
			return;
		}
		var type = $(this).attr('type');
		validateField(type, this);
	});

	// Animated scrolling
	$('nav a, .arrow').click(function(){
		goToByScroll($(this).attr('href'));
		return false;
	});
});
$(window).resize(function(){
	setup();
});