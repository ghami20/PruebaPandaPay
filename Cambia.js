function selectOption(button) {
    // Obtén el nombre de la página correspondiente al botón clicado
    var nombrePagina = "";
    
    // Obtén el texto del primer div dentro del botón
    var textoBoton = button.querySelector("div:first-child").textContent;

    switch (textoBoton) {
        case "VENTAS":
            nombrePagina = "ventas.html";
            break;
        case "VENTAS/TOTAL":
            nombrePagina = "ventasTotal.html";
            break;
        case "LIQUIDACION":
            nombrePagina = "liquidacion.html";
            break;
        case "COMPROBANTES":
            nombrePagina = "comprobante.html";
            break;
        case "ENVIAR DINERO":
            nombrePagina = "enviarDinero.html";
            break;
        case "PAGO DE SERVICIOS":
            nombrePagina = "pagoDeServicios.html";
            break;
        default:
            nombrePagina = "inicio.html";
            break;
    }
    
    // Redirige a la página correspondiente
    Ventas(nombrePagina);
}
        
        function Ventas(nombrePagina) {
            

    var xhr = new XMLHttpRequest();
    xhr.open("GET", nombrePagina + ".html", true);
    xhr.onload = function () {
        if (xhr.status == 200) {
            document.getElementById("content").innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}