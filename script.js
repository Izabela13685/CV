// Toggle Dark Mode
const toggleThemeButton = document.querySelector('#toggle-theme');
const body = document.querySelector('body');
const header = document.querySelector('header');
const sections = document.querySelectorAll('.timeline-item, .skill, .project');
const footer = document.querySelector('footer');

toggleThemeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
    sections.forEach(section => section.classList.toggle('dark-mode'));
    
    // Update button text
    if (body.classList.contains('dark-mode')) {
        toggleThemeButton.textContent = '🌞 Tryb jasny';
    } else {
        toggleThemeButton.textContent = '🌙 Tryb ciemny';
    }
});

