document.addEventListener('DOMContentLoaded', function () {

  fetch('./JS/mocks/gucci_sales.json')
    .then(response => response.json())
    .then(landingpage => {
      load_header(landingpage);
      load_main(landingpage);
      load_footer(landingpage);

    })






  function load_header(header_information) {

    const company_name = document.getElementById('company_name');

    company_name.textContent = header_information.company_name;

    header_information.options_header.forEach(option => {
      // obtenemos cada uno de los enlaces del menú principal
      document.getElementById(`menu_option_${option.id}`).textContent = option.name;

    });

    header_information.icons_header.forEach(option => {
      // obtenemos cada uno de los iconos del menú principal
      document.getElementById(`icon_header_${option.id}`).src = option.path;

    });

  }



  function load_main(main_information) {

    //variables de la seccion 1 del main
    const title_section_1 = document.getElementById('title_secction_1');
    const paragraph = document.getElementById('paragraph_section_1');
    const img_section_1 = document.getElementById('img_section_1');

    //cargar seccion 1 del main
    title_section_1.textContent = main_information.section_1.title;
    paragraph.textContent = main_information.section_1.paragraph;
    img_section_1.src = main_information.section_1.img;


    //variables de la seccion 2 del main
    const img = document.getElementById('picture-content_two');
    const discount = document.getElementById('content-discount');
    const description_product = document.getElementById('description_product');
    const price_product = document.getElementById('price_product');
    const size_product = document.getElementById('size_product');


    //inicializar una imagen por default
    img.src = main_information.section_2.products[0].url;


    main_information.section_2.products.forEach(option => {
      // obtenemos cada uno de los enlaces de la lista de productos
      document.getElementById(`button_${option.id}`).addEventListener("click", () => {
        // Cambia la opacidad de la imagen a 0 (invisible)
        img.style.opacity = 0;
        // Después de un breve retraso, cambia la imagen y restaura la opacidad
        setTimeout(() => {
          img.src = option.url; // Cambia la imagen
          discount.textContent = option.discount;
          img.style.opacity = 1; // Restaura la opacidad
          description_product.textContent = option.description;
          price_product.textContent = option.price;
          size_product.textContent = option.size;
        }, 500);
      });

    });


    //variables de la seccion 3
    const title_content_three = document.getElementById('title_content_three');

    //cargando seccion 3
    title_content_three.textContent = main_information.section_3.title;
    main_information.section_3.images.forEach(option => {
      // obtenemos cada uno de los enlaces de la lista de productos
      document.getElementById(`content_three_img_${option.id}`).src = option.img
    });




    //declarando variables seccion 4
    const title_content_four = document.getElementById('title_content_four');
    const picture_content_four = document.getElementById('picture_content_four');

    //cargando seccion 4
    title_content_four.textContent = main_information.section_4.title;
    picture_content_four.src = main_information.section_4.img;

    main_information.section_4.services.forEach(option => {
      //cargamos cada titulo y parafo de los servicios
      document.getElementById(`ico${option.id}`).src = option.ico
      document.querySelector(`#service_content_${option.id} h3`).textContent = option.service_title;
      document.querySelector(`#service_content_${option.id} p`).textContent = option.text;
    });


  }


  function load_footer(footer_information) {

    footer_information.footer.footer_sections.forEach(option => {

      //obtengo los titulos de cada columna y les doy su texto (hay 3 secciones)
      document.querySelector(`#footer_section_${option.id} h3`).textContent = option.title;
      

      const footer_options = document.querySelectorAll(`#list_${option.id} li a`);
      //optengo los a de cada columna del footer y luego los recorro para llenarlos
      footer_options.forEach((item, indice) => {

        item.textContent = option.items[indice].text;

      });

    });

    footer_information.footer.footer_icons.forEach(icons => {

      document.getElementById(`footer_ico_${icons.id}`).src = icons.url;

    });

  }


});
