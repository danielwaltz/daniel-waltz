// Update size of videos and backgrounds based on window size + center content
function updateVideoSize(wwidth, vwidth, ccontent) {
	// Videos and backgrounds
	if ( wwidth >= vwidth ) {
		$('body > section').each(function(){
			$(this).children('video').css({
				'width': wwidth,
				'height': 'auto'
			});
			$(this).css('background-size', wwidth);
		});
	} else {
		$('body > section').each(function(){
			$(this).children('video').css({
				'width': 'auto',
				'height':'100%'
			});
			$(this).css('background-size', 'auto 100%');
		});
	}

	// Content
	if ( ccontent ) {
		$('.js-vert-center').each(function(){
			var contentHeight = $(window).outerHeight() / 2 - $(this).outerHeight() / 2;
			$(this).css({
				'position': 'relative',
				'top': contentHeight
			});
		});
	} else {
		$('.js-vert-center').each(function(){
			$(this).attr('style','');
		});
	}
}

// Dynamically load video + play/pause button
function dynamicVideo() {
	var load    = localStorage.getItem('load');
	var videos  = $('video');
	var playing = true;

	if ( load === 'false' ) {
		videos.hide();
		videos.each(function(){
			$(this).get(0).pause();
		});
		$('.js-playpause').removeClass('fa-pause').addClass('fa-play');
	} else {
		videos.hide();
		$(window).load(function(){
			videos.show();
		});
	}

	$('.js-playpause').click(function(e){
		e.preventDefault();
		if ( videos.get(0).paused ) {
			playingUpdate(true);
		} else {
			playingUpdate(false);
		}
	});

	function playingUpdate(playing) {
		if ( load === 'false' ) {
			videos.show();
		}
		if ( playing ) {
			videos.each(function(){
				$(this).get(0).play();
			});
			$('.js-playpause').removeClass('fa-play').addClass('fa-pause');
			localStorage.setItem('load', true);
		} else {
			videos.each(function(){
				$(this).get(0).pause();
			});
			$('.js-playpause').removeClass('fa-pause').addClass('fa-play');
			localStorage.setItem('load', false);
		}
	}
}

// Dynamic animations for sections
function updateSections() {
	var viewport = $(window),
		padding  = viewport.outerHeight() * 0.05;

	$('body > section').each(function() {
		var self          = $(this),
			topVisible    = ( self.offset().top + padding ) < viewport.scrollTop() + viewport.outerHeight(),
			bottomVisible = ( self.offset().top + self.outerHeight() - padding ) > viewport.scrollTop(),
			shown         = bottomVisible && topVisible;

		if ( shown ) {
			self.addClass('visible');
		} else {
			self.removeClass('visible');
		}
	});
}

// Animated scrolling
function goToByScroll(id) {
	$('html, body').animate({scrollTop: $(id).offset().top}, 1000);
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

	$('form .js-required').each(function(){
		var type = $(this).attr('type');
		if ( !validateField(type, this) ) {
			hasError = true;
		}
	});

	return !hasError;
}

// For responsive aspects
function resize() {
	var windowWidth   = $(window).outerWidth(),
		windowHeight  = $(window).outerHeight(),
		videoWidth    = $('video').outerWidth(),
		centerContent = false;

	if ( windowWidth <= 900 || windowHeight <= 800 ) {
		centerContent = true;
	}

	updateVideoSize(windowWidth, videoWidth, centerContent);
}

// Run setup function on load and on window resize
jQuery(function($){
	resize();
	dynamicVideo();
	updateSections();

	// Smooth scrolling
	$('body').smoothWheel();

	// Animated scrolling
	$('.js-arrow').click(function(){
		goToByScroll($(this).attr('href'));
		return false;
	});

	// Form validation
	$('#contact').submit(function(e){
		if ( validateForm() ) {
			return true;
		}
		e.preventDefault();
	});
	$('form .js-required').on('keyup', function(e) {
		if ( e.which === 9 ) {
			return;
		}
		var type = $(this).attr('type');
		validateField(type, this);
	});
});
$(window).resize(function(){
	resize();
});
$(window).on('scroll', function() {
	updateSections();
});
