const nav = () => {
  const navItems = document.body.querySelectorAll('.js-nav-main a');

  navItems.forEach(item => {
    // Define target based on nav item class name
    const target = item.className.split('-')[1];

    // Apply a class to the related window
    const openWindow = event => {
      event.preventDefault();

      const overlay = document.body.querySelector(`.${target}`);
      overlay.classList.toggle('active');
    };

    // When a nav item is clicked
    item.addEventListener('click', openWindow, false);
  });

  const closeButtons = document.body.querySelectorAll('.js-close');

  closeButtons.forEach(button => {
    // Loop through all the windows
    const closeWindow = event => {
      event.preventDefault();

      const overlays = document.body.querySelectorAll('.window');
      overlays.forEach(overlay => {
        // And remove the active class
        overlay.classList.remove('active');
      });
    };

    // When a close button is clicked
    button.addEventListener('click', closeWindow, false);
  });
};

const boxes = type => {
  const view = document.body.querySelector('.js-boxes');
  const total = 100;
  const time = 3000;

  // Adds animation delay as inline style to element
  const addAnimationDelay = (target, delay) => {
    target.setAttribute('style', `animation-delay: ${delay};`);
  };

  for (let i = 0; i < total; i++) {
    // Create element
    const box = document.createElement('div');
    let delay = '';
    let rand = 0;

    // Add class name to element
    box.classList.add('box');

    // Sweeping animation
    if (type === 'sweep') {
      delay = `.${i}s`;
      if (i <= 10) {
        delay = `.0${i}s`;
      }

      // Execute style update
      addAnimationDelay(box, delay);
    }

    // Random animation
    if (type === 'rand') {
      rand = Math.floor(Math.random() * (0 - 10)) + 10;
      delay = `.${rand}s`;

      // Execute style update
      addAnimationDelay(box, delay);
    }

    // Add element to view
    view.appendChild(box);
  }

  // Add class to view
  view.classList.add(type);

  // Add finished class after initial animation
  const timer = window.setTimeout(() => {
    view.classList.add('finished');
  }, time);
};

// Execute onload
window.onload = () => {
  nav();
  boxes('rand');
};
