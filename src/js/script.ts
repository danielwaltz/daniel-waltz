import JParticles from 'jparticles';
import './mouse';

new JParticles.particle('#particles', {
  color: '#ffffff',
  num: 0.05,
  proximity: 0,
  maxSpeed: 0.5,
  parallax: true,
});

const navItems = document.body.querySelectorAll('.js-nav-main a');

navItems.forEach(item => {
  // Define target based on nav item class name
  const target = item.className.split('-')[1];

  // Apply a class to the related window
  const openWindow = event => {
    event.preventDefault();

    const overlay = document.body.querySelector(`.${target}`);
    overlay.classList.toggle('active');
    document.body.classList.toggle('window-open');
  };

  // When a nav item is clicked
  item.addEventListener('click', openWindow, false);
});

const closeButtons = document.body.querySelectorAll('.js-close');

closeButtons.forEach(button => {
  // Loop through all the windows
  const closeWindow = (event: Event) => {
    event.preventDefault();

    const overlays = document.body.querySelectorAll('.window');
    overlays.forEach(overlay => {
      // And remove the active class
      overlay.classList.remove('active');
      document.body.classList.remove('window-open');
    });
  };

  // When a close button is clicked
  button.addEventListener('click', closeWindow, false);
});
