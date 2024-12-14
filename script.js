// Tryb jasny/ciemny
const toggleTheme = document.getElementById('toggle-theme');

// Funkcja przełączania trybu
toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme'); // Dodaj/usuń klasę "dark-theme"

    // Aktualizuj tekst i ikonę przycisku
    if (document.body.classList.contains('dark-theme')) {
        toggleTheme.textContent = '🌞 Tryb jasny';
    } else {
        toggleTheme.textContent = '🌙 Tryb ciemny';
    }
});

