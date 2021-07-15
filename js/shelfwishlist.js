$(".shelf-heart").click(function () {
    let id = $(this).find('.myid').text();
    let link = $(this).find('.myurl').text();
    let $this = $(this);


    vtexjs.session.getSession().done(e => {
        console.log(e);
        if (e.namespaces.profile.isAuthenticated.value == "true") {
            var jsonSaveDadosUser = {
                "emailCliente": e.namespaces.profile.email.value,
                "ativo": true,
                "idProduto": id,
                "prodlink": link

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
                    // $("#wishlist-btn").hide();
                    //  $("#wishlist-btn-deactivated").show()
                    $this.find("img").attr("src", "/arquivos/coracaocheio.svg")


                },
                error: function (data) {
                    console.log(data);
                    alert("Não foi possível realizar essa ação no momento, tente mais tarde :(")

                }
            });
        } else {
            alert("Você precisa realizar login na sua conta ou criar uma conta para adicionar produtos à sua lista de desejos!");
        }



    }

    )

})

