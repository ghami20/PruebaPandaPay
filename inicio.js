document.addEventListener("DOMContentLoaded", function() {
    // Tu código JavaScript aquí
    // Puedes interactuar con el DOM y realizar otras acciones

        iniciarIntervalo();
     
  });


function Abrir() {
    var boton = event.target.parentNode;

    // Acceder al valor del atributo onclick
    var valorOnclick = boton.getAttribute('value');

// Imprimir el valor en la consola
var string=valorOnclick;
    // Obtén el nombre de la página según la opción seleccionada
    var nombrePagina = "";
    switch (string) {
        case "Inici":
            nombrePagina = "inicio";
            break;
        case "Venta":
            nombrePagina = "ventas";
            break;
        case "Vento":
            nombrePagina = "ventasTotal";
            break;
        case "Liqui":
                nombrePagina = "liquidacion";
                break;
        case "Compr":
            nombrePagina = "comprobante";
            break;
        case "Envdi":
            nombrePagina = "enviarDinero";
            break;
        case "Pagse":
            nombrePagina = "pagoDeServicios";
            break;
            return; // No se carga ninguna página en este caso
        default:
            nombrePagina = "inicio";
            return;
    }

    document.getElementById("content").innerHTML = '';
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


var tabla = [
    {
      fecha: "2023-09-01",
      aprobadas: "20/25",
      total: 1000.00,
    },
    {
      fecha: "2023-08-06",
      aprobadas: "10/25",
      total: 900.00,
    },
    {
      fecha: "2022-12-24",
      aprobadas: "20/25",
      total: 1000.00,
    },
  ];
  
  var intervalo; // Variable para almacenar el intervalo
  
  function iniciarIntervalo() {
    intervalo = setInterval(function () {
      cargarTabla();
    }, 1); // Intervalo de 1 segundo
  }
  
  function detenerIntervalo() {
    clearInterval(intervalo); // Detener el intervalo
  }
  
  function cargarTabla() {
    var lista = document.getElementById("MiLista");
    lista.innerHTML="";
    for (let index = 0; index < tabla.length; index++) {
      var tr = document.createElement("tr");
      var td1 = document.createElement("td");
      var td2 = document.createElement("td");
      var td3 = document.createElement("td");
      tr.innerHTML="";
      td1.textContent = tabla[index].fecha;
      td2.textContent = tabla[index].aprobadas;
      td3.textContent = tabla[index].total;
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      lista.appendChild(tr);
    }
  
    detenerIntervalo(); // Detener el intervalo después de una ejecución
  }
  
  // Ejemplo de cómo usar la función
  // Iniciar el intervalo

  