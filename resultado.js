const parametros = new URLSearchParams(window.location.search);

const estado = parametros.get("estado");
const modalidad = parametros.get("modalidad");

const mensaje = document.getElementById("resultado");
const detalle = document.getElementById("detalleResultado");
const icono = document.querySelector(".resultado-icono");

function mostrarResultado() {
    const modalidadesValidas = [
        "presencial",
        "virtual",
        "semipresencial"
    ];

    if (
        estado === "recibido" &&
        modalidadesValidas.includes(modalidad)
    ) {
        mensaje.textContent =
            "¡Tu registro se ha procesado correctamente!";

        detalle.textContent =
            "Modalidad de estudio seleccionada: " +
            modalidad.charAt(0).toUpperCase() +
            modalidad.slice(1) + ".";

        icono.textContent = "✓";
    } else {
        mensaje.textContent =
            "No se encontró una confirmación de registro válida.";

        detalle.textContent =
            "Puedes regresar al formulario e intentarlo nuevamente.";

        icono.textContent = "!";
        icono.style.backgroundColor = "#fff3cd";
        icono.style.color = "#856404";
    }
}

mostrarResultado();