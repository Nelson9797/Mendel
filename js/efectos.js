document.addEventListener('DOMContentLoaded', function() {
    const enlacesCiudad = document.querySelectorAll('.depart a');

    enlacesCiudad.forEach(function(enlace) {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();

            // Restablece el estilo de todos los elementos destino removiendo el span
            document.querySelectorAll('.column.middle h3 span.custom-style').forEach(function(span) {
                let parent = span.parentNode;
                while (span.firstChild) parent.insertBefore(span.firstChild, span);
                parent.removeChild(span);
                parent.style.backgroundColor = ''; // Restablece el fondo
                parent.style.color = ''; // Restablece el color del texto
            });

            const destinoId = this.getAttribute('href').substring(1);
            const destino = document.getElementById(destinoId);

            if (destino) {
                destino.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Envuelve el contenido de texto del destino en un span y aplica el estilo a ese span
                const contentWrapper = document.createElement('span');
                contentWrapper.classList.add('custom-style'); // Agrega una clase para facilitar la identificación
                contentWrapper.style.backgroundColor = 'rgb(100,100,100)'; // Fondo celeste
                contentWrapper.style.color = 'white'; // Letra blanca

                while (destino.firstChild) contentWrapper.appendChild(destino.firstChild);
                destino.appendChild(contentWrapper);

                // Restablece el estilo después de 3000 milisegundos
                setTimeout(function() {
                    while (contentWrapper.firstChild) destino.insertBefore(contentWrapper.firstChild, contentWrapper);
                    destino.removeChild(contentWrapper);
                    destino.style.backgroundColor = ''; // Opcional: Restablece el fondo del h3 si es necesario
                    destino.style.color = ''; // Opcional: Restablece el color del texto del h3 si es necesario
                }, 3000); // Tiempo en milisegundos antes de restablecer el estilo
            }
        });
    });
});




let soporteOriginalParent, registrarOriginalParent, vuelosOriginalParent;

document.addEventListener('DOMContentLoaded', function() {
  // Guardar las referencias de los padres originales
  soporteOriginalParent = document.querySelector('.soporte').parentNode;
  registrarOriginalParent = document.querySelector('.registrar').parentNode;
  vuelosOriginalParent = document.querySelector('.active').parentNode;

  // Ejecutar inmediatamente para configurar la página
  moverElementosAMenu();

  // Manejar eventos de redimensionamiento de ventana
  let resizeTimeout;
  window.onresize = function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(moverElementosAMenu, 100);
  };
});

function moverElementosAMenu() {
  const esMovil = window.innerWidth < 800;
  const menuMas = document.querySelector('.dropdown-content');
  let soporte = document.querySelector('.soporte');
  let registrar = document.querySelector('.registrar');
  let vuelos = document.querySelector('.active');

  if (esMovil) {
    // Mover elementos al menú desplegable
    [soporte, registrar, vuelos].forEach(el => {
      if (el && el.parentNode) {
        el.parentNode.removeChild(el);
      }
      menuMas.appendChild(el);
    });
  } else {
    // Devolver elementos a su posición original
    soporteOriginalParent.appendChild(soporte);
    registrarOriginalParent.appendChild(registrar);
    vuelosOriginalParent.appendChild(vuelos);
  }
}





  



// Para países y sus banderas
function changeFlag(newFlagSrc, newLocation) {
  document.getElementById('banderaActual').src = newFlagSrc;
  window.location.href = newLocation;
}