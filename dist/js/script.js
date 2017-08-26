'use strict';

var nav = function nav() {
  var navItems = document.body.querySelectorAll('.js-nav-main a');

  navItems.forEach(function (item) {
    // Define target based on nav item class name
    var target = item.className.split('-')[1];

    // Apply a class to the related window
    var openWindow = function openWindow(event) {
      event.preventDefault();

      var overlay = document.body.querySelector('.' + target);
      overlay.classList.toggle('active');
    };

    // When a nav item is clicked
    item.addEventListener('click', openWindow, false);
  });

  var closeButtons = document.body.querySelectorAll('.js-close');

  closeButtons.forEach(function (button) {
    // Loop through all the windows
    var closeWindow = function closeWindow(event) {
      event.preventDefault();

      var overlays = document.body.querySelectorAll('.window');
      overlays.forEach(function (overlay) {
        // And remove the active class
        overlay.classList.remove('active');
      });
    };

    // When a close button is clicked
    button.addEventListener('click', closeWindow, false);
  });
};

var boxes = function boxes(type) {
  var view = document.body.querySelector('.js-boxes');
  var total = 100;
  var time = 3000;

  // Adds animation delay as inline style to element
  var addAnimationDelay = function addAnimationDelay(target, delay) {
    target.setAttribute('style', 'animation-delay: ' + delay + ';');
  };

  for (var i = 0; i < total; i++) {
    // Create element
    var box = document.createElement('div');
    var delay = '';
    var rand = 0;

    // Add class name to element
    box.classList.add('box');

    // Sweeping animation
    if (type === 'sweep') {
      delay = '.' + i + 's';
      if (i <= 10) {
        delay = '.0' + i + 's';
      }

      // Execute style update
      addAnimationDelay(box, delay);
    }

    // Random animation
    if (type === 'rand') {
      rand = Math.floor(Math.random() * (0 - 10)) + 10;
      delay = '.' + rand + 's';

      // Execute style update
      addAnimationDelay(box, delay);
    }

    // Add element to view
    view.appendChild(box);
  }

  // Add class to view
  view.classList.add(type);

  // Add finished class after initial animation
  var timer = window.setTimeout(function () {
    view.classList.add('finished');
  }, time);
};

// Execute onload
window.onload = function () {
  nav();
  boxes('rand');
};