document.addEventListener('DOMContentLoaded', function () {
  const homeButton = document.getElementById('homeButton');
  const favoritesButton = document.getElementById('favoritesButton');
  const openMenuButton = document.querySelector('.js-open-menu');
  const closeMenuButton = document.querySelector('.js-close-menu');
  const mobileMenu = document.querySelector('#mobile-menu');
  const backdrop = document.querySelector('[data-menu-backdrop]');
  const menuNavLinks = document.querySelectorAll('.menu__nav-link');

  // Оголошуємо функції для відкриття та закриття меню
  function openMobileMenu() {
    mobileMenu.classList.add('is-open');
    backdrop.classList.remove('is-hidden');
    document.body.classList.add('no-scroll');
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove('is-open');
    backdrop.classList.add('is-hidden');
    document.body.classList.remove('no-scroll');
  }

  // Обробники клацання по кнопках "бургера" та "закрити"
  openMenuButton.addEventListener('click', openMobileMenu);
  closeMenuButton.addEventListener('click', closeMobileMenu);
  backdrop.addEventListener('click', closeMobileMenu);

  // Обробники клацання по пунктах меню
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

  // Встановлення активного стану для кнопок на основі поточної сторінки
  const currentPath = window.location.pathname;

  if (currentPath.includes('favorites.html')) {
    favoritesButton.classList.add('active');
  } else {
    homeButton.classList.add('active');
  }

  // Обробник клацання для кнопок "Home" і "Favorites"
  homeButton.addEventListener('click', function(event) {
    event.preventDefault();
    if (!homeButton.classList.contains('active')) {
      homeButton.classList.add('active');
      favoritesButton.classList.remove('active');
      // Додаткові дії, якщо потрібно
    }
  });

  favoritesButton.addEventListener('click', function(event) {
    event.preventDefault();
    if (!favoritesButton.classList.contains('active')) {
      favoritesButton.classList.add('active');
      homeButton.classList.remove('active');
      // Перенаправлення на сторінку "Favorites"
      window.location.href = './favorites.html';
      // Додаткові дії, якщо потрібно
    }
  });
});
