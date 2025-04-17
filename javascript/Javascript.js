document.addEventListener("DOMContentLoaded", () => {
    // Project cards overlay effect
    const projectCards = document.querySelectorAll('.custom-project-card');

    projectCards.forEach((card) => {
        const overlay = card.querySelector('.custom-overlay');

        card.addEventListener('mouseenter', () => {
            overlay.style.opacity = '1';
        });

        card.addEventListener('mouseleave', () => {
            overlay.style.opacity = '0';
        });
    });

    // Contact form validation
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (e) {
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !phone || !message) {
                e.preventDefault();
                alert("Please fill in all fields before submitting.");
            }
        });
    }
});

// Smooth scroll for anchor links
window.addEventListener("load", () => {
    document.body.classList.remove("not-loaded");
    document.body.classList.add("loaded");
});




