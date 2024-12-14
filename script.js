// Pobranie przycisku przełączania trybu
const toggleTheme = document.getElementById('toggle-theme');

// Funkcja przełączania trybu jasny/ciemny
function toggleDarkMode() {
    const isDarkMode = document.body.classList.toggle('dark-theme'); // Dodaj/usuń klasę "dark-theme"

    // Aktualizuj tekst i ikonę przycisku
    toggleTheme.textContent = isDarkMode ? '🌞 Tryb jasny' : '🌙 Tryb ciemny';

    // Zapisz preferencje użytkownika w localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// Przypisz funkcję do kliknięcia
toggleTheme.addEventListener('click', toggleDarkMode);

// Sprawdź zapisane preferencje w localStorage przy załadowaniu strony
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');

    // Jeśli zapisany jest tryb ciemny, ustaw odpowiednią klasę
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        toggleTheme.textContent = '🌞 Tryb jasny';
    } else {
        document.body.classList.remove('dark-theme');
        toggleTheme.textContent = '🌙 Tryb ciemny';
    }
});
