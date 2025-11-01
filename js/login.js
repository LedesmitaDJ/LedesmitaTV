// Definir el objeto usuarios con pares válidos de nombre de usuario-contraseña
var users = {
    "admin": "admin",
    "LedesmitaTV": "LedesmitaTV25",
    "admin1": "admin",
    "LedesmitaTVPremium": "LedesmitaTV2025"
};

function check(form) {
    var userid = form.userid.value;
    var password = form.pswrd.value;
    // Comprueba si el nombre de usuario y la contraseña introducidos coinciden con las entradas del objeto usuarios
    if (users.hasOwnProperty(userid) && users[userid] === password) {
        alert("Inicio de sesión exitoso para " + userid);

        // Redirigir a la página adecuada después de iniciar sesión con éxito
        if (userid === "admin1") {
            window.location = "go:Home";
        } else if (userid === "LedesmitaTV") {
            window.location = "go:Home";
        } else if (userid === "admin") {
            window.location = "go:Home-Pro";
        } else if (userid === "LedesmitaTVPremium") {
            window.location = "go:Home-Pro";
        }
    } else {
        // Mostrar mensaje de error si las credenciales son incorrectas
        alert("Usuario y/o contraseña son incorrectas");
    }
}