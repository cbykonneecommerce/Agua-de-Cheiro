$("#emailcatcher").click(function (event) {
    event.preventDefault();

    let myname = $("#name-input").val();
    let myemail = $("#email-input").val();
    console.log(myname, myemail)
    __blc['id'] = "7f4e5c0c8a2e86f3ede7dc38246bddf1";

    try {

        lc.sendData({
            evento: "Novo Cadastro Newsletter",
            nm_email: myemail,
            vars: {
                nome: myname,
            },
            vars_json: {

            },
            lista: {
                nm_lista: "newsletter_adc",
                atualizar: "1",
                nome: myname
            }
        });

    } catch (e) {
        alert("Algo de errado aconteceu :( \n Tente mais tarde")
    }
})

$("#emailcatcher").on('click', () => {
    event.preventDefault();
    //console.log($("#cl_email").val())
    let dados = {
        Email: $("#email-input").val(),
        Nome: $("#name-input").val()
    }

    fetch("/api/dataentities/NL/documents", {
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
