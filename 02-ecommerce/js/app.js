// Bootstrap en su propia API también tiene eventos.
// Para verlos, ir al navegador, herramientas para desarrolladores (F12), pestaña Console,
// escribir bootstrap y pulsar Intro dos veces.
// Donde aparece Modal, desplegar y ver EVENT_KEY.
// Vemos que los eventos terminan con .bs.modal, acompañados del prototype correspondiente.
// Por ejemplo, existe en el prototype show, entonces su evento es:
// show.bs.modal
const modalImagen = document.querySelector('#modal-imagen');

modalImagen.addEventListener('show.bs.modal', function (event) {
  // Para saber a qué imagen hemos dado click
  console.log(event.relatedTarget);
  const enlace = event.relatedTarget;
  const rutaImagen = enlace.getAttribute('data-bs-imagen');

  console.log(rutaImagen);
});
