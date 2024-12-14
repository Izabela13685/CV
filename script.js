const toggleTheme = document.getElementById('toggle-theme');

// Funkcja przełączająca tryb jasny/ciemny
toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    toggleTheme.textContent = document.body.classList.contains('dark-theme')
        ? '🌞 Tryb jasny'
        : '🌙 Tryb ciemny';
});
