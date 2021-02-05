accentsTidy = function (s) {
    var r = s

    r = r.replace(new RegExp("[àáâãäå]", 'g'), "a");
    r = r.replace(new RegExp("æ", 'g'), "ae");
    r = r.replace(new RegExp("ç", 'g'), "c");
    r = r.replace(new RegExp("[èéêë]", 'g'), "e");
    r = r.replace(new RegExp("[ìíîï]", 'g'), "i");
    r = r.replace(new RegExp("ñ", 'g'), "n");
    r = r.replace(new RegExp("[òóôõö]", 'g'), "o");
    r = r.replace(new RegExp("œ", 'g'), "oe");
    r = r.replace(new RegExp("[ùúûü]", 'g'), "u");
    r = r.replace(new RegExp("[ýÿ]", 'g'), "y");
    return r;
};








async function getWishlistProducts(clientEmail) {
    let results = await fetch(`/api/dataentities/WL/search?_fields=emailCliente,idProduto,id,prodlink&emailCliente=*${clientEmail}*`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json', "Accept": "application/vnd.vtex.ds.v10+json"
        }
    })
        .then(response => {
            return response.json();
        });
    console.log(results);

    results.forEach(element => {

        

        let producData = "";
        vtexjs.catalog.getProductWithVariations(element.idProduto).done(function (content) {
            $("#loadergif").hide()
            console.log(content);
            let productLink = accentsTidy(content.name.replace(/[\s./,&]+/g, '-'));
            producData = `
    <li>
            <span class="remove-me">X <span style="display:none" class="thisID">${element.id}</span></span>
            <span class="box-item text-center">
            <a class="product-image" title="${content.name}" href="${element.prodlink}">
            <img src="${content.skus[0].image}" width="136" height="136" />
            </a>
        
            <b class="product-name">
                 <a title="${content.name}" href="${element.prodlink}">
                 ${content.name} <span style="display:none">${element.idProduto}</span>
                 </a>
             </b>
             <span class="price">
             <a title="${content.name}" href="${"/" + productLink + "/p"}">
                 
                     
                     <span class="best-price">
                     ${content.skus[0].bestPriceFormated}
                     </span>                  
                 
                
             </a>
         </span>
            </span>
            </li>
            `
            $("#gifloader").hide()
            $(".your-products ul").append(producData);
            console.log(producData)
        });
        
   
    
    });

   






}


$(document).ready(function (){

    setTimeout(() => {

        vtexjs.session.getSession().done(e => {
            console.log(e);
            if (e.namespaces.profile.isAuthenticated.value) {
                getWishlistProducts(e.namespaces.profile.email.value);
            }
          


        }

        )

    }, 2000)

  



    $(".remove-me", "body").click(async function(e){
        
        console.log(($(e.target).children())[0].innerText);
        let myId= ($(e.target).children())[0].innerText;

    let results = await fetch(`/api/dataentities/WL/documents/${myId}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json', "Accept": "application/vnd.vtex.ds.v10+json"
        }
    })
        
    console.log(results);
    console.log($(e.target).parent().parent());
     $($(e.target).parent().parent()).remove()


    })

})


 