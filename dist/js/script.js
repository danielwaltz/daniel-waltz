'use strict';

var nav = function nav() {
	// Define nav target
	var navItems = document.body.querySelectorAll('.js-nav-main a');

	// Loop through nav items

	var _loop = function _loop(i) {
		// Define target based on nav item class name
		var item = navItems[i],
		    target = item.className.split('-')[1];

		// When a nav item is clicked
		item.addEventListener('click', openWindow, false);

		// Apply a class to the related window
		function openWindow(evt) {
			evt.preventDefault();

			var overlay = document.body.querySelector('.' + target);
			overlay.classList.toggle('active');
		}
	};

	for (var i = 0; i < navItems.length; i++) {
		_loop(i);
	}

	// Target close buttons
	var close = document.body.querySelectorAll('.js-close');

	// Loop through close buttons

	var _loop2 = function _loop2(_i) {
		var button = close[_i];

		// When a close button is clicked
		button.addEventListener('click', closeWindow, false);

		// Loop through all the windows
		function closeWindow(evt) {
			evt.preventDefault();

			var overlays = document.body.querySelectorAll('.window');
			for (var _i2 = 0; _i2 < overlays.length; _i2++) {
				// And remove the active class
				overlays[_i2].classList.remove('active');
			}
		}
	};

	for (var _i = 0; _i < close.length; _i++) {
		_loop2(_i);
	}
};

var boxes = function boxes(type) {
	// Define view target and total elements to add
	var view = document.body.querySelector('.js-boxes'),
	    total = 100,
	    time = 3000;

	var _loop3 = function _loop3(i) {
		// Create element
		var box = document.createElement('div'),
		    delay = '',
		    rand = void 0;

		// Add class name to element
		box.classList.add('box');

		// Adds animation delay as inline style to element
		function addAnimationDelay(target, delay) {
			target.setAttribute('style', 'animation-delay: ' + delay + ';');
		}

		// Sweeping animation
		if (type === 'sweep') {
			// Setup delay timing
			delay = '.' + i + 's';
			if (i <= 10) {
				delay = '.0' + i + 's';
			}

			// Execute style update
			addAnimationDelay(box, delay);

			// Add class to view
			view.classList.add('sweep');
		}

		// Random animation
		if (type === 'rand') {
			// Setup delay timing
			rand = Math.floor(Math.random() * (0 - 10)) + 10;
			delay = '.' + rand + 's';

			// Execute style update
			addAnimationDelay(box, delay);

			// Add class to view
			view.classList.add('rand');
		}

		// Add element to view
		view.appendChild(box);
	};

	for (var i = 0; i < total; i++) {
		_loop3(i);
	}

	// Add finished class after initial animation
	var timer = window.setTimeout(function () {
		view.classList.add('finished');
	}, time);
};

// Execute onload
window.onload = nav();
window.onload = boxes('rand');

// Google Analytics
(function (i, s, o, g, r, a, m) {
	i['GoogleAnalyticsObject'] = r;i[r] = i[r] || function () {
		(i[r].q = i[r].q || []).push(arguments);
	}, i[r].l = 1 * new Date();a = s.createElement(o), m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m);
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-36719192-1', 'auto');
ga('send', 'pageview');