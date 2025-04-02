// Toggle the menu on mobile view
function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show"); // Toggle the 'show' class
}

// Intersection Observer for fade-in effect
document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // Optionally stop observing once element has appeared
            }
        });
    }, { threshold: 0.5 }); // Trigger fade-in when 50% of element is visible

    fadeElements.forEach(element => observer.observe(element));
});
