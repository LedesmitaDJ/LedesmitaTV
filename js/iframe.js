// Definir los intervalos de tiempo para cada iframe
const intervalosIframe1 = [
    { inicio: "2024-08-20T17:00:00", fin: "2024-08-20T18:00:00" },
    { inicio: "2024-08-21T17:00:00", fin: "2024-08-21T18:00:00" },
    { inicio: "2024-08-22T17:00:00", fin: "2024-08-22T18:00:00" },
    { inicio: "2024-08-23T17:00:00", fin: "2024-08-23T18:00:00" },
    { inicio: "2024-08-24T17:00:00", fin: "2024-08-24T18:00:00" },
    { inicio: "2024-08-25T17:00:00", fin: "2024-08-25T18:00:00" },
    { inicio: "2024-08-26T17:00:00", fin: "2024-08-26T18:00:00" },
];

const intervalosIframe2 = [
    { inicio: "2024-08-20T08:55:00", fin: "2024-08-20T11:00:00" },
    { inicio: "2024-08-21T08:55:00", fin: "2024-08-21T11:00:00" },
    { inicio: "2024-08-22T08:55:00", fin: "2024-08-22T11:00:00" },
    { inicio: "2024-08-23T08:55:00", fin: "2024-08-23T11:00:00" },
    { inicio: "2024-08-24T08:55:00", fin: "2024-08-24T11:00:00" },
    { inicio: "2024-08-25T08:55:00", fin: "2024-08-25T11:00:00" },
];

function verificarFechaHora() {
    const iframe1 = document.getElementById("tvenvivo");
    const iframe2 = document.getElementById("tvsports");
    const ahora = new Date();

    // Función para comprobar los intervalos de tiempo
    function comprobarIntervalos(intervalos, iframe) {
        for (const intervalo of intervalos) {
            const fechaInicio = new Date(intervalo.inicio);
            const fechaFin = new Date(intervalo.fin);

            if (ahora >= fechaInicio && ahora <= fechaFin) {
                iframe.style.display = "block";
                return;
            }
        }
        iframe.style.display = "none";
    }

    // Verificar los intervalos para cada iframe
    comprobarIntervalos(intervalosIframe1, iframe1);
    comprobarIntervalos(intervalosIframe2, iframe2);
}

// Llamar a la función verificarFechaHora cada segundo
setInterval(verificarFechaHora, 1000);

// Verificar inmediatamente cuando se carga la página
verificarFechaHora();