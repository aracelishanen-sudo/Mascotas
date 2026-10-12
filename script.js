document.addEventListener("DOMContentLoaded", function () {
    // Crear el botón para volver al inicio
    const boton = document.createElement("button");

    boton.textContent = "↑";
    boton.id = "volverInicio";
    boton.type = "button";
    boton.setAttribute("aria-label", "Volver al inicio");

    document.body.appendChild(boton);

    // Dar estilo al botón
    boton.style.position = "fixed";
    boton.style.right = "20px";
    boton.style.bottom = "20px";
    boton.style.width = "45px";
    boton.style.height = "45px";
    boton.style.border = "none";
    boton.style.borderRadius = "50%";
    boton.style.backgroundColor = "#000046";
    boton.style.color = "white";
    boton.style.fontSize = "25px";
    boton.style.cursor = "pointer";
    boton.style.display = "none";
    boton.style.zIndex = "1000";

    // Mostrar u ocultar según el desplazamiento
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            boton.style.display = "block";
        } else {
            boton.style.display = "none";
        }
    });

    // Volver al principio de la página
    boton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});