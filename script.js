// Tryb jasny/ciemny
const toggleTheme = document.getElementById('toggle-theme');

// Przełączanie trybu jasny/ciemny
toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    toggleTheme.textContent = document.body.classList.contains('dark-theme') ? '🌞 Tryb jasny' : '🌙 Tryb ciemny';
});

// Dynamiczne paski postępu (Skills)
document.querySelectorAll('.progress-circle').forEach(circle => {
    const value = circle.dataset.value;
    circle.style.background = `conic-gradient(#3498db ${value}%, #ddd ${value}%)`;
});

