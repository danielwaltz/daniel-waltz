const nav = function() {
  // Define nav target
  const navItems = document.body.querySelectorAll('.js-nav-main a');

  // Loop through nav items
  for (let i = 0; i < navItems.length; i++) {
    // Define target based on nav item class name
    const item = navItems[i];
    const target = item.className.split('-')[1];

    // When a nav item is clicked
    item.addEventListener('click', openWindow, false);

    // Apply a class to the related window
    function openWindow(evt) {
      evt.preventDefault();

      const overlay = document.body.querySelector('.' + target);
      overlay.classList.toggle('active');
    }
  }

  // Target close buttons
  const close = document.body.querySelectorAll('.js-close');

  // Loop through close buttons
  for (let i = 0; i < close.length; i++) {
    const button = close[i];

    // When a close button is clicked
    button.addEventListener('click', closeWindow, false);

    // Loop through all the windows
    function closeWindow(evt) {
      evt.preventDefault();

      const overlays = document.body.querySelectorAll('.window');
      for (let i = 0; i < overlays.length; i++) {
        // And remove the active class
        overlays[i].classList.remove('active');
      }
    }
  }
};

const boxes = function(type) {
  // Define view target and total elements to add
  const view = document.body.querySelector('.js-boxes');
  const total = 100;
  const time = 3000;

  for (let i = 0; i < total; i++) {
    // Create element
    const box = document.createElement('div');
    let delay = '';
    let rand = 0;

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
  }

  // Add finished class after initial animation
  const timer = window.setTimeout(function() {
    view.classList.add('finished');
  }, time);
};

// Execute onload
window.onload = nav();
window.onload = boxes('rand');
