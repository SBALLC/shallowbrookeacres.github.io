document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('nav-expanded');
    navMenu.classList.toggle('nav-collapsed');
  });

  // Smooth scrolling for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });

        // Close the menu if it's open (for mobile)
        if (navMenu.classList.contains('nav-expanded')) {
          navMenu.classList.remove('nav-expanded');
          navMenu.classList.add('nav-collapsed');
        }
      }
    });
  });
});
