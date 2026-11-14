// 1. Dynamic Typing Effect for Hero Roles
const roles = [
    "Unity Game Developer",
    "3D Technical Artist",
    "C# Gameplay Programmer",
    "VR & Shader Specialist"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingEl = document.getElementById("typing-text");

function typeRoles() {
    const currentRole = roles[roleIndex];
    if (isDeleting) {
        typingEl.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingEl.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = isDeleting ? 45 : 90;

    if (!isDeleting && charIndex === currentRole.length) {
        speed = 1600;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 350;
    }

    setTimeout(typeRoles, speed);
}
typeRoles();

// 2. Interactive Project Category Filter
const filterBtns = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const filterValue = btn.getAttribute("data-filter");

        projectCards.forEach((card) => {
            const categories = card.getAttribute("data-category").split(" ");
            if (filterValue === "all" || categories.includes(filterValue)) {
                card.classList.remove("hide");
            } else {
                card.classList.add("hide");
            }
        });
    });
});

// 3. Dark / Light Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    const isLight = document.body.classList.contains("light-mode");
    themeToggle.textContent = isLight ? "Dark Mode" : "Light Mode";
});

// 4. Interactive Contact Greeting
const contactBtn = document.getElementById("contact-btn");
const greetingMsg = document.getElementById("greeting-msg");

contactBtn.addEventListener("click", () => {
    greetingMsg.textContent = "Thanks for reaching out! Connect with me via GitHub (@rylansaw) or LinkedIn to discuss game dev & 3D projects.";
});

// 5. Scroll Reveal Animation
const revealElements = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    { threshold: 0.1 }
);

revealElements.forEach((el) => observer.observe(el));
            
