$(".notifymetitle.notifyme-title").text("Produto indisponível");
$(".sku-notifyme-form p").text("Avise-me quando estiver disponível");


accentsTidy = function (s) {
  var r = s

  r = r.replace(new RegExp("[Ã Ã¡Ã¢Ã£Ã¤Ã¥]", 'g'), "a");
  r = r.replace(new RegExp("Ã¦", 'g'), "ae");
  r = r.replace(new RegExp("Ã§", 'g'), "c");
  r = r.replace(new RegExp("[Ã¨Ã©ÃªÃ«]", 'g'), "e");
  r = r.replace(new RegExp("[Ã¬Ã­Ã®Ã¯]", 'g'), "i");
  r = r.replace(new RegExp("Ã±", 'g'), "n");
  r = r.replace(new RegExp("[Ã²Ã³Ã´ÃµÃ¶]", 'g'), "o");
  r = r.replace(new RegExp("Å“", 'g'), "oe");
  r = r.replace(new RegExp("[Ã¹ÃºÃ»Ã¼]", 'g'), "u");
  r = r.replace(new RegExp("[Ã½Ã¿]", 'g'), "y");
  return r;
};

/*  let dados = {
      "items":[
          {
              id: `${skuJson.skus[0].sku}`,
              quantity: 1,
              seller: "1"
          }
      ],
      "country": "BRA"

  }

  fetch("/api/checkout/pub/orderforms/simulation",{
      method: 'POST',
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(dados)
  })
  .then(response =>{return response.json()})
  .then(data =>{
      console.log(data)
  })
*/

$(".parcelamentoProd").click(function () {

  $(".installmentslist").toggle();
})


setTimeout(() => {



  const mq = window.matchMedia("(max-width: 800px)");

  if (mq.matches) {

    //  $("#txtCep").attr("placeholder", "Calcule o Frete")

    let aa = $(".product-image .apresentacao .thumbs").contents()

    const imgsLength = $(".product-image .apresentacao .thumbs a img").length;

    for (let i = 0; i < imgsLength; i++) {
      let imgProduct = $($(".product-image .apresentacao .thumbs a img")[i]).attr("src");
      imgProduct = imgProduct.replace(/-55-55/g, '-500-500');
      $($(".product-image .apresentacao .thumbs a img")[i]).attr("src", imgProduct);
    }


    $(".product-image .apresentacao .thumbs").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      arrows: false,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });


    $(".product-info .seletor-sku .select .sku-selector").click(() => {
      setTimeout(() => {
        $(".product-image .apresentacao .thumbs").html(aa)
      }, 800)


      setTimeout(() => {
        let aab = $(".product-image .apresentacao .thumbs").html();

        $("#show").html(aab);
        $(".product-image .apresentacao #show").slick({

          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          arrows: true

        });

      }, 1000)



    })


    $(".product-info .shipping-box label").click(() => {
      $(".product-info .shipping-box label .fitext").css({
        "display": "block"
      });
      $(".product-info .shipping-box .freight-btn").css({
        "display": "inline-block"
      });
    })


  }

  //compre junto

  setTimeout(function () {
    const imgsLength = $("#divCompreJunto td a img").length;
    for (let i = 0; i < imgsLength; i++) {
      let imgProduct = $($("#divCompreJunto td a img")[i]).attr("src");
      imgProduct = imgProduct.replace(/-90-90/g, '-182-182');
      $($("#divCompreJunto td a img")[i]).attr("src", imgProduct);
    }
  }, 1000)

  //redes sociais
  $(".share-btns #fbshare").attr("href", `https://www.facebook.com/sharer/sharer.php?u=${ window.location.href }`);
  $(".share-btns #twshare").attr("href", `https://twitter.com/share?url=${ window.location.href }`);
}, 1000)

const mq = window.matchMedia("(max-width: 800px)");

if (mq.matches) {

  $("#btn-description").click(function () {
    document.getElementById("description").style.right = "0px";

  })

  $("#description .prod-infos").click(function () {
    document.getElementById("description").style.right = "-880px";

  })

  $("#btn-specification").click(function () {
    document.getElementById("specification").style.right = "0px";

  })

  $("#specification .prod-infos").click(function () {
    document.getElementById("specification").style.right = "-880px";

  })



} else {
  $("#description").show();
  $("#btn-description").click(() => {
    $("#description").show();
    $("#btn-description").addClass("active-tab")
    $("#btn-specification").removeClass("active-tab")
    $("#specification").hide();

  })
  $("#btn-specification").click(() => {
    $("#specification").show();
    $("#btn-specification").addClass("active-tab")
    $("#btn-description").removeClass("active-tab")
    $("#description").hide();

  })
}

setInterval(() => {
  $("#btnFreteSimulacao").val("CALCULAR");
  for (let i = 0; i < $(".product-details .seletor-sku .topic").length; i++) {
    let myName = $($(".product-details .seletor-sku .topic .specification")[i]).text();
    $($(".product-details .seletor-sku .topic .select select option:first-of-type")[i]).text(myName)
  }

}, 1000);

$("#wishlist-btn").click(() => {
  vtexjs.session.getSession().done(e => {
    console.log(e);
    if (e.namespaces.profile.isAuthenticated.value == "true") {
      var jsonSaveDadosUser = {
        "emailCliente": e.namespaces.profile.email.value,
        "ativo": true,
        "idProduto": skuJson.productId,
        "prodlink": window.location.pathname

      };
      var urlSaveDadosUser = '/api/dataentities/WL/documents/';

      $.ajax({
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify(jsonSaveDadosUser),
        type: 'PATCH',
        url: urlSaveDadosUser,
        success: function (data) {
          console.log(data);
          // $("#wishlist-btn img").attr('src', "/arquivos/coracaocheio.svg");
          // $("#wishlist-btn").attr('id', "wishlist-btn-deactivated")
          $("#wishlist-btn").hide();
          $("#wishlist-btn-deactivated").show()


        },
        error: function (data) {
          console.log(data);
          alert("Não foi possível realizar essa ação no momento, tente mais tarde :(")

        }
      });
    } else {
      alert("Você precisa realizar login na sua conta ou criar uma conta para adicionar produtos à sua lista de desejos!");
    }
  })
})

$(document).ready(function () {
  $('.buy-button-box a').removeAttr('href')
  $('.buy-button-box a').on('click', function () {

    const quantity = Number($('.buy-button-box input.qtd').val() || '1') ?? 1
    const sku = selectedToBuy.length ? selectedToBuy[0] : skuJson.skus[0].sku
    const seller = '1'

    const item = [{
      id: sku,
      quantity: quantity,
      seller
    }]

    vtexjs.checkout.getOrderForm().done(() => {
      vtexjs.checkout.addToCart(item, null, 1).done(() => {
        // abrir minicart aqui
        setTimeout(() => {
          $('.btn-mini-cart').click()
        }, 1000)
      })
    })
  })
})

const priceInstallments = () => {
  const skuBestInstallmentNumber = $('.skuBestInstallmentNumber').text();
  const skuBestInstallmentValue = $('.skuBestInstallmentValue').text();

  if (!skuBestInstallmentValue.length || !skuBestInstallmentNumber.length) return

  $('.valor-dividido.price-installments').html(`
    <span>
      <label class="skuBestInstallmentNumber"> ${ skuBestInstallmentNumber }</label>
      <span>de</span>
      <label class="skuBestInstallmentValue"> ${ skuBestInstallmentValue }</label>
    </span>
  `)

  $('.descricao-preco').append(`
  <em class="valor-dividido price-installments">
    ou <strong>pague</strong> também com <strong>pix</strong> parcelado
  </em>
`)
}

$(document).ready(() => {
  priceInstallments();

})
