// Obsługa trybu ciemnego/jasnego
document.getElementById("toggle-theme").addEventListener("click", () => {
    const body = document.body;
    const themeButton = document.getElementById("toggle-theme");

    // Przełączanie klasy 'dark-theme'
    body.classList.toggle("dark-theme");

    // Zmiana tekstu przycisku
    if (body.classList.contains("dark-theme")) {
        themeButton.textContent = "☀️ Tryb jasny";
    } else {
        themeButton.textContent = "🌙 Tryb ciemny";
    }
});

// Formularz (przykład prostego komunikatu po wysłaniu formularza)
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault(); // Zatrzymanie domyślnej akcji
    alert("Dziękujemy za kontakt! Odpowiemy na Twoją wiadomość wkrótce.");
});
