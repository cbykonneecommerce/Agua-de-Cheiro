
setTimeout(function () {

  $(".bt-refinar.search-filter-button.even").text("Aplicar Filtros");


  $("fieldset.refino div label").prepend(`<i class="fa fa-square-o"></i>`);

  $("fieldset.refino div label").on("click", function () {
    if ($("input", this).is(":checked")) {
      $("i", this).attr('class', "fa fa-check-square-o")
    } else {
      $("i", this).attr('class', "fa fa-square-o")
    }

  })



  $("fieldset.refino-marca div label").prepend(`<i class="fa fa-square-o"></i>`);

  $("fieldset.refino-marca div label").on("click", function () {
    if ($("input", this).is(":checked")) {
      $("i", this).attr('class', "fa fa-check-square-o")
    } else {
      $("i", this).attr('class', "fa fa-square-o")
    }

  })


  $("a.ver-filtros").siblings("label").children("i").attr('class', "fa fa-check-square-o")

  $(".resultado-busca-filtro > fieldset.orderBy select option:first-of-type").text("Ordenar por");

}, 1000)

setInterval(() => {
  $(".bt-refinar.search-filter-button.even").text("Aplicar Filtros");
  $('.prateleira ul li.helperComplement').remove()
}, 1000);


const filters = () => {


  $("fieldset h5").append(`
    <span class="filters__icon">
      <svg  xmlns="http://www.w3.org/2000/svg" width="50.523" height="39.523" viewBox="0 0 50.523 39.523">
          <path fill="none" stroke="rgb(0,0,0)" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="5" d="M11.76158875 11.76155253L25.7615618 27.76157612l13.00002696-15.9999781"/>
        </svg>
    </span>
  `);



  $("body").on("click", 'fieldset > h5', function () {
    let $fieldset = $(this).parent()
    $(this).next().slideToggle("slow");
    $fieldset.toggleClass('is-hide')
  })

  $('body').on('click', '.js-toggle-filter', function () {
    $('body').toggleClass('filter-is-open')
  })

}

$(document).ready(function () {
  filters();
})
