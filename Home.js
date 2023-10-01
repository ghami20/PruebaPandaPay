
window.onload=function(){
    Ventas("inicio");
    
    intervalo = setTimeout(function () {
        cargarTabla();
      }, 10); // Intervalo de 1 segundo
    
    
}

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

function selectOption(option) {
 
    // Obtén el nombre de la página según la opción seleccionada
    var nombrePagina = "";
    switch (option.textContent) {
        case "Inicio":
            nombrePagina = "inicio";
            break;
        case "Ventas":
            nombrePagina = "ventas";
            break;
        case "Ventas/Total":
            nombrePagina = "ventasTotal";
            break;
        case "Liquidación":
                nombrePagina = "liquidacion";
                break;
        case "Comprobantes":
            nombrePagina = "comprobante";
            break;
        case "Enviar Dinero":
            nombrePagina = "enviarDinero";
            break;
        case "Pago de Servicios":
            nombrePagina = "pagoDeServicios";
            break;
        case "Cambiar Contraseña":
            nombrePagina = "cambiarContraseña";
            break;
        case "Salir":
            alert("xddddddd");
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

function toggleNightMode(event) {
    event.preventDefault();

    // Accede al tercer elemento <a>
    var thirdLink = document.querySelector(".nav-icon a:nth-child(3)");

    // Accede al elemento de imagen dentro del tercer <a>
    var nightModeIcon = thirdLink.querySelector(".nav-icons-img");

    // Verifica la imagen actual y cambia a la imagen correspondiente
    if (nightModeIcon) {
        var currentImageSrc = nightModeIcon.src;
        if (currentImageSrc.includes("luna.png")) {
            nightModeIcon.src = "../../../css/assets/nav/nav-icons/Sol.png";
        } else {
            nightModeIcon.src = "../../../css/assets/nav/nav-icons/luna.png";
        }
    }

    // Agrega o quita la clase 'night-mode' al elemento HTML <html> según sea necesario
    document.documentElement.classList.toggle('night-mode');
}

        
        // function toggleNightMode() {
        //     htmlElement.classList.toggle('night-mode');
        // }      
//----------------------Función para obtener la fecha y hora actual en el formato deseado--------------------------
function obtenerFechaYHora() {
    const fechaActual = new Date();
    const dia = fechaActual.getDate().toString().padStart(2, '0');
    const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0'); // Se suma 1 porque enero es 0
    const año = fechaActual.getFullYear();
    const horas = fechaActual.getHours().toString().padStart(2, '0');
    const minutos = fechaActual.getMinutes().toString().padStart(2, '0');

    return `HOY ${dia}-${mes} ${horas}:${minutos}`;
}

// Resto del código para actualizar la fecha y hora, igual que antes
// Función para actualizar la fecha y hora cada segundo
function actualizarFechaYHora() {
    const fechaHoraElemento = document.getElementById('fechaActual');
    if (fechaHoraElemento) {
        fechaHoraElemento.textContent = obtenerFechaYHora();
     // Crea el elemento <hr>
     const hrElemento = document.createElement('hr');
     fechaHoraElemento.appendChild(hrElemento);

     // Agrega el texto "$0.00"
     const precioElemento = document.createElement('p');
     precioElemento.textContent = '$0.00';
     fechaHoraElemento.appendChild(precioElemento);

    }
}

// Actualiza la fecha y hora inicialmente y luego cada segundo
actualizarFechaYHora();
setInterval(actualizarFechaYHora, 1000);

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
  
  function detenerIntervalo() {
    clearInterval(intervalo); // Detener el intervalo
  }
  
  function cargarTabla() {
    var lista = document.getElementById("MiLista");
  
    for (let index = 0; index < tabla.length; index++) {
      var tr = document.createElement("tr");
      var td1 = document.createElement("td");
      var td2 = document.createElement("td");
      var td3 = document.createElement("td");
  
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