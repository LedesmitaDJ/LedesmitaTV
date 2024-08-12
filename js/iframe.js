// Definir los intervalos de tiempo
const intervalos = [
    { inicio: "2024-08-13T07:00:00", fin: "2024-08-13T09:00:00" },
    { inicio: "2024-08-14T08:30:00", fin: "2024-08-14T11:30:00" },
    { inicio: "2024-08-15T07:00:00", fin: "2024-08-15T09:30:00" },
    { inicio: "2024-08-15T13:00:00", fin: "2024-08-15T14:30:00" },
    { inicio: "2024-08-16T07:00:00", fin: "2024-08-16T09:30:00" },
    { inicio: "2024-08-17T09:00:00", fin: "2024-08-17T14:30:00" },
    // Agrega más intervalos según sea necesario
];

function verificarFechaHora() {
    const iframe = document.getElementById("tvenvivo");
    const ahora = new Date();
    let mostrarIframe = false;

    // Comprobar si la hora actual está dentro de alguno de los intervalos definidos
    for (const intervalo of intervalos) {
        const fechaInicio = new Date(intervalo.inicio);
        const fechaFin = new Date(intervalo.fin);

        if (ahora >= fechaInicio && ahora <= fechaFin) {
            mostrarIframe = true;
            break;
        }
    }

    // Mostrar u ocultar el iframe según el resultado
    iframe.style.display = mostrarIframe ? "block" : "none";
}

// Llamar a la función verificarFechaHora cada segundo
setInterval(verificarFechaHora, 1000);

// Verificar inmediatamente cuando se carga la página
verificarFechaHora();