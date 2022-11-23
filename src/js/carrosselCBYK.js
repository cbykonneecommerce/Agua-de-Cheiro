console.log('test')

$(document).ready(function () {

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
    autoplay: false,
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

  const shelfSlider = () => {
    const $shelf = $('.product-carousel .prateleira.vitrine ul')
    if ($shelf.children().length < 5) return
    $shelf.slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 6000,
      arrows: true,
      dots: true,
      prevArrow: `<button class="slick-prev"><i>${ iconArrow }</i></button>`,
      nextArrow: `<button class="slick-next"><i>${ iconArrow }</i></button>`,
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

const bannerIdentifier = 'Banner Delikad brinde'

const innerHTMLContagem = `<div class="cb-landing-countdown" id="cybermonday-relogio">
  <h6>CONTAGEM REGRESSIVA: </h6>
  <ul class="thefinalcountdown">
    <li>
      <div class="diasblock"></div>
      <span>DIAS</span>
    </li>
    <li>
      <div class="horasblock"></div>
      <span>HORAS</span>
    </li>
    <li>
      <div class="minutosblock"></div>
      <span>MINUTOS</span>
    </li>
    <li>
      <div class="segundosblock"></div>
      <span>SEGUNDOS</span>
    </li>
  </ul>
</div>`

// Set the date we're counting down to
var countDownDate = new Date("Nov 26, 2022 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  // + minutes + "m " + seconds + "s ";

  if (days < 10) {
    $(".diasblock").html(`0${ days }`);
  } else {
    $(".diasblock").html(`${ days }`);
  }



  if (hours < 10) {
    $(".horasblock").html(`0${ hours }`)
  } else {
    $(".horasblock").html(`${ hours }`)
  }

  if (minutes < 10) {
    $(".minutosblock").html(`0${ minutes }`)
  } else {
    $(".minutosblock").html(`${ minutes }`)
  }

  if (seconds < 10) {
    $(".segundosblock").html(`0${ seconds }`)
  } else {
    $(".segundosblock").html(`${ seconds }`)
  }


  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    $(".diasblock").html(`00`)
    $(".horasblock").html(`00`)
    $(".minutosblock").html(`00`)
    $(".segundosblock").html(`00`)
  }
}, 1000);


$(".dropdown-container").hide();

function calculateHMSleft() {

  const banner = $('[alt="Banner cyberweek - Desktop"]')
  $('.box-banner').css({ position: "relative" })

  if (banner.length && !$('#cybermonday-relogio').length) {
    $(banner[0]).parent().append(innerHTMLContagem)
    // $(banner[0]).attr('src', 'https://aguadecheiro.vteximg.com.br/arquivos/cyber-monday.png')
  }

  const windowscreen = $(window).width()

  if (windowscreen >= 1300) {
    $('#cybermonday-relogio').css({
      right: `${ ($(window).width() * 0.85) / 100 }%`
    })
  } else if (windowscreen <= 1200 && windowscreen >= 1100) {
    $('#cybermonday-relogio').css({
      right: `${ ($(window).width() * 0.60) / 100 }%`
    })
  } else if (windowscreen < 1199 && windowscreen >= 1000) {
    $('#cybermonday-relogio').css({
      right: `${ ($(window).width() * 0.40) / 100 }%`
    })
  } else if (windowscreen < 1000 && windowscreen >= 700) {
    $('#cybermonday-relogio').css({
      right: `${ ($(window).width() * 1) / 100 }%`,
      top: '45%'
    })
  }

  //calculate
  var now = new Date();
  var hoursleft = 23 - now.getHours();
  var minutesleft = 59 - now.getMinutes();
  var secondsleft = 59 - now.getSeconds();

  //format 0 prefixes
  if (minutesleft < 10) minutesleft = "0" + minutesleft;
  if (secondsleft < 10) secondsleft = "0" + secondsleft;

  //display
  console.log(hoursleft + ":" + minutesleft + ":" + secondsleft);
  $(".hoursleft").html(`${ hoursleft }`)
  $(".minutesleft").html(`${ minutesleft }`)
  $(".secondsleft").html(`${ secondsleft }`)
}

function calculateHMSleftMobile() {

  const banner = $('[alt="Banner cyberweek - mobile"]')
  $('.box-banner').css({ position: "relative" })

  if (banner.length && !$('#cybermonday-relogio').length) {
    $(banner[0]).parent().append(innerHTMLContagem)
    // $(banner[0]).attr('src', 'https://aguadecheiro.vteximg.com.br/arquivos/cyber-monday-mobile.png')
  }

  //calculate
  var now = new Date();
  var hoursleft = 23 - now.getHours();
  var minutesleft = 59 - now.getMinutes();
  var secondsleft = 59 - now.getSeconds();

  //format 0 prefixes
  if (minutesleft < 10) minutesleft = "0" + minutesleft;
  if (secondsleft < 10) secondsleft = "0" + secondsleft;

  //display
  console.log(hoursleft + ":" + minutesleft + ":" + secondsleft);
  $(".hoursleft").html(`${ hoursleft }`)
  $(".minutesleft").html(`${ minutesleft }`)
  $(".secondsleft").html(`${ secondsleft }`)
}

calculateHMSleftMobile();
setInterval(calculateHMSleftMobile, 1000);
