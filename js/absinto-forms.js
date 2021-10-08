$("#btn-enviar").click(() => {
    event.preventDefault();
    //console.log($("#cl_email").val())
    let dados = {
        name: $("#nome").val(),
        email: $("#email").val(),
    }

    fetch("/api/dataentities/AB/documents", {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dados)
        })
        .then((res) => { return res })
        .then(result => {
            console.log(result);
            alert("Inscrição concluída");
        })
        .catch(err => console.log(err))
})
__blc['id'] = "7f4e5c0c8a2e86f3ede7dc38246bddf1";

$("#btn-enviar").on("click", function() {

    var momentoAtual = (new Date().toISOString()).substr(0, 10);

    var email = $('#email').val();

    var name = $('#nome').val();

    if (email != "") {

        try {

            lc.sendData({

                evento: "Novo Cadastro",

                nm_email: email,

                vars: {

                    nome: name,

                },

                vars_json: {

                },

                lista: {

                    nm_lista: "Absinto",

                    atualizar: "1",

                    nome: name,

                    dt_cadastro: momentoAtual

                }

            });

        } catch (e) {

        }

    }

});