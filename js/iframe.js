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
    { inicio: "2024-08-12T20:00:00", fin: "2024-08-13T05:00:00" },
    { inicio: "2024-08-13T20:00:00", fin: "2024-08-14T05:00:00" },
    { inicio: "2024-08-14T20:00:00", fin: "2024-08-15T05:00:00" },
    { inicio: "2024-08-15T20:00:00", fin: "2024-08-16T05:00:00" },
    { inicio: "2024-08-16T20:00:00", fin: "2024-08-17T05:00:00" },
    { inicio: "2024-08-17T20:00:00", fin: "2024-08-18T05:00:00" },
    { inicio: "2024-08-18T20:00:00", fin: "2024-08-19T05:00:00" },
    { inicio: "2024-08-19T20:00:00", fin: "2024-08-20T05:00:00" },
    { inicio: "2024-08-20T20:00:00", fin: "2024-08-21T05:00:00" },
    { inicio: "2024-08-21T20:00:00", fin: "2024-08-22T05:00:00" },
    { inicio: "2024-08-22T20:00:00", fin: "2024-08-23T05:00:00" },
    { inicio: "2024-08-23T20:00:00", fin: "2024-08-24T05:00:00" },
    { inicio: "2024-08-24T20:00:00", fin: "2024-08-25T05:00:00" },
    { inicio: "2024-08-25T20:00:00", fin: "2024-08-26T05:00:00" },
    { inicio: "2024-08-26T20:00:00", fin: "2024-08-27T05:00:00" },
    { inicio: "2024-08-27T20:00:00", fin: "2024-08-28T05:00:00" },
    { inicio: "2024-08-28T20:00:00", fin: "2024-08-29T05:00:00" },
    { inicio: "2024-08-29T20:00:00", fin: "2024-08-30T05:00:00" },
    { inicio: "2024-08-30T20:00:00", fin: "2024-08-31T05:00:00" },
    { inicio: "2024-08-31T20:00:00", fin: "2024-09-01T05:00:00" },
];

function verificarFechaHora() {
    const iframe1 = document.getElementById("tvenvivo");
    const iframe2 = document.getElementById("tv18");
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