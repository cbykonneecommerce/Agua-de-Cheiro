(function () {

  const brandCarousel = () => {
    if ($(window).width() > 1024) return //só funciona em mobile
    $('.brand__list').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 6000,
      arrows: false,
    })
  }

  const init = () => {
    brandCarousel()
  }

  init();
})();
