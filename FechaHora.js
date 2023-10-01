 // Datos en formato de objeto JavaScript
 var data = [
    {
        "fecha": "2023-09-08",
        "aprobadasTotal": "12/12",
        "total": "Cuenta B"
    },
    {
        "fecha": "2023-09-07",
        "aprobadasTotal": "16/16",
        "total": "Cuenta C"
    }
];

// Función para cargar los datos en la tabla
window.onload=function () {
    var tabla = $("#miTabla tbody");
    tabla.empty();
    $.each(data, function(index, venta) {
        var fila = $("<tr>");
        var fechaCell = $("<td>").text(venta.fecha);
        var aprobadasCell = $("<td>").text(venta.aprobadasTotal);
        var totalCell = $("<td>").text(venta.total);
        fila.append(fechaCell, aprobadasCell, totalCell);
        tabla.append(fila);
    });
}

// Llamamos a la función para cargar los datos en la tabla cuando el documento esté listo
$(document).ready(function() {
    cargarDatosEnTabla();
});


function obtenerFechaYHora() {
    const fechaActual = new Date();
    const dia = fechaActual.getDate().toString().padStart(2, '0');
    const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0');
    const año = fechaActual.getFullYear();
    const horas = fechaActual.getHours().toString().padStart(2, '0');
    const minutos = fechaActual.getMinutes().toString().padStart(2, '0');
    return `HOY ${dia}-${mes} ${horas}:${minutos}`;
}

function actualizarFechaYHora() {
    const fechaHoraElemento = document.getElementById('fechaActual');
    if (fechaHoraElemento) {
        fechaHoraElemento.textContent = obtenerFechaYHora();
    }
}

actualizarFechaYHora();
setInterval(actualizarFechaYHora, 1000);


  
function showSlide(n) {
    const slides = document.getElementsByClassName("slide");
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

function changeSlide(n) {
    slideIndex += n;
    showSlide(slideIndex);
}

setInterval(() => changeSlide(1), 3000);

const htmlElement = document.getElementById('html');
