$(document).ready(function() {

    const iconArrow = `<svg width="20" height="27" viewBox="0 0 20 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2L16 13.5L2 25" stroke="#007DA5" stroke-width="5"/>
    </svg>
    `

    //$(".helperComplement").remove();


    $('.product-carousel .prateleira.vitrine ul').find('.helperComplement').remove();
    $('.product-carousel-last .prateleira.vitrine ul').find('.helperComplement').remove();

    $('.fullbanner').not('.slick-initialized').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: true,
        dots: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                dots: false,
            }
        }]
    });

    const shelfSlider = () =>{
      const $shelf = $('.product-carousel .prateleira.vitrine ul')
      if($shelf.children().length < 5) return
      $shelf.slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 6000,
        arrows: true,
        dots: true,
        prevArrow: `<button class="slick-prev"><i>${iconArrow}</i></button>`,
        nextArrow: `<button class="slick-next"><i>${iconArrow}</i></button>`,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false
            }
        }]
    });
    }
    shelfSlider();
    // $('.absinto .prateleira.vitrine ul').not('.slick-initialized').slick({
    //     infinite: true,
    //     slidesToShow: 4,
    //     slidesToScroll: 2,
    //     autoplay: true,
    //     autoplaySpeed: 6000,
    //     arrows: true,
    //     responsive: [{
    //         breakpoint: 768,
    //         settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 2,
    //             arrows: true
    //         }
    //     }]

    // });

    // $('.product-carousel-side .prateleira.vitrine ul').slick({
    //     infinite: true,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 6000,
    //     arrows: false,
    //     responsive: [{
    //         breakpoint: 768,
    //         settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 2,
    //             arrows: false
    //         }
    //     }]

    // });






    $('#homeCardsCarousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        variableWidth: true,
        autoplaySpeed: 6000,
        arrows: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }]

    });





    $('#carouselbrands').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: false,
        autoplaySpeed: 6000,
        arrows: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }]

    });

    $('#homebrandsCarousel').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true
            }
        }]

    });

    //verifica a qnt e o tamanho da tela antes de executar

    $('#novcategorias').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: true
            }
        }]

    });

    $('.absinto').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: false,
        autoplaySpeed: 6000,
        arrows: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: true
            }
        }]

    });
    $('#maincats').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true
            }
        }]

    });



    $('#carouselpropostas').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
    });

    $('#carouseldeptos').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    });



    $('.brand-carousel').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false
            }
        }]

    });


    $('.bottom-banners').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: false,
        responsive: [{
            breakpoint: 760,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }]

    });




    $(".fullbanner .slick-prev.slick-arrow").html(`
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 39.523 50.523">
  <path fill="none" stroke="rgb(0,0,0)" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="5" d="M27.76157527 11.76157527l-16 14 16 13"/>
</svg>

`);
    $(".fullbanner .slick-next.slick-arrow").html(`
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 39.523 50.523">
  <path fill="none" stroke="rgb(0,0,0)" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="5" d="M11.7615601 38.76156629l16.00001574-13.99998203-15.9999854-13.00001797"/>
</svg>

`);

});
