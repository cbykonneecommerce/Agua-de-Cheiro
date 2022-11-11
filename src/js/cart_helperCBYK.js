const formatMoney = function (n, c = 2, d = ',', t = '.') {
  c = isNaN((c = Math.abs(c))) ? 2 : c;
  var s = n < 0 ? '-' : '';
  var i = parseInt((n = Math.abs(+n || 0).toFixed(c))) + '';
  var j = (j = i.length) > 3 ? j % 3 : 0;
  return (
    s +
    (j ? i.substr(0, j) + t : '') +
    i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + t) +
    (c
      ? d +
      Math.abs(n - i)
        .toFixed(c)
        .slice(2)
      : '')
  );
};

const openMinicart = (open = true) => {
  if (open) {
    $("body").addClass("minicart-is-open");
  } else {
    $("body").removeClass("minicart-is-open");
  }
}

const addProductsMinicart = (products) => {
  $('.sidenavcart').addClass('has-product');
  const renderProduct = (divProduct, product, index) => {

    if ($(`.item-${ index }`).length) {
      return
    }

    $(divProduct).append(`
      <div class="mini-cart-item item-${ index }">
        <div class="cart__product">
            <div class="cart__image">
                <a class="sku-imagem" href="${ product.detailUrl }" title="${ product.name }">
                    <img alt="${ product.name }" src="${ product.imageUrl }" />
                </a>
            </div>
            <div class="cart__box">
                <a class="cart__product-name" href="${ product.detailUrl }" title="${ product.name }">
                    ${ product.name }
                </a>
                <div class="cart__content">
                    <span class="price">
                        R$${ formatMoney(product.sellingPrice / 100) }
                    </span>
                    <div class="cb-mini-cart-quantity">
                        <button class="btn btn-menos-check">-</button>
                        <input type="number" class="qtd-field" value="${ product.quantity }" disabled="">
                        <button class="btn btn-mais-check">+</button>
                    </div>
                    <button class="product-remover">
                        <i class="icon">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1184 2.64H19.4633C20.3407 2.64 21.0587 3.26526 21.0321 4.00632V4.9558C21.0321 5.72 20.3141 6.34526 19.4366 6.34526H19.1973L18.0539 19.9621C17.9741 21.0968 16.8572 22 15.5543 22H5.68913C4.38618 22 3.29595 21.0968 3.18966 19.9621L2.04622 6.36842H1.80683C0.92945 6.36842 0.211426 5.74316 0.211426 4.97894V4.02948C0.211426 3.26526 0.92945 2.64 1.80683 2.64H7.12503L7.52392 1.11157C7.71009 0.463165 8.37476 0 9.146 0L12.1241 0.0231628C12.8953 0.0231628 13.5867 0.509476 13.7462 1.1579L14.1184 2.64ZM9.14586 1.13474C8.98622 1.13474 8.82672 1.22737 8.80019 1.36632L8.48105 2.64H12.8153L12.4963 1.38947C12.4431 1.25052 12.3101 1.1579 12.1506 1.1579L9.14586 1.13474ZM19.4631 5.21053C19.5961 5.21053 19.7291 5.1179 19.7291 4.97894V4.02948C19.7291 3.91368 19.6226 3.7979 19.4631 3.7979H1.80683C1.67387 3.7979 1.54091 3.89053 1.54091 4.02948V4.97894C1.54091 5.09474 1.64733 5.21053 1.80683 5.21053H19.4631ZM16.7775 19.8926C16.7243 20.4484 16.1924 20.8653 15.581 20.8653H5.71566C5.07753 20.8653 4.57236 20.4484 4.51915 19.8926L3.3757 6.36842H17.8943L16.7775 19.8926Z" fill="#007DA5"/>
                                </svg>

                        </i>
                    </button>
                </div>
            </div>
        </div>
      </div>
    `);
  }

  products.forEach((item, index) => {
    if (item.isGift) {
      renderProduct('.cart__gifts', item, index)
      $('.cart__gifts').show();
    } else {
      renderProduct('.cart__product-list', item, index)
    }
  });
}

const updateQtd = (value, rowindex) => {
  vtexjs.checkout.getOrderForm()
    .then(function (orderForm) {
      var itemIndex = 0;
      var item = orderForm.items[rowindex];
      var updateItem = {
        index: rowindex,
        quantity: value
      };
      return vtexjs.checkout.updateItems([updateItem], null, false);
    })
    .done(function (orderForm) {
      updateTotal(orderForm.value)
    });

}

const updateTotal = (value) => {
  $(".js-total").text(`R$${ formatMoney(value / 100) }`);
}

function initialMinicart() {

  $(".qtd-field").prop("disabled", true);

  $("#mini-cart-admake .cb-mini-cart-itens").html("")

  $(window).on('orderFormUpdated.vtex', function (evt, orderForm) {
    console.log(evt)
    const productList = orderForm.items
    if (productList.length <= 0) return
    addProductsMinicart(productList)
    updateTotal(orderForm.value)
  });
}

function bindEvents() {

  $('body').on('click', ".btn-mais-check", function (event) {
    let rowindex = $(this).closest('.mini-cart-item').index();
    let me = $(".qtd-field")[rowindex];
    let value = parseInt($($(".qtd-field")[rowindex]).val())
    value += 1;
    $($(".qtd-field")[rowindex]).val(value)

    updateQtd(value, rowindex)

  });

  $('body').on('click', ".btn-menos-check", function (event) {
    let rowindex = $(this).closest('.mini-cart-item').index();
    let me = $(".qtd-field")[rowindex];
    let value = parseInt($($(".qtd-field")[rowindex]).val())

    if (value > 1) {
      value -= 1;
      $($(".qtd-field")[rowindex]).val(value)
      updateQtd(value, rowindex)
    }
  });

  $('body').on('click', ".product-remover", function () {
    var rowindex = $(this).closest('.mini-cart-item').index();
    let itemsToRemove = [{
      "index": rowindex,
      "quantity": 0
    }]
    vtexjs.checkout.removeItems(itemsToRemove).then(orderForm => {
      $($(".mini-cart-item")[rowindex]).fadeOut()
      updateTotal(orderForm.value)
      setTimeout(function () {
        $($(".mini-cart-item")[rowindex]).remove();
        if (orderForm.items == 0) {
          $('.sidenavcart ').removeClass('has-product')
        }
      }, 500)

    });
  })

  $('body').on('click', '.js-close-minicart', function () {
    openMinicart(false);
  })
  $('body').on('click', '.js-open-minicart', function () {
    openMinicart(true);
  })

}

$(document).ready(function () {
  initialMinicart();
  bindEvents();
})
