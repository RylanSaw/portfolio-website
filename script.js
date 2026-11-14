const themeToggle = document.getElementById('theme-toggle');
const contactBtn = document.getElementById('contact-btn');
const greetingMsg = document.getElementById('greeting-msg');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    themeToggle.textContent = isDark ? 'Light Mode' : 'Dark Mode';
});

contactBtn.addEventListener('click', () => {
    greetingMsg.textContent = 'Thank you for visiting! Feel free to reach out via GitHub or LinkedIn.';
});
