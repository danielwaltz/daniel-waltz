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

// Update size of scroll area
function updateSideScroll(swidth,scontent,active) {
	var scrollCount = $('.scroll-inner > div').size();
	var scrollTime = 800;

	if ( scontent ) {
		$('.scroll-inner').css('width', swidth * scrollCount);
		$('.scroll-inner > div').css('width', swidth);
	} else {
		$('.scroll-inner').attr('style','');
		$('.scroll-inner > div').each(function(){
			$(this).attr('style','');
		});
	}
	
	if ( active ) {
		if ( $('.scroll').scrollLeft() >= swidth / 2 ) {
			$('.scroll').stop().animate({
				scrollLeft: 0
			}, scrollTime);
		} else {
			$('.scroll').stop().animate({
				scrollLeft: swidth
			}, scrollTime);
		}
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
	} else {
		videos.hide();
		$(window).load(function(){
			videos.show();
			$(this).get(0).play();
		});
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

	function playingUpdate() {
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

// Dynamic animations for sections
function updateHeights() {
	$('body > section').each(function() {
		var height = $(window).outerHeight();
		$(this).outerHeight(height);
	});
}
function updateSections() {
	var viewport = $(window);
	var padding = viewport.outerHeight() * 0.10;

	$('body > section').each(function() {
		var self = $(this);
		var topVisible = ( self.offset().top + padding ) < viewport.scrollTop() + viewport.outerHeight();
		var bottomVisible = ( self.offset().top + self.outerHeight() - padding ) > viewport.scrollTop();
		var shown = bottomVisible && topVisible;

		if ( shown ) {
			self.addClass('visible');
		} else {
			self.removeClass('visible');
		}
	});
}

// Animated scrolling
function goToByScroll(id) {
	$('html, body').animate({scrollTop: $(id).offset().top}, 'slow');
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

// For responsive aspects
function resize() {
	var windowHeight = $(window).outerHeight();
	$('body > section').css('height', windowHeight);
	
	var windowWidth = $(window).outerWidth();
	var videoWidth = $('video').outerWidth();
	var centerContent = false;

	var scrollWidth = $('.scroll').outerWidth();
	var scrollContent = false;

	if ( windowWidth <= 900 ) {
		centerContent = true;
		scrollContent = true;
	}
	if ( windowHeight <= 800 ) {
		centerContent = true;
	}

	updateVideoSize(windowWidth,videoWidth,centerContent);
	updateSideScroll(scrollWidth,scrollContent);
}

// Run setup function on load and on window resize
$(document).ready(function(){
	resize();
	dynamicVideo();
	updateHeights();
	updateSections();
	
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

	// Toggle scroll state
	$('.scroll-toggle').click(function(e){
		var scrollWidth = $('.scroll').outerWidth();
		e.preventDefault();
		updateSideScroll(scrollWidth,true,true);
	});
});
$(window).resize(function(){
	resize();
});
$(window).on('scroll', function() {
	updateSections();
}).on('resize', function() {
	updateHeights();
});