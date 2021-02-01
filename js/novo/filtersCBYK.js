
setTimeout(function(){

    $(".bt-refinar.search-filter-button.even").text("Aplicar Filtros");
    
        $(".refino h5").append(`<svg style="width: 26px;
        max-width: 26px;
        float: right;
        margin-top: -9px;" xmlns="http://www.w3.org/2000/svg" width="50.523" height="39.523" viewBox="0 0 50.523 39.523">
        <path fill="none" stroke="rgb(0,0,0)" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="5" d="M11.76158875 11.76155253L25.7615618 27.76157612l13.00002696-15.9999781"/>
      </svg>
      `);
    
    
    $("fieldset.refino h5").on("click",function(){
        $(this).parent().toggleClass( "active")
    })
      
    
    
    
      $("fieldset.refino div label").prepend(`<i class="fa fa-square-o"></i>`);
    
      $("fieldset.refino div label").on("click", function(){
    if($("input", this).is(":checked")){
        $("i", this).attr('class',"fa fa-check-square-o")
    } else {
        $("i", this).attr('class',"fa fa-square-o")
    }
     
     })




     $(".refino-marca h5").append(`<svg style="width: 26px;
     max-width: 26px;
     float: right;
     margin-top: -9px;" xmlns="http://www.w3.org/2000/svg" width="50.523" height="39.523" viewBox="0 0 50.523 39.523">
     <path fill="none" stroke="rgb(0,0,0)" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="5" d="M11.76158875 11.76155253L25.7615618 27.76157612l13.00002696-15.9999781"/>
   </svg>
   `);
 
 
 $("fieldset.refino-marca h5").on("click",function(){
     $(this).parent().toggleClass( "active")
 })
   
 
 
 
   $("fieldset.refino-marca div label").prepend(`<i class="fa fa-square-o"></i>`);
 
   $("fieldset.refino-marca div label").on("click", function(){
 if($("input", this).is(":checked")){
     $("i", this).attr('class',"fa fa-check-square-o")
 } else {
     $("i", this).attr('class',"fa fa-square-o")
 }
  
  })






    
     $( "a.ver-filtros" ).siblings("label").children("i").attr('class',"fa fa-check-square-o")

     $(".resultado-busca-filtro > fieldset.orderBy select option:first-of-type").text("Ordenar por");
    
    }, 1000)
    
    setInterval(() => {
        $(".bt-refinar.search-filter-button.even").text("Aplicar Filtros");
    }, 1000);