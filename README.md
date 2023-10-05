# Practica_3_Formularios_validados_con_JS_parte_2
Andre Alexander Hidrogo Rocha 05/10/2023 Continuacion del formulario validado con un script en JS

### Explique los arreglos en JavaScript


### Explique el almacenamiento del navegador (sessionStorage y localStorage) indique ventajas y desventajas, capacidad de almacenamiento y como accederlo utilizando java script (como almacenar, recuperar y eliminar datos)

El almacenamiento en el navegador web es una característica que permite a las aplicaciones web almacenar datos en el dispositivo del usuario.

**localStorage**

**Ventajas**

•	Los datos se mantienen a través de sesiones y recargas de página, estos no tienen una fecha de caducidad.

•	Es útil para almacenar preferencias del usuario y datos que deben persistir a lo largo del tiempo.

**Desventajas**

•	Capacidad de almacenamiento limitada.

•	No es adecuado para datos sensibles, ya que los datos almacenados son accesibles desde JavaScript y pueden ser modificados por el usuario.

**Capacidad de Almacenamiento:** Aproximadamente 5-10 MB, aunque esto puede variar según el navegador y la configuración del usuario.

**Acceso desde JavaScript:**

**Almacenar datos**: sessionStorage.setItem('clave', 'valor');

**Recuperar datos:** var valor = sessionStorage.getItem('clave');

**Eliminar datos:** localStorage.removeItem('clave');

**sessionStorage**

**Ventajas**

•	Los datos se eliminan automáticamente al final de la sesión del navegador, lo que es útil para datos temporales y sensibles.

•	La eliminación de datos también ayuda al ahorro de espacio en el almacenamiento.

**Desventajas**

•	Tiene una capacidad de almacenamiento limitada.

•	No es adecuado para datos que deben persistir más allá de la sesión actual.

**Capacidad de Almacenamiento:** Aproximadamente 5-10 MB, aunque esto puede variar según el navegador y la configuración del usuario.

**Acceso desde JavaScript:**

**Almacenar datos:** sessionStorage.setItem('clave', 'valor');

**Recuperar datos:** var valor = sessionStorage.getItem('clave');

**Eliminar datos:** sessionStorage.removeItem('clave');

### ¿Qué es JSON?

JSON (JavaScript Object Notation) es un formato de texto que forma parte del sistema de JavaScript y que se deriva de su sintaxis, pero no tiene como objetivo la creación de programas, sino el acceso, almacenamiento e intercambio de datos.

### ¿Qué hacen las funciones JSON.parse() y JSON.stringify()?

**JSON.parse()**

Se utiliza para analizar o deserializar una cadena JSON en un objeto JavaScript. Es decir, toma una cadena JSON válida como entrada y la convierte en un objeto JavaScript o en otro tipo de dato válido en JavaScript.

**JSON.stringify()**

Se utiliza para serializar un objeto JavaScript en una cadena JSON válida. Es decir, toma un objeto JavaScript y lo convierte en una cadena JSON que puede enviarse a través de una red, almacenarse en un archivo o utilizarse de diversas maneras.

### ¿Cómo funciona window.location.href?

Es una propiedad en JavaScript que se utiliza para obtener o establecer la URL actual de la página web en la que se encuentra el código JavaScript. 

**Obtener la URL actual:** var urlActual = window.location.href;

**Redireccionar a una nueva URL:** window.location.href = "https://www.ejemplo.com";

### Explique el funcionamiento de scriptResultados.js

Lo que hace el script es lo siguiente:

•	Espera a que la página HTML se cargue por completo (DOMContentLoaded).

•	Obtiene una referencia a la tabla de resultados en la página (const tablaResultados = document.getElementById("tablaResultados");).

•	Recupera datos previamente almacenados en el almacenamiento local del navegador (const envios = JSON.parse(localStorage.getItem("envios")) || [];).

•	Por último, Itera a través de los envíos y agrega filas a la tabla para mostrar los datos. Cada fila contiene información de un envío, y se muestra en la tabla.

En pocas palabras en script muestra los datos almacenados en el almacenamiento local del navegador con un formato de tabla.
