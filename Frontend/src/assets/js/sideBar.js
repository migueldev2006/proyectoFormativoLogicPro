// src/assets/js/sideBar.js
// Función para cargar el navbar
function loadNavbar() {
  fetch("src/navbar.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("navbarContainer").innerHTML = html;
    })
    .catch((err) => console.warn("Algo salió mal al cargar el navbar.", err));
}

// Función para cargar los módulos
function loadModule(modulePath) {
  fetch(modulePath)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("moduleContainer").innerHTML = html;

<<<<<<< HEAD
      // Inicializa DataTables si estamos cargando el módulo de usuarios

      if (modulePath.includes('entradaBodega.html')) {
        // Inicializa después de que el contenido ha sido agregado al DOM
        setTimeout(initializeDataTable, 100);
        }  // Espera para asegurarse de que el DOM esté listo
      if (modulePath.includes('salidaBodega.html')) {
        // Inicializa después de que el contenido ha sido agregado al DOM
        setTimeout(initializeDataTable, 100);  // Espera para asegurarse de que el DOM esté listo
      }
      if (modulePath.includes('verificacion.html')) {
        // Inicializa después de que el contenido ha sido agregado al DOM
        setTimeout(initializeDataTable, 100);  // Espera para asegurarse de que el DOM esté listo
      }
      if (modulePath.includes('peticiones.html')) {
        // Inicializa después de que el contenido ha sido agregado al DOM
        setTimeout(initializeDataTable, 100);  // Espera para asegurarse de que el DOM esté listo
      }
      if (modulePath.includes('acerca_de.html')) {
        // Inicializa después de que el contenido ha sido agregado al DOM
        setTimeout(initializeDataTable, 100);  // Espera para asegurarse de que el DOM esté listo
      }
     
=======
>>>>>>> 6bcaf326221f14d388587637d787d0b226174102
      if (modulePath.includes('usuarios.html')) {
        setTimeout(initializeDataTable, 100);
      }
      if (modulePath.includes('centros.html')) {
        setTimeout(initializeDataTable, 100); 
      }
      if (modulePath.includes('sedes.html')) {
        setTimeout(initializeDataTable, 100);  
      }
      if (modulePath.includes('programaFormacion.html')) {
        setTimeout(initializeDataTable, 100);  
      }
      if (modulePath.includes('fichas.html')) {
        setTimeout(initializeDataTable, 100);  
      }
      if (modulePath.includes('areas.html')) {
        setTimeout(initializeDataTable, 100);  
      }
      if (modulePath.includes('sitios.html')) {
        setTimeout(initializeDataTable, 100); 
      }
      if (modulePath.includes('tipoDeSitios.html')) {
        setTimeout(initializeDataTable, 100);  
      }
      if (modulePath.includes('municipio.html')) {
        setTimeout(initializeDataTable, 100);  
<<<<<<< HEAD
=======
      }
      if (modulePath.includes('entradaBodega.html')) {
        setTimeout(initializeDataTable, 100);
        }  
      if (modulePath.includes('salidaBodega.html')) {
        setTimeout(initializeDataTable, 100);  
      }
      if (modulePath.includes('verificacion.html')) {
        setTimeout(initializeDataTable, 100);  
      }
      if (modulePath.includes('peticion.html')) {
        setTimeout(initializeDataTable, 100);
      }
      if (modulePath.includes('inicio.html')) {
        setTimeout(initializeDataTable, 100);
>>>>>>> 6bcaf326221f14d388587637d787d0b226174102
      }
    })
    .catch((err) => console.warn("Algo salió mal al cargar el módulo.", err));
}

// Función para inicializar DataTables en la tabla con ID #example
function initializeDataTable() {
  const dataTable = new simpleDatatables.DataTable("#example", {
    searchable: true,
    fixedHeight: true,
<<<<<<< HEAD
    perPage: 4,
    sortable: false,
=======
    perpage:4,
    sortable: false,
    paging: true,
>>>>>>> 6bcaf326221f14d388587637d787d0b226174102
  });
}

// Manejo del botón de menú hamburguesa
document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("sidebar").classList.toggle("collapsed");
  document.getElementById("mainContent").classList.toggle("collapsed");
});
// Inicializar el navbar al cargar la página
document.addEventListener("DOMContentLoaded", loadNavbar);

// Inicializa los submenús colapsables de Bootstrap
document.querySelectorAll(".collapse").forEach((collapse) => {
  collapse.addEventListener("shown.bs.collapse", function () {
    this.classList.add("show");
  });
  collapse.addEventListener("hidden.bs.collapse", function () {
    this.classList.remove("show");
  });
});


