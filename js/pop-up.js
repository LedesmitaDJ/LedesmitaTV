 // Función para mostrar o ocultar el pop-up basado en horarios específicos
 function checkPopupVisibility() {
    const now = new Date();

    // Define los horarios de apertura y cierre (hora, minuto, segundo)
    const openTime = new Date();
    openTime.setHours(20, 0, 0); // 08:00:00 PM

    const closeTime = new Date();
    closeTime.setHours(5, 0, 0); // 05:00:00 AM

    if (now >= openTime && now <= closeTime) {
        document.getElementById('popup').classList.add('show');
        document.getElementById('overlay').classList.add('show');
    } else {
        document.getElementById('popup').classList.remove('show');
        document.getElementById('overlay').classList.remove('show');
    }
}

// Llamar a la función al cargar la página
window.onload = function() {
    checkPopupVisibility();
}

// Funcionalidad para cerrar el pop-up
document.getElementById('close-btn').onclick = function() {
    document.getElementById('popup').classList.remove('show');
    document.getElementById('overlay').classList.remove('show');
}
document.getElementById('yes-btn').onclick = function() {
    document.getElementById('popup').classList.remove('show');
    document.getElementById('overlay').classList.remove('show');
}