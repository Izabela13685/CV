// Tryb ciemny/jasny
const toggleThemeBtn = document.getElementById('toggle-theme');

toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    const isDarkMode = document.body.classList.contains('dark-theme');
    toggleThemeBtn.textContent = isDarkMode ? '☀️ Tryb jasny' : '🌙 Tryb ciemny';
});
