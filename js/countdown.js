// Función para manejar cada contador de manera independiente
function startCountdown(targetDate, timerId, daysId, hoursId, minutesId, secondsId, buttonId) {
    const countdownDate = new Date(targetDate).getTime();
    const timerElement = document.getElementById(timerId);
    const buttonElement = document.getElementById(buttonId);

    const countdownFunction = setInterval(function() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        // Si el tiempo terminó
        if (distance < 0) {
            clearInterval(countdownFunction);
            timerElement.style.display = "none";   // Oculta el contador
            buttonElement.style.display = "block"; // Muestra el botón
            return; // Sale de la función para no actualizar los números
        }

        // Si el tiempo NO ha terminado, asegura que el contador se vea y el botón no
        timerElement.style.display = "block";
        buttonElement.style.display = "none";

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById(daysId).innerHTML = days.toString().padStart(2, '0');
        document.getElementById(hoursId).innerHTML = hours.toString().padStart(2, '0');
        document.getElementById(minutesId).innerHTML = minutes.toString().padStart(2, '0');
        document.getElementById(secondsId).innerHTML = seconds.toString().padStart(2, '0');
        
    }, 1000);
}

// Inicialización de contadores
startCountdown("Jun 11, 2026 15:00:00", "timer1", "days1", "hours1", "minutes1", "seconds1", "liveButton1");
startCountdown("Jul 25, 2026 13:00:00", "timer2", "days2", "hours2", "minutes2", "seconds2", "liveButton2");
startCountdown("Mar. 29, 2026 14:00:00", "timer3", "days3", "hours3", "minutes3", "seconds3", "liveButton3");
startCountdown("Mar. 26, 2026 18:30:00", "timer4", "days4", "hours4", "minutes4", "seconds4", "liveButton4");
startCountdown("Mar. 26, 2026 17:00:00", "timer5", "days5", "hours5", "minutes5", "seconds5", "liveButton5");
startCountdown("Dec 31, 2026 16:00:00", "timer6", "days6", "hours6", "minutes6", "seconds6", "liveButton6");
startCountdown("Jan 01, 2027 00:00:00", "timer7", "days7", "hours7", "minutes7", "seconds7", "liveButton7");