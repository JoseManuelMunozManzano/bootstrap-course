// Bootstrap en su propia API también tiene eventos.
// Para verlos, ir al navegador, herramientas para desarrolladores (F12), pestaña Console,
// escribir bootstrap y pulsar Intro dos veces.
// Donde aparece Modal, desplegar y ver EVENT_KEY.
// Vemos que los eventos terminan con .bs.modal, acompañados del prototype correspondiente.
// Por ejemplo, existe en el prototype show, entonces su evento es:
// show.bs.modal
const modalImagen = document.querySelector('#modal-imagen');

if (modalImagen) {
  modalImagen.addEventListener('show.bs.modal', function (event) {
    const enlace = event.relatedTarget;
    const rutaImagen = enlace.getAttribute('data-bs-imagen');

    // Construir la imagen
    // Los elementos usualmente se van a crear con la etiqueta en mayúsculas
    const imagen = document.createElement('IMG');
    imagen.src = `img/${rutaImagen}.jpg`;
    imagen.classList.add('img-fluid');
    imagen.alt = 'Imagen Galería';

    // Quiero mostrar la imagen en la clase modal-body
    const contenidoModal = document.querySelector('.modal-body');
    contenidoModal.appendChild(imagen);

    // console.log(imagen);
  });

  // Cuando se cierra el modal quito la imagen del Modal
  modalImagen.addEventListener('hidden.bs.modal', function () {
    const contenidoModal = document.querySelector('.modal-body');
    contenidoModal.textContent = '';
  });
}

// Necesario para usar con la clase needs-validation
// Fuente cogido de: https://getbootstrap.com/docs/5.3/forms/validation/#how-it-works
// Este código cambia muchas veces. Ir a la página y coger lo que tengan ahí.
(() => {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      'submit',
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      },
      false
    );
  });
})();
