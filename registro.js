const formulario = document.getElementById("formularioRegistro");
const mensaje = document.getElementById("mensajeRegistro");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    if (!formulario.checkValidity()) {
        formulario.reportValidity();
        return;
    }

    const nombre = document.getElementById("nombre").value.trim();
    const modalidad = document.getElementById("modalidad").value;

    if (nombre === "") {
        mostrarMensaje("Ingresa tus nombres correctamente.", "error");
        return;
    }

    // Simular el procesamiento del registro
    const parametros = new URLSearchParams();
    parametros.set("estado", "recibido");
    parametros.set("modalidad", modalidad);

    mostrarMensaje(
        "¡Gracias, " + nombre +
        "! Tus datos han sido validados correctamente.",
        "exito"
    );

    // Redirección simulada mediante GET
    // Solo se envían datos no sensibles en la URL
    window.location.href =
        "resultado.html?" + parametros.toString();
});

function mostrarMensaje(texto, tipo) {
    mensaje.textContent = texto;
    mensaje.className = tipo;
}