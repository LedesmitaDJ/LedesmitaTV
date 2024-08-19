// Definir los intervalos de tiempo para cada iframe
const intervalosIframe1 = [
    { inicio: "2024-08-13T07:00:00", fin: "2024-08-13T09:00:00" },
    { inicio: "2024-08-14T08:30:00", fin: "2024-08-14T11:30:00" },
    { inicio: "2024-08-15T07:00:00", fin: "2024-08-15T09:30:00" },
    { inicio: "2024-08-15T13:00:00", fin: "2024-08-15T14:30:00" },
    { inicio: "2024-08-16T07:00:00", fin: "2024-08-16T09:30:00" },
    { inicio: "2024-08-17T09:00:00", fin: "2024-08-17T14:30:00" },
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