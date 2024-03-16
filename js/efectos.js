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






//Para efectos de la fachada para mostrar imagenes en carrucel
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
//La parte de abajo hace que cambie la imagen de forma automática
// Auto Slide   if you need auto slide ,remove the commit "//"
//var slideIndex = 0;
//showSlides();
//function showSlides() {
    //var i;
  //  var slides = document.getElementsByClassName("mySlides");
   // for (i = 0; i < slides.length; i++) {
   //     slides[i].style.display = "none";
   // }
  //  slideIndex++;
   // if (slideIndex > slides.length) { slideIndex = 1 }
   // slides[slideIndex - 1].style.display = "block";
   // setTimeout(showSlides, 2000); // Change image every 2 seconds
//}




/* Para que el avión pase de un lado a otro */

function myMove() {
  let id = null;
  const elem = document.getElementById("animate");   
  let pos = 0;
  clearInterval(id);
  elem.style.width = "50px";
  elem.style.height = "50px";
  elem.style.bottom = "0px";
  elem.style.left = "0px";


  id = setInterval(frame,7);
  function frame() {
    const maxPos = window.innerHeight - 50;
    if (pos >= maxPos) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.bottom = pos + "px"; 
      let horizontalMode = pos*2.5;
      elem.style.left=horizontalMode + "px";
      if (pos > window.innerHeight - 100) { 
        let overflow = pos - (window.innerHeight - 100);
        let newSize = 50 - overflow;
        if (newSize < 0) newSize = 0;
        elem.style.width = newSize + "px";
        elem.style.height = newSize + "px";
      }
    }
  }
}






