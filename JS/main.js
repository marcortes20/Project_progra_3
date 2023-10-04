document.addEventListener('DOMContentLoaded', function () {


  const openEmailModal = document.getElementById('menu_option_4');
  const emailModal = document.getElementById('emailModal');
  const closeEmailModal = document.getElementById('closeEmailModal');

  // Abre el modal cuando se hace clic en el botón de abrir
  openEmailModal.addEventListener('click', () => {
    emailModal.style.display = 'block';
  });

  // Cierra el modal cuando se hace clic en la "x" o fuera del modal
  closeEmailModal.addEventListener('click', () => {
    emailModal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target == emailModal) {
      emailModal.style.display = 'none';
    }
  });


  //desplazamiento a el apartado de productos
  document.querySelector('a[href="#start"').addEventListener('click', function (e) {
    e.preventDefault(); // Previene el comportamiento de enlace predeterminado

    const destino = document.getElementById('start');

    destino.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });

  //desplazamiento a el apartado de productos
  document.querySelector('a[href="#products"]').addEventListener('click', function (e) {
    e.preventDefault(); // Previene el comportamiento de enlace predeterminado

    const destino = document.getElementById('products');

    destino.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });

  //desplazamiento a el apartado de servicios
  document.querySelector('a[href="#services"]').addEventListener('click', function (e) {
    e.preventDefault(); // Previene el comportamiento de enlace predeterminado

    const destino = document.getElementById('services');

    destino.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });




});
