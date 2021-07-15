$(document).ready(function () {


    fetch("/api/catalog_system/pub/category/tree/3/")
        .then(res => res.json())
        .then(response => {
            console.log(response);



            response.forEach(element => {
                let divtext = element.name;
                element.name = element.name.replace(/[\s/,&]+/g, '-');
                $(".deptos ul").append(`<li class="depto-${element.name}"><a href="${element.url}">${divtext}</a></li>`);
                console.log("adding main")
                if (element.hasChildren) {
                    $("#top-menu .container-fluid #deptos-list").append(`<div class="deptonav depto-${element.name}" id="${element.name}" style="display: none">

            <div class="row" style="width: 1180px;
            margin: auto;">
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



               //mobile
               $(".sidenav").append(`<div class="depto-box" style="display:block;border-top: solid 1px #333;"><span class="depto-${element.name}"><a href="${element.url}">${divtext}</a></span><button class="dropdown-btn" id="${element.name}"><i class="fa fa-angle-down"></i></button></div>
               <div class="dropdown-container" id="${element.name}"></div>`);

                    //Desktop
                    $(`.depto-${element.name}`).mouseenter(function () {
                        $(".deptonav").hide();
                        $(`#deptos-list .depto-${element.name}#${element.name}`).show()
                    });


                    $(`#deptos-list .depto-${element.name}#${element.name}`).mouseleave(function () {
                        $(`#deptos-list .depto-${element.name}#${element.name}`).hide()
                    });


                    //Mobile
                    $(`.dropdown-btn#${element.name}`).toggle(() => {
                        // $(".dropdown-container").slideUp();
                        $(`.dropdown-btn i`).attr('class', 'fa fa-angle-down');
                        $(`.dropdown-btn#${element.name} i`).attr('class', 'fa fa-angle-up');
                        $(`.dropdown-container#${element.name}`).slideDown()
                    }, () => {
                        $(`.dropdown-container#${element.name}`).slideUp()
                        $(`.dropdown-btn#${element.name} i`).attr('class', 'fa fa-angle-down');
                    })


                    element.children.forEach((subs, index) => {
                        console.log("adding children")
                        if (index < 5) {
                            $(`.depto-${element.name} .row .col-sm-2:nth-of-type(1) ul`).append(`<li><a href="${subs.url}">${subs.name}</a></li>`);
                        } else if (index < 10) {
                            $(`.depto-${element.name} .row .col-sm-2:nth-of-type(2) ul`).append(`<li><a href="${subs.url}">${subs.name}</a></li>`);
                        } else if (index < 15) {
                            $(`.depto-${element.name} .row .col-sm-2:nth-of-type(3) ul`).append(`<li><a href="${subs.url}">${subs.name}</a></li>`);
                        } else {
                            $(`.depto-${element.name} .row .col-sm-2:nth-of-type(4) ul`).append(`<li><a href="${subs.url}">${subs.name}</a></li>`);
                        }

                        $(`.dropdown-container#${element.name}`).append(`<a href="${subs.url}">${subs.name}</a>`)

                    })

                } else {
                    $(".sidenav").append(`<span class="depto-${element.name}"><a style="border-top: solid 1px #333;" href="${element.url}">${divtext}</a></span>`)
                }
            });








        })

    setTimeout(() => {





        $(".depto-Ofertas a").attr("href", "/busca?fq=H:137");


        //$(".sidenav").append(`<span><a href="/busca?fq=H:137">OFERTAS</a></span>`)
    }, 1200)


    $(".vtexIdUI .modal-header .close").click(function () {
        window.location.href = '/';
    })

    //MUDAR TAMANHO DAS IMAGENS NA BARRA DE BUSCA




    $(".btn-open-menu-xs").click(() => {
        $("body").addClass("menu-ativo");
        $("#menu-mobile").attr('class', 'show-menu');
        $("#menu-mobile").show();

    })

    $("#menu-mobile .close-menu").click(() => {

        $("#menu-mobile").attr('class', 'hide-menu');
        setTimeout(() => { $("#menu-mobile").hide(); }, 480)

        $("body").removeClass("menu-ativo");

    })



     
    $(".dropdown-container").hide();


    $(".dropdown-btn#atendimento").toggle(() => {
        $(".dropdown-container#politicas").hide();
        $(".dropdown-btn#politicas i").attr('class', 'fa fa-angle-down');
        $(".dropdown-btn#atendimento i").attr('class', 'fa fa-angle-up');
        $(".dropdown-container#atendimento").slideDown()
    }, () => {
        $(".dropdown-container#atendimento").slideUp()
        $(".dropdown-btn#atendimento i").attr('class', 'fa fa-angle-down');
    })


    $(".dropdown-btn#politicas").toggle(() => {
        $(".dropdown-container#atendimento").hide();
        $(".dropdown-btn#atendimento i").attr('class', 'fa fa-angle-down');
        $(".dropdown-btn#politicas i").attr('class', 'fa fa-angle-up');
        $(".dropdown-container#politicas").slideDown()
    }, () => {
        $(".dropdown-container#politicas").slideUp()
        $(".dropdown-btn#politicas i").attr('class', 'fa fa-angle-down');
    })


    $(".deptonav").mouseleave(() => { $(".deptonav").hide();$("body").removeClass("menu-ativo") })
    $("header").mouseleave(() => { $(".deptonav").hide();$("body").removeClass("menu-ativo") })
    $(".header-container .header").mouseenter(() => { $(".deptonav").hide();$("body").removeClass("menu-ativo") })

    





});



setInterval(() => {

    const imgsLength = $(".ui-autocomplete .ui-menu-item").length;

    for (let i = 0; i < imgsLength; i++) {
        let imgProduct = $($(".ui-autocomplete .ui-menu-item img")[i]).attr("src");
        imgProduct = imgProduct.replace(/-25-25/g, '-50-50');
        $($(".ui-autocomplete .ui-menu-item img")[i]).attr("src", imgProduct);
    }


}, 1000)



setInterval(() => {

    const imgsLength = $("#mini-cart-admake .mini-cart-item .imagem").length;

    for (let i = 0; i < imgsLength; i++) {
        let imgProduct = $($("#mini-cart-admake .mini-cart-item .imagem img")[i]).attr("src");
        imgProduct = imgProduct.replace(/-55-55/g, '-90-90');
        $($("#mini-cart-admake .mini-cart-item .imagem img")[i]).attr("src", imgProduct);
    }



    
//colocar icone de sacola nos cards

$(".prateleira .buy-btn-icon .btn-add-buy-button-asynchronous").html(`
<svg xmlns="http://www.w3.org/2000/svg" width="19.461" height="27.559" viewBox="0 0 19.461 27.559">
  <path fill="rgb(0,125,165)" fill-rule="evenodd" d="M9.73034668 0c-2.9317627 0-5.26879883 2.37794495-5.26879883 5.26544952v2.29302216H.76489258C.33996582 7.60092926 0 7.98310089 0 8.40773773v18.30168915c0 .4670868.38244629.84925842.84985352.84925842h17.7611084c.46740722 0 .84985351-.38217163.84985351-.84925842V8.40773773c0-.46710205-.38244629-.84926605-.84985352-.84926605h-3.56921386V5.26544952C15.04174805 2.33547974 12.66223145 0 9.73034668 0zm0 1.6985321c1.99707031 0 3.56921387 1.5711441 3.56921387 3.56691742v2.29302216H6.1611328V5.26544952c0-1.99577331 1.57214356-3.56691742 3.56921387-3.56691742zM4.46142578 9.299469H1.7845459v16.5606842h16.01904297V9.299469h-2.71948242v1.8259201c0 .46710205-.38232422.84926605-.84973145.84926605-.46740723 0-.89233398-.382164-.89233398-.84926605V9.299469H6.20361328v1.8683853c0 .46709443-.42492676.84926606-.89233398.84926606-.46740723 0-.84985352-.42462921-.84985352-.89173126V9.299469z"/>
</svg>

`)
}, 1000)



