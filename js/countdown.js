// Función para manejar cada contador de manera independiente
function startCountdown(targetDate, timerId, daysId, hoursId, minutesId, secondsId) {
    const countdownDate = new Date(targetDate).getTime();

    const countdownFunction = setInterval(function() {
        const now = new Date().getTime();
        let distance = countdownDate - now;

        // Si la distancia es menor a 0, la forzamos a 0 para que no muestre números negativos
        if (distance < 0) {
            distance = 0;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Actualizamos los elementos en pantalla
        document.getElementById(daysId).innerHTML = days.toString().padStart(2, '0');
        document.getElementById(hoursId).innerHTML = hours.toString().padStart(2, '0');
        document.getElementById(minutesId).innerHTML = minutes.toString().padStart(2, '0');
        document.getElementById(secondsId).innerHTML = seconds.toString().padStart(2, '0');

        // Si llegó a cero, detenemos el intervalo y ejecutamos las acciones finales
        if (distance <= 0) {
            clearInterval(countdownFunction);
            document.getElementById(timerId).style.display = "block";
            document.getElementById(buttonId).style.display = "none";
        }
    }, 1000);
}

// Inicialización de contadores
startCountdown("Jun 6, 2026 15:00:00", "timer1", "days1", "hours1", "minutes1", "seconds1", "liveButton1");

startCountdown("Jan 31, 2026 17:00:00", "timer2", "days2", "hours2", "minutes2", "seconds2", "liveButton2");

startCountdown("Dec 31, 2025 15:00:00", "timer3", "days3", "hours3", "minutes3", "seconds3", "liveButton3");

startCountdown("Oct 2, 2024 10:42:59", "timer4", "days4", "hours4", "minutes4", "seconds4", "liveButton4");