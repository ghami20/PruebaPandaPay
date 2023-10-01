// Datos de ejemplo para enviarDinero.html
var tabla = [
    { fecha: "2023-09-29", destino: "Destino 1", cvu: "CVU12345", referencia: "Referencia 1", monto: "$100", sts: "STS1", borrar: "Borrar", rec: "Rec" },
    { fecha: "2023-09-30", destino: "Destino 2", cvu: "CVU67890", referencia: "Referencia 2", monto: "$50", sts: "STS2", borrar: "Borrar", rec: "Rec" }
];

document.addEventListener("DOMContentLoaded", function() {
        iniciarIntervalo();
});
    function iniciarIntervalo() {
        intervalo = setInterval(function () {
            cargarTabla();
        }, 1000); // Intervalo de 1 segundo (1000 milisegundos)
    }
    
    function detenerIntervalo() {
        clearInterval(intervalo); // Detener el intervalo
    }


    function cargarTabla() {
        var tbody = document.getElementById("tbbody");
        tbody.innerHTML="";
        for (let index = 0; index < tabla.length; index++) {
            var tr = document.createElement("tr");
            var tdFecha = document.createElement("td");
            var tdDestino = document.createElement("td");
            var tdCVU = document.createElement("td");
            var tdReferencia = document.createElement("td");
            var tdMonto = document.createElement("td");
            var tdSTS = document.createElement("td");
            var tdBorrar = document.createElement("td");
            var tdRec = document.createElement("td");
            
            tdFecha.textContent = tabla[index].fecha;
            tdDestino.textContent = tabla[index].destino;
            tdCVU.textContent = tabla[index].cvu;
            tdReferencia.textContent = tabla[index].referencia;
            tdMonto.textContent = tabla[index].monto;
            tdSTS.textContent = tabla[index].sts;
            tdBorrar.textContent = tabla[index].borrar;
            tdRec.textContent = tabla[index].rec;
            tr.innerHTML="";
            tr.appendChild(tdFecha);
            tr.appendChild(tdDestino);
            tr.appendChild(tdCVU);
            tr.appendChild(tdReferencia);
            tr.appendChild(tdMonto);
            tr.appendChild(tdSTS);
            tr.appendChild(tdBorrar);
            tr.appendChild(tdRec);
            
            tbody.appendChild(tr);
        }
        detenerIntervalo();
    }



var intervalo;

function abrirPagina() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET","añadirContacto.html", true);
    xhr.onload = function () {
        if (xhr.status == 200) {
            document.getElementById("content").innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}
