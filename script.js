document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const backToTopBtn = document.getElementById("backToTop");

  // Hamburger menu toggle
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

        // Close the mobile menu after clicking a link
        if (navMenu.classList.contains('nav-expanded')) {
          navMenu.classList.remove('nav-expanded');
          navMenu.classList.add('nav-collapsed');
        }
      }
    });
  });

  // Back to Top button visibility and click
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
