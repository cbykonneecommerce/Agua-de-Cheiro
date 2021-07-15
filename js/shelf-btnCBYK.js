$(".prateleira .btn-dinamico").on("click", function(e){
    e.preventDefault();

    let urlbuilder = $(this).parent().find(".buy-btn-icon .btn-add-buy-button-asynchronous").attr('href');
  //  urlbuilder = urlbuilder.replace(/qty=1/g, `qty=${qtd}`)
    $(this).attr('href', urlbuilder)
    console.log(urlbuilder)
    let sku = (urlbuilder.split("sku" + '=')[1] || '').split('&')[0];
    let seller = (urlbuilder.split("seller" + '=')[1] || '').split('&')[0];
    let item = {
        id: parseInt(sku),
        quantity: 1,
        seller: seller
    }
    console.log(item)

    insertProductOnCart(item);
})