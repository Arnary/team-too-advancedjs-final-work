document.addEventListener('DOMContentLoaded', function () {
  const homeButton = document.getElementById('homeButton');
  const favoritesButton = document.getElementById('favoritesButton');
  const openMenuButton = document.querySelector('.js-open-menu');
  const closeMenuButton = document.querySelector('.menu-close__button');
  const mobileMenu = document.querySelector('#mobile-menu');
  const backdrop = document.querySelector('.backdrop');
  const menuNavLinks = document.querySelectorAll('.menu__nav-link');

  // Function to open the mobile menu
  function openMobileMenu() {
    mobileMenu.classList.add('is-open');
    backdrop.classList.remove('is-hidden');
    document.body.classList.add('no-scroll');
  }

  // Function to close the mobile menu
  function closeMobileMenu() {
    mobileMenu.classList.remove('is-open');
    backdrop.classList.add('is-hidden');
    document.body.classList.remove('no-scroll');
  }

  // Event listener for open menu button
  openMenuButton.addEventListener('click', openMobileMenu);

  // Event listener for close menu button
  closeMenuButton.addEventListener('click', closeMobileMenu);

  // Event listener for backdrop click to close menu
  backdrop.addEventListener('click', function(event) {
    if (event.target === backdrop) {
      closeMobileMenu();
    }
  });

  // Event listeners for menu navigation links
  menuNavLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
        closeMobileMenu();
      }
    });
  });

  // Setting active state based on current page
  const currentPath = window.location.pathname;

  if (currentPath.includes('favorites.html')) {
    favoritesButton.classList.add('active');
  } else {
    homeButton.classList.add('active');
  }

  // Event listener for Home button
  homeButton.addEventListener('click', function(event) {
    event.preventDefault();
    if (!homeButton.classList.contains('active')) {
      homeButton.classList.add('active');
      favoritesButton.classList.remove('active');
      // Additional actions if needed
    }
  });

  // Event listener for Favorites button
  favoritesButton.addEventListener('click', function(event) {
    event.preventDefault();
    if (!favoritesButton.classList.contains('active')) {
      favoritesButton.classList.add('active');
      homeButton.classList.remove('active');
      // Redirect to "Favorites" page
      window.location.href = './favorites.html';
      // Additional actions if needed
    }
  });
});
