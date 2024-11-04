// Preloader'ı gizle
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    preloader.style.display = "none";
});

// Arka plan müziği kontrolü
document.addEventListener("DOMContentLoaded", () => {
    const audio = document.querySelector("audio");
    audio.volume = 0.1; // Ses düzeyini azaltmak için
});