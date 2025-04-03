function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

function showMessage() {
    alert('Solicitarea ta a fost înregistrată. Un specialist te va contacta în curând.');
}

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");

    const handleScroll = () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                section.classList.add("visible");
            }
        });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
});
