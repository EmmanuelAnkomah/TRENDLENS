// Scroll effect
window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    header.classList.toggle("scrolled", window.scrollY > 50);
});

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
});

