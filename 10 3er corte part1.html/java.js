function agregarAlumno() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const correo = document.getElementById("correo").value;
    const extension = document.getElementById("extension").value;
  
    if (nombre && apellido && correo && extension) {
      const nombreCompleto = nombre + " " + apellido;
  
      const tabla = document.getElementById("tablaAlumnos").getElementsByTagName("tbody")[0];
      const fila = tabla.insertRow();
  
      const nombreCelda = fila.insertCell();
      const correoCelda = fila.insertCell();
      const extensionCelda = fila.insertCell();
  
      nombreCelda.textContent = nombreCompleto;
      correoCelda.textContent = correo;
      extensionCelda.textContent = extension;
  
      // Limpiar formulario
      document.getElementById("nombre").value = "";
      document.getElementById("apellido").value = "";
      document.getElementById("correo").value = "";
      document.getElementById("extension").value = "";
    } else {
      alert("Por favor, complete todos los campos.");
    }
  }