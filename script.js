// Tema Geçişi
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
}

// Modal Aç/Kapat
function openModal() {
    document.getElementById('gameModal').classList.add('visible');
}

function closeModal() {
    document.getElementById('gameModal').classList.remove('visible');
}
