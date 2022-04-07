$('.shelf-heart img').css('pointer-events', 'none')
$('body').on('click', '.shelf-heart', (element) => {
  if ($('body').hasClass('user-is-logged')) {
    let $element = $(element.target)
    let id = $element.find('.myid').text()
    let link = $element.find('.myurl').text();

    vtexjs.session.getSession()
      .done(e => {
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
            $element.find("img").attr("src", "/arquivos/coracaocheio.svg")


          },
          error: function (data) {
            Swal.fire({
              title: '<strong>Ops, algo deu errado</strong>',
              icon: 'error',
              html:
                'Seu produto não foi salvo, tente novamente'
            })

          }
        });

      }

    )
  } else {
    Swal.fire({
      title: '<strong>Você precisa estar logado</strong>',
      icon: 'info',
      html:
        'Você precisa logar para salvar esse produto' +
        'Faça o login ou cadastro <a href="/login"> aqui </a>'
    })
  }

})
