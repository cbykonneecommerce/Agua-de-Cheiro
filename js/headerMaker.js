$( document ).ready(function() {


    fetch("/api/catalog_system/pub/category/tree/3/")
    .then(res =>  res.json())
    .then(response => {
        console.log(response);

      

        response.forEach(element => {
            let divtext =  element.name;
            element.name = element.name.replace(/\s+/g, '-');
            $(".deptos ul").append( `<li class="depto-${element.name}"><a href="${element.url}">${divtext}</a></li>`);
            console.log("adding main")
            if(element.hasChildren) {
            $("#top-menu .container #deptos-list").append(`<div class="deptonav depto-${element.name}" id="${element.name}" style="display: none">

            <div class="row">
                 <div class="col-sm-2">
                     <ul class="">
                         

                     </ul>
                 </div>
                 <div class="col-sm-2">
                     <ul>
                     

                     </ul>
                 </div>
                 <div class="col-sm-2">
                    <ul></ul>
                 </div>
                 <div class="col-sm-2">
                    <ul></ul>
                 </div>
                 <div class="col-sm-4">
                 <a><img src="/arquivos/menu_${element.name}.jpg" /></a>
                 </div>
             </div>
            </div>`);

            $(".sidenav").append(`<button class="dropdown-btn" id="${element.name}">${divtext}<i class="fa fa-angle-down"></i></button>
            <div class="dropdown-container" id="${element.name}"></div>`)


                //Desktop
            $(`.depto-${element.name}`).mouseenter(function() {
                $(".deptonav").hide();
               $(`#deptos-list .depto-${element.name}#${element.name}`).show()
           });
           
           
           $(`#deptos-list .depto-${element.name}#${element.name}`).mouseleave(function() {
               $(`#deptos-list .depto-${element.name}#${element.name}`).hide()
           });


           //Mobile
           $(`.dropdown-btn#${element.name}`).toggle(() => {
            $(".dropdown-container").slideUp();
            $(`.dropdown-btn i`).attr('class', 'fa fa-angle-down');
            $(`.dropdown-btn#${element.name} i`).attr('class', 'fa fa-angle-up');
            $(`.dropdown-container#${element.name}`).slideDown()
        }, () => {
            $(`.dropdown-container#${element.name}`).slideUp()
            $(`.dropdown-btn#${element.name} i`).attr('class', 'fa fa-angle-down');
        })


            element.children.forEach((subs, index) => {
                console.log("adding children")
                if( index < 5) {
                    $(`.depto-${element.name} .row .col-sm-2:nth-of-type(1) ul`).append( `<li><a href="${subs.url}">${subs.name}</a></li>`);
                } else if (index < 10) {
                    $(`.depto-${element.name} .row .col-sm-2:nth-of-type(2) ul`).append( `<li><a href="${subs.url}">${subs.name}</a></li>`);
                } else if (index < 15){
                    $(`.depto-${element.name} .row .col-sm-2:nth-of-type(3) ul`).append( `<li><a href="${subs.url}">${subs.name}</a></li>`);
                } else {
                    $(`.depto-${element.name} .row .col-sm-2:nth-of-type(4) ul`).append( `<li><a href="${subs.url}">${subs.name}</a></li>`);
                }

                $(`.dropdown-container#${element.name}`).append(`<a href="${subs.url}">${subs.name}</a>`)
                
            })
            
            } else {
                $(".sidenav").append(`<span class="depto-${element.name}"><a href="${element.url}">${divtext}</a></span>`)
            }
        });




      
        
        
       
    })

    setTimeout(()=>{
        if(dataLayer[2].visitorLoginState || dataLayer[3].visitorLoginState) {
            $("#usuario-login span").html(`<a href="/account" style="display: inline;padding: 0 !important;color: #444;text-decoration: underline">Minha conta</a>`);
            $(".sing-in .navbar-nav").css({"float": "right"})
        }
        
    
    
        $(".quickView a").text("COMPRA RÁPIDA")
        
$(".depto-Ofertas a").attr("href", "/busca?fq=H:137");


//$(".sidenav").append(`<span><a href="/busca?fq=H:137">OFERTAS</a></span>`)
    },1200)


    

});



function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      $(".link-logo img").css({"max-width": "55px"})
    } else {
      $(".link-logo img").css({"max-width": "119px"})
    }
  }

const mq = window.matchMedia("(min-width: 1200px)");
    if (mq.matches) {
        window.onscroll = function() {scrollFunction()};
    }



