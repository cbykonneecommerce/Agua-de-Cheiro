$(document).ready(function() {
    $(".pages li.previous", "body").html("<img src='/arquivos/seta-esquerda.png' style='width: 15px'/>")
    $(".pages li.next", "body").html("<img src='/arquivos/seta-direita.png' style='width: 15px'/>")


    //FILTRO MOBILE


    const mq = window.matchMedia("(max-width: 1000px)");
    /*if (mq.matches) {
        $(".navigation-tabs").hide();
        $( "<div class='visible-xs visible-sm filtro-btn-mobile'><h4>FILTROS</h4></div>" ).insertBefore( ".navigation-tabs" );
        $(".filtro-btn-mobile").click(()=>{
            $( ".navigation-tabs" ).toggle( "slow" )
        })
    } */

    const quantity= $(".searchResultsTime");
    $(".sub").append($(quantity));
    $(".searchResultsTime:nth-of-type(2)").remove()
    
});

$(window).on('hashchange', function(e){
    $(".pages li.previous", "body").html("<img src='/arquivos/seta-esquerda.png' style='width: 15px'/>")
    $(".pages li.next", "body").html("<img src='/arquivos/seta-direita.png' style='width: 15px'/>")
   });
   $(".pages li.previous", "body").html("<img src='/arquivos/seta-esquerda.png' style='width: 15px'/>")
   $(".pages li.next", "body").html("<img src='/arquivos/seta-direita.png' style='width: 15px'/>")

   setInterval(()=>{
    $(".pages li.previous", "body").html("<img src='/arquivos/seta-esquerda.png' style='width: 15px'/>");
    $(".pages li.next", "body").html("<img src='/arquivos/seta-direita.png' style='width: 15px'/>");
   }, 1000)


