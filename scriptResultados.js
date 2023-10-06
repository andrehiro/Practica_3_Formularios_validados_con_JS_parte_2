// scriptResultados.js (en la página "resultados.html")
document.addEventListener("DOMContentLoaded", function () {
    
    const tablaResultados = document.getElementById("tablaResultados");
    // Obtener los envíos almacenados en el almacenamiento local
    const envios = JSON.parse(localStorage.getItem("envios")) || [];
    var borrarBoton = document.getElementById("borrarBoton");
    var tabla = document.getElementById("tabla");

    // Recorrer los envíos y agregar filas a la tabla
    envios.forEach((envio, index) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${envio.id}</td>
            <td>${envio.nombre}</td>
            <td>${envio.apellidos}</td>
            <td>${envio.telefono}</td>
            <td>${envio.correo}</td>
            <td>${envio.edad}</td>
            <td>${envio.fechaNacimiento}</td>
            <td><button class="botonTabla" data-index="${index}">Eliminar</button></td>
        `;

        tablaResultados.appendChild(fila);
    });

    borrarTablaBoton.addEventListener("click", function() {
        localStorage.clear();
        while (tabla.rows.length > 1) {
            // Elimina todas las filas excepto la primera
            tabla.deleteRow(1); 
        }
    });
    tablaResultados.addEventListener("click", function (event) {
        if (event.target.classList.contains("botonTabla")) {
            const index = event.target.getAttribute("data-index");
            // Elimina el envío del arreglo
            envios.splice(index, 1); 
             // Elimina la fila de la tabla
            tablaResultados.deleteRow(index);
            // Actualiza el almacenamiento local
            localStorage.setItem("envios", JSON.stringify(envios)); 
        }
    });
});