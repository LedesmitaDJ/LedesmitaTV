// Función para manejar cada contador de manera independiente
function startCountdown(targetDate, timerId, daysId, hoursId, minutesId, secondsId, buttonId) {
    const countdownDate = new Date(targetDate).getTime();

    const countdownFunction = setInterval(function() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById(daysId).innerHTML = days.toString().padStart(2, '0');
        document.getElementById(hoursId).innerHTML = hours.toString().padStart(2, '0');
        document.getElementById(minutesId).innerHTML = minutes.toString().padStart(2, '0');
        document.getElementById(secondsId).innerHTML = seconds.toString().padStart(2, '0');

        if (distance < 0) {
            clearInterval(countdownFunction);
            document.getElementById(timerId).style.display = "none";
            document.getElementById(buttonId).style.display = "block";
        }
    }, 1000);
}

// Inicializa el primer contador
startCountdown("Jun 11, 2026 12:00:00", "timer1", "days1", "hours1", "minutes1", "seconds1", "liveButton1");

// Inicializa el segundo contador (puedes cambiar la fecha)
startCountdown("Oct 11, 2025 20:00:00", "timer2", "days2", "hours2", "minutes2", "seconds2", "liveButton2");

// Inicializa el tercer contador (puedes cambiar la fecha)
startCountdown("Dec 31, 2025 15:00:00", "timer3", "days3", "hours3", "minutes3", "seconds3", "liveButton3");

// Inicializa el cuarto contador (puedes cambiar la fecha)
startCountdown("Oct 2, 2024 10:42:59", "timer4", "days4", "hours4", "minutes4", "seconds4", "liveButton4");