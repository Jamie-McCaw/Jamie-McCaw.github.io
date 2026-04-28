(function () {
  var hamburger = document.getElementById('nav-hamburger');
  var mobileMenu = document.getElementById('nav-mobile-menu');

  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', function () {
    var isOpen = mobileMenu.classList.contains('is-open');

    if (isOpen) {
      mobileMenu.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
      hamburger.querySelector('i').className = 'fas fa-bars';
    } else {
      mobileMenu.classList.add('is-open');
      hamburger.setAttribute('aria-expanded', 'true');
      mobileMenu.setAttribute('aria-hidden', 'false');
      hamburger.querySelector('i').className = 'fas fa-times';
    }
  });

  // Close menu when a mobile link is tapped
  var mobileLinks = document.querySelectorAll('.nav-mobile-link');
  mobileLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      mobileMenu.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
      hamburger.querySelector('i').className = 'fas fa-bars';
    });
  });
})();
