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
	for (var i = 0; i < close.length; i++) {

		// Loop through all the windows
		var closeWindow = function closeWindow(evt) {
			evt.preventDefault();

			var overlays = document.body.querySelectorAll('.window');
			for (var _i = 0; _i < overlays.length; _i++) {
				// And remove the active class
				overlays[_i].classList.remove('active');
			}
		};

		var button = close[i];

		// When a close button is clicked
		button.addEventListener('click', closeWindow, false);
	}
};

var boxes = function boxes(type) {
	// Define view target and total elements to add
	var view = document.body.querySelector('.js-boxes'),
	    total = 100,
	    time = 3000;

	for (var i = 0; i < total; i++) {

		// Adds animation delay as inline style to element
		var addAnimationDelay = function addAnimationDelay(target, delay) {
			target.setAttribute('style', 'animation-delay: ' + delay + ';');
		};

		// Sweeping animation


		// Create element
		var box = document.createElement('div'),
		    delay = '',
		    rand = void 0;

		// Add class name to element
		box.classList.add('box');if (type === 'sweep') {
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
	}

	// Add finished class after initial animation
	var timer = window.setTimeout(function () {
		view.classList.add('finished');
	}, time);
};

// Execute onload
window.onload = nav();
window.onload = boxes('rand');