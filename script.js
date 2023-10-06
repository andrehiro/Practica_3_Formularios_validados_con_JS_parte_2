document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario");
    const mensajeError = document.getElementById("mensajeError");


    formulario.addEventListener("submit", function (event) {
        event.preventDefault();


        // Obtener los valores de los campos
        const id = formulario.id.value;
        const nombre = formulario.nombre.value;
        const apellidos = formulario.apellidos.value;
        const telefono = formulario.telefono.value;
        const correo = formulario.correo.value;
        const edad = formulario.edad.value;
        const fechaNacimiento = formulario.fechaNacimiento.value;

        // Crear un objeto con los datos del envío
        const envio = {
            id,
            nombre,
            apellidos,
            telefono,
            correo,
            edad,
            fechaNacimiento
        };

        

        // Validar ID (5 dígitos exactos)
        if (!/^\d{5}$/.test(id)) {
            mensajeError.textContent = "El ID debe tener 5 dígitos exactos.";
            return;
        }


        // Validar nombre y apellidos (no pueden estar vacíos)
        if (nombre.trim() === "" || apellidos.trim() === "") {
            mensajeError.textContent = "El nombre y los apellidos no pueden estar vacíos.";
            return;
        }


        // Validar teléfono (###)###-####
        if (!/^\(\d{3}\)\d{3}-\d{4}$/.test(telefono)) {
        mensajeError.textContent = "El teléfono debe tener el formato (###)###-####.";
        return;
    }


    // Validar correo electrónico
    if (!/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(correo)) {
        mensajeError.textContent = "El correo electrónico no es válido.";
        return;
    }


    // Validar edad (número positivo)
    const edadNum = parseInt(edad);
    if (isNaN(edadNum) || edadNum <= 0) {
        mensajeError.textContent = "La edad debe ser un número positivo.";
        return;
    }


    // Validar fecha de nacimiento (AAAA-MM-DD)
    if (!/^\d{4}-\d{2}-\d{2}$/.test(fechaNacimiento)) {
        mensajeError.textContent = "La fecha de nacimiento debe tener el formato AAAA-MM-DD.";
        return;
    }


    // Si todas las validaciones pasaron, puedes enviar el formulario o realizar otras acciones aquí
    mensajeError.textContent = "Formulario enviado con éxito.";

        // Obtener o inicializar un arreglo de envíos (puedes usar el almacenamiento local para mantener los envíos)
        const envios = JSON.parse(localStorage.getItem("envios")) || [];
        // Agregar el nuevo envío al arreglo
        envios.push(envio);
        // Guardar el arreglo actualizado en el almacenamiento local
        localStorage.setItem("envios", JSON.stringify(envios));
        // Redireccionar a la página de resultados
        window.location.href = "resultados.html";
});
});