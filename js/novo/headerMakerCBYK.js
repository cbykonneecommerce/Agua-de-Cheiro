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
                    $(`.depto-${element.name}`).mouseenter(function () {
                        $(".deptonav").hide();
                        $(`#deptos-list .depto-${element.name}#${element.name}`).show()
                    });


                    $(`#deptos-list .depto-${element.name}#${element.name}`).mouseleave(function () {
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
                    $(".sidenav").append(`<span class="depto-${element.name}"><a href="${element.url}">${divtext}</a></span>`)
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


    $(".dropdown-btn#institucional").toggle(() => {
        $(".dropdown-container#suporte").hide();
        $(".dropdown-btn#institucional i").attr('class', 'fa fa-angle-up');
        $(".dropdown-container#institucional").slideDown()
    }, () => {
        $(".dropdown-container#institucional").slideUp()
        $(".dropdown-btn#institucional i").attr('class', 'fa fa-angle-down');
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
}, 1000)



