$("fieldset.refino-marca").append(`<button id="load">carregar mais filtros</button>`)

$(function() {
    $("fieldset.refino-marca div label").slice(0, 5).attr("style", "display: block !important;");
    $("#load").on('click', function(e) {
        e.preventDefault();
        $("fieldset.refino-marca div label:hidden").slice(0, 7).attr("style", "display: block !important;");
        if ($("fieldset.refino-marca div label:hidden").length == 0) {
            $("#load").fadeOut();
        }
    });
});

$(document).ready(function() {
    if ($("fieldset.refino-marca div label").length <= 1) {
        $("#load").attr("style", "display: none !important;");
    }
});

setTimeout(function() {

    $(".bt-refinar.search-filter-button.even").text("Aplicar Filtros");

    $(".refino h5").append(`<svg style="width: 26px;
        max-width: 26px;
        float: right;
        margin-top: -9px;" xmlns="http://www.w3.org/2000/svg" width="50.523" height="39.523" viewBox="0 0 50.523 39.523">
        <path fill="none" stroke="rgb(0,0,0)" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="5" d="M11.76158875 11.76155253L25.7615618 27.76157612l13.00002696-15.9999781"/>
      </svg>
      `);


    $("fieldset.refino h5").on("click", function() {
        $(this).parent().toggleClass("active")
    })




    $("fieldset.refino div label").prepend(`<i class="fa fa-square-o"></i>`);

    $("fieldset.refino div label").on("click", function() {
        if ($("input", this).is(":checked")) {
            $("i", this).attr('class', "fa fa-check-square-o")
        } else {
            $("i", this).attr('class', "fa fa-square-o")
        }

    })




    //    $(".refino-marca h5").append(`<svg style="width: 26px;
    //    max-width: 26px;
    //    float: right;
    //    margin-top: -9px;" xmlns="http://www.w3.org/2000/svg" width="50.523" height="39.523" viewBox="0 0 50.523 39.523">
    //    <path fill="none" stroke="rgb(0,0,0)" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="5" d="M11.76158875 11.76155253L25.7615618 27.76157612l13.00002696-15.9999781"/>
    //  </svg>
    //  `);


    $("fieldset.refino-marca h5").on("click", function() {
        $(this).parent().toggleClass("active")
    })




    $("fieldset.refino-marca div label").prepend(`<i class="fa fa-square-o"></i>`);

    $("fieldset.refino-marca div label").on("click", function() {
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
}, 1000);





const mq = window.matchMedia("(max-width: 800px)");

if (mq.matches) {
    $(".resultado-busca-filtro").append(`
    
      <span onclick="openNavfiltro()" style="
      border: 1px solid #F2F2F2 !important;
      border-radius: 0 !important;
      color: #007DA5 !important;
      background-color: #F2F2F2;
      padding: 3px;
      padding-left: 10px;
      width: 46%;
      position: absolute;
      text-align: center;
  ">Filtros <img src="/arquivos/filtro.svg" style="max-width: 25px;margin-left: 10px;"></span>
      `)
}

$(".bt-refinar").appendTo(".search-multiple-navigator");
$(".ver-filtros").html("limpar filtros")