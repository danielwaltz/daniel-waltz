function flippers(type) {
	var view   = document.getElementsByClassName('js-flippers')[0],
		total  = 100;

	for (var i = 0; i < total; i++) {
		// Create element
		var flip  = document.createElement('div'),
			delay = '';

		// Add class name to element
		flip.classList.add('flip');

		// Sweeping animation
		if ( type == 'sweep' ) {
			delay = '.' + i + 's';
			if (i <= 10) {
				delay = '.0' + i + 's';
			}
			flip.setAttribute('style', 'animation-delay: ' + delay + ';');
		}

		// Random animation
		if ( type == 'random' ) {
			rand = Math.floor(Math.random() * (0 - 10)) + 10;
			delay = '.' + rand + 's';
			flip.setAttribute('style', 'animation-delay: ' + delay + ';');
		}

		// Setup dom
		view.appendChild(flip);
	}

	var timer = window.setTimeout(function(){
		view.classList.add('finished');
	}, 3000);
}

window.onload = flippers('random');
