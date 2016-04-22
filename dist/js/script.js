function flippers(type) {
	// Define view target and total elements to add
	var view   = document.getElementsByClassName('js-flippers')[0],
		total  = 100;

	for (var i = 0; i < total; i++) {
		// Create element
		var flip  = document.createElement('div'),
			delay = '';

		// Add class name to element
		flip.classList.add('flip');

		// Adds animation delay as inline style to element
		function addAnimationDelay(target, delay) {
			target.setAttribute('style', 'animation-delay: ' + delay + ';');
		}

		// Sweeping animation
		if ( type == 'sweep' ) {
			// Setup delay timing
			delay = '.' + i + 's';
			if (i <= 10) {
				delay = '.0' + i + 's';
			}

			// Execute
			addAnimationDelay(flip, delay);

			// Add class to view
			view.classList.add('sweep');
		}

		// Random animation
		if ( type == 'rand' ) {
			// Setup delay timing
			rand  = Math.floor(Math.random() * (0 - 10)) + 10;
			delay = '.' + rand + 's';

			// Execute
			addAnimationDelay(flip, delay);

			// Add class to view
			view.classList.add('rand');
		}

		// Add element to view
		view.appendChild(flip);
	}

	// Add finished class after initial animation
	var timer = window.setTimeout(function(){
		view.classList.add('finished');
	}, 3000);
}

// Execute onload
window.onload = flippers('rand');
