// Tryb jasny/ciemny
const toggleTheme = document.getElementById('toggle-theme');

// Funkcja przełączania trybu jasny/ciemny
toggleTheme.addEventListener('click', () => {
    // Dodaj lub usuń klasę `dark-theme` na body
    document.body.classList.toggle('dark-theme');

    // Zmień ikonę i tekst w przycisku
    if (document.body.classList.contains('dark-theme')) {
        toggleTheme.textContent = '🌞 Tryb jasny';
    } else {
        toggleTheme.textContent = '🌙 Tryb ciemny';
    }
});

// Zapewnienie domyślnego trybu (opcjonalnie, można zachować stan w localStorage)
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    toggleTheme.textContent = '🌞 Tryb jasny';
} else {
    document.body.classList.remove('dark-theme');
    toggleTheme.textContent = '🌙 Tryb ciemny';
}

// Zapisanie preferencji użytkownika (opcjonalnie)
toggleTheme.addEventListener('click', () => {
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});


