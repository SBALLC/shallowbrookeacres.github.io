function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("show");
}
document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-in");
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    });

    fadeElements.forEach(element => observer.observe(element));
});
