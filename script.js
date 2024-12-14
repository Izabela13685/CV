const toggleTheme = document.getElementById("toggle-theme");
let isDark = false;

toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    isDark = !isDark;
    toggleTheme.textContent = isDark ? "🌙 Tryb ciemny" : "🌞 Tryb jasny";
});
