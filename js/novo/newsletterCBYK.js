
$("#commit").click(function (event) {
    event.preventDefault();
  

        let myname = $("#nameform").val();
        let myemail = $("#emailform").val();
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

          alert("Inscrição concluída!")

        } catch (e) {
            alert("Algo de errado aconteceu :( \n Tente mais tarde")
        }
    



})









