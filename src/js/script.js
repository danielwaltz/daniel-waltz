import '../scss/style.scss';
import Particles from 'particlesjs';

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
      document.body.classList.toggle('window-open');
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
        document.body.classList.remove('window-open');
      });
    };

    // When a close button is clicked
    button.addEventListener('click', closeWindow, false);
  });
};

// Execute onload
window.onload = () => {
  nav();
  Particles.init({ selector: '.js-background', color: '#ffffff' });
};
