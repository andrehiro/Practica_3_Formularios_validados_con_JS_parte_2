// scriptResultados.js (en la página "resultados.html")
document.addEventListener("DOMContentLoaded", function () {
    
    const tablaResultados = document.getElementById("tablaResultados");
    // Obtener los envíos almacenados en el almacenamiento local
    const envios = JSON.parse(localStorage.getItem("envios")) || [];
    var borrarBoton = document.getElementById("borrarBoton");
    var tabla = document.getElementById("tabla");

    // Recorrer los envíos y agregar filas a la tabla
    envios.forEach((envio) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${envio.id}</td>
            <td>${envio.nombre}</td>
            <td>${envio.apellidos}</td>
            <td>${envio.telefono}</td>
            <td>${envio.correo}</td>
            <td>${envio.edad}</td>
            <td>${envio.fechaNacimiento}</td>
        `;

        tablaResultados.appendChild(fila);
    });

    borrarBoton.addEventListener("click", function() {
        localStorage.clear();
        while (tabla.rows.length > 1) {
            // Elimina todas las filas excepto la primera
            tabla.deleteRow(1); 
        }
    });
});