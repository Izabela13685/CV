// Tryb jasny/ciemny
const toggleTheme = document.getElementById('toggle-theme');

// Funkcja przełączania trybu jasny/ciemny
toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme'); // Dodanie/Usunięcie klasy dark-theme

    // Zmiana tekstu przycisku w zależności od trybu
    if (document.body.classList.contains('dark-theme')) {
        toggleTheme.textContent = '🌞 Tryb jasny';
    } else {
        toggleTheme.textContent = '🌙 Tryb ciemny';
    }

    // Zapisanie stanu w localStorage
    const isDarkMode = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

// Ustawienie początkowego stanu przy ładowaniu strony
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        toggleTheme.textContent = '🌞 Tryb jasny';
    }
});

