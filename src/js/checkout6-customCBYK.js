// WARNING: THE USAGE OF CUSTOM SCRIPTS IS NOT SUPPORTED. VTEX IS NOT LIABLE FOR ANY DAMAGES THIS MAY CAUSE. THIS MAY BREAK YOUR STORE AND STOP SALES. IN CASE OF ERRORS, PLEASE DELETE THE CONTENT OF THIS SCRIPT.

setInterval(function() {
    $('#ship-street').attr('maxlength', 35);
    $('#ship-complement').attr('maxlength', 40);
}, 2000);


setTimeout(function() {
    $(document).ready(function() {
        const totalfrete = 160;

        function getdevileryprice() {

            if (window.location.href.indexOf("cart") != -1) {
                //console.log(orderForm);

                /*let currentPrice = orderForm.totalizers[0].value;
                currentPrice = currentPrice.toString().replace(/\B(?=(\d{2})+(?!\d))/g, '.');
                currentPrice =  Number(currentPrice);*/

                let totalPrice = $(".summary-template-holder .summary-totalizers table tfoot .monetary").html()
                totalPrice = totalPrice.replace(/,/g, '.').replace(/[\sR$]+/g, '');
                if (totalPrice.length > 6) {
                    let segregator = totalPrice.split(".")
                    totalPrice = `${segregator[0]}${segregator[1]}.${segregator[2]}`
                }

                totalPrice = Number(totalPrice);
                // console.log(totalPrice)

                let shipPrice = $(".summary-template-holder .summary-totalizers table .srp-summary-result .monetary").html()
                if (shipPrice == "Grátis") {
                    let shipPrice = "R$ 0,00"
                    shipPrice = shipPrice.replace(/,/g, '.').replace(/[\sR$]+/g, '');
                } else {
                    shipPrice = shipPrice.replace(/,/g, '.').replace(/[\sR$]+/g, '');
                    if (shipPrice.length > 6) {
                        let segregator = shipPrice.split(".")
                        shipPrice = `${segregator[0]}${segregator[1]}${segregator[2]}.${segregator[3]}`
                    }
                }


                shipPrice = Number(shipPrice);
                shipPrice = shipPrice || 0;
                // console.log(typeof shipPrice)
                // console.log(totalfrete)

                let currentPrice = totalPrice - shipPrice

                let qtdUntilGoal = totalfrete - currentPrice;
                qtdUntilGoal = qtdUntilGoal.toFixed(2)
                let percentage = 0;
                // console.log(qtdUntilGoal)
                $(".myprogressbar").remove()
                if (qtdUntilGoal <= 0) {
                    percentage = 100
                    qtdUntilGoal = 0

                    $(".summary-totalizers").append(`
          <div class="myprogressbar">
                                          <label for="file" style="color:#007DA5!important;    margin-top: 2em;line-height: 22px;font-size: 12px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="27.172" height="18.824" viewBox="0 0 27.172 18.824" style="    margin-bottom: -5px;">
            <g>
              <path fill="rgb(0,125,165)" fill-rule="evenodd" d="M15.92834913 0H.46848086C.20974602 0 0 .21088569 0 .47102637V11.7756592h15.92834913V0z"/>
              <path fill="rgb(0,125,165)" fill-rule="evenodd" d="M24.82946777 8.9494751h-.10302734l-.96032715-3.86706543c-.2602539-1.04882813-1.19702148-1.78491211-2.2722168-1.78521729h-4.62854003v13.1887207h1.44763183c.2355957 1.35211182 1.40344238 2.33850098 2.76867676 2.33850098 1.36535644 0 2.53320312-.98638916 2.76867676-2.33850097h.97912597c1.29370118 0 2.34240723-1.05444336 2.34240723-2.35510254v-2.82617188c0-1.30072021-1.04870605-2.35516357-2.34240723-2.35516357zm-6.09020996.94207763H22.899292c.14648438.0043335.28649903-.06048584.37841797-.1751709.09204102-.11462402.12536621-.26593017.0900879-.40893554L22.4309082 5.5392578c-.05285644-.21533203-.24804687-.36444092-.46850586-.35797119h-3.22314453c-.25878906 0-.46850586.21087647-.46850586.4710083V9.4204834c0 .26019287.2097168.47106933.46850586.47106933zm2.34240723 8.0074463c-1.03491211 0-1.87390137-.84350587-1.87390137-1.88409424 0-1.04052735.83898926-1.88409424 1.87390137-1.88409424 1.0349121 0 1.87390137.8435669 1.87390137 1.88409424 0 1.04058837-.83898926 1.88409423-1.87390137 1.88409423z"/>
              <path fill="rgb(0,125,165)" fill-rule="evenodd" d="M15.92834473 16.48591309H7.92199707c-.2355957 1.35211181-1.40344238 2.33850097-2.76867676 2.33850097-1.36535644 0-2.53320312-.98638916-2.76879883-2.33850097h-.04211425C1.04870605 16.48591309 0 15.43153076 0 14.13081055V12.7177246h15.92834473v3.76818848zM5.1533203 14.13081055c-1.0349121 0-1.87390136.8435669-1.87390136 1.88409424 0 1.04058837.83898925 1.88409423 1.87390136 1.88409423s1.87390137-.84350586 1.87390137-1.88409423c0-1.04052735-.83898926-1.88409424-1.87390137-1.88409424z"/>
              <ellipse cx="5.153" cy="16.015" fill="rgb(12,188,95)" rx=".703" ry=".707"/>
              <ellipse cx="21.082" cy="16.015" fill="rgb(12,188,95)" rx=".703" ry=".707"/>
            </g>
          </svg>
          
          
          <span id="quantoFalta" style="font-weight: 900;">Você ganhou o frete grátis!</span><br/> (Válido para Sul e Sudeste)</label>
          <progress id="file" value="${percentage}" max="100">  </progress>
          
          <style>
          #file{
              width: 100%;
              height: 15px;
              margin-top: 14px;
              border-radius: 0;
              -webkit-appearance: none;
              appearance: none;
          }
          
          #file[value]::-webkit-progress-bar {
              background-color: #F2F2F2;
            
            }
          
            #file[value]::-webkit-progress-value {
              background-color: #007DA5!important;
            
            }
          
          <style>
          </div>
          
          
          `)

                } else {
                    percentage = (100 * currentPrice) / totalfrete;
                    $(".summary-totalizers").append(`
      <div class="myprogressbar">
      <label for="file" style="color: #007DA5!important;    margin-top: 2em;line-height: 22px;font-size: 12px;">
      <svg xmlns="http://www.w3.org/2000/svg" width="27.172" height="18.824" viewBox="0 0 27.172 18.824" style="    margin-bottom: -5px;">
        <g>
          <path fill="rgb(0,125,165)" fill-rule="evenodd" d="M15.92834913 0H.46848086C.20974602 0 0 .21088569 0 .47102637V11.7756592h15.92834913V0z"/>
          <path fill="rgb(0,125,165)" fill-rule="evenodd" d="M24.82946777 8.9494751h-.10302734l-.96032715-3.86706543c-.2602539-1.04882813-1.19702148-1.78491211-2.2722168-1.78521729h-4.62854003v13.1887207h1.44763183c.2355957 1.35211182 1.40344238 2.33850098 2.76867676 2.33850098 1.36535644 0 2.53320312-.98638916 2.76867676-2.33850097h.97912597c1.29370118 0 2.34240723-1.05444336 2.34240723-2.35510254v-2.82617188c0-1.30072021-1.04870605-2.35516357-2.34240723-2.35516357zm-6.09020996.94207763H22.899292c.14648438.0043335.28649903-.06048584.37841797-.1751709.09204102-.11462402.12536621-.26593017.0900879-.40893554L22.4309082 5.5392578c-.05285644-.21533203-.24804687-.36444092-.46850586-.35797119h-3.22314453c-.25878906 0-.46850586.21087647-.46850586.4710083V9.4204834c0 .26019287.2097168.47106933.46850586.47106933zm2.34240723 8.0074463c-1.03491211 0-1.87390137-.84350587-1.87390137-1.88409424 0-1.04052735.83898926-1.88409424 1.87390137-1.88409424 1.0349121 0 1.87390137.8435669 1.87390137 1.88409424 0 1.04058837-.83898926 1.88409423-1.87390137 1.88409423z"/>
          <path fill="rgb(0,125,165)" fill-rule="evenodd" d="M15.92834473 16.48591309H7.92199707c-.2355957 1.35211181-1.40344238 2.33850097-2.76867676 2.33850097-1.36535644 0-2.53320312-.98638916-2.76879883-2.33850097h-.04211425C1.04870605 16.48591309 0 15.43153076 0 14.13081055V12.7177246h15.92834473v3.76818848zM5.1533203 14.13081055c-1.0349121 0-1.87390136.8435669-1.87390136 1.88409424 0 1.04058837.83898925 1.88409423 1.87390136 1.88409423s1.87390137-.84350586 1.87390137-1.88409423c0-1.04052735-.83898926-1.88409424-1.87390137-1.88409424z"/>
          <ellipse cx="5.153" cy="16.015" fill="rgb(12,188,95)" rx=".703" ry=".707"/>
          <ellipse cx="21.082" cy="16.015" fill="rgb(12,188,95)" rx=".703" ry=".707"/>
        </g>
      </svg>
      
      
      Faltam <span id="quantoFalta" style="font-weight: 900;">R$ ${qtdUntilGoal}</span> para você ter <strong style="font-weight: 900;">Frete Grátis</strong><br/> (Válido para Sul e Sudeste)</label>
      <progress id="file" value="${percentage}" max="100">  </progress>
      
      <style>
      #file{
          width: 100%;
          height: 15px;
          margin-top: 14px;
          border-radius: 0;
          -webkit-appearance: none;
          appearance: none;
      }
      
      #file[value]::-webkit-progress-bar {
          background-color: #007DA5;
        
        }
      
        #file[value]::-webkit-progress-value {
          background-color: #69d201!important;
        
        }
      
      <style>
      </div>
      
      
      `)
                }





            }




        }

        setInterval(function() {
            if (window.location.href.indexOf("cart") == -1) {
                $(".myprogressbar").remove()
            }
        }, 1000)

        getdevileryprice()

        $(window).on("orderFormUpdated.vtex", (a, obj) => {
            getdevileryprice()

        })


        setTimeout(function() {

            $(".srp-result").append("<p  style='margin-top:10px'>Clique acima para ver todas as opções</p>")


        }, 1000)

        $(window).on("orderFormUpdated.vtex", (a, obj) => {
            getdevileryprice()


            if ($(".srp-delivery-current-many__price svg").length == 0) {
                $(".srp-delivery-current-many__price").append(`
      <svg style='transform: translate(4px) rotate(-90deg);position: relative;top: 10px;' xmlns="http://www.w3.org/2000/svg" width="19.523" height="30.523" viewBox="0 0 39.523 50.523">
        <path fill="none" stroke="#007DA5" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="5" d="M27.76157527 11.76157527l-16 14 16 13"/>
      </svg>
      
      `);

                $(".srp-delivery-current-many__price").css({ "margin-top": "-15px" })
            }



        })


    })
}, 6000);


// WARNING: THE USAGE OF CUSTOM SCRIPTS IS NOT SUPPORTED. VTEX IS NOT LIABLE FOR ANY DAMAGES THIS MAY CAUSE. THIS MAY BREAK YOUR STORE AND STOP SALES. IN CASE OF ERRORS, PLEASE DELETE THE CONTENT OF THIS SCRIPT.

// setInterval(function(){ 
//     $('#ship-street').attr('maxlength', 35);
//     $('#ship-complement').attr('maxlength', 40);
//   }, 2000);



//   $(document).ready(function () {
//   const totalfrete = 160;

//   function getdevileryprice(){

//     if(window.location.href.indexOf("cart") != -1){
//   //console.log(orderForm);

//   /*let currentPrice = orderForm.totalizers[0].value;
//   currentPrice = currentPrice.toString().replace(/\B(?=(\d{2})+(?!\d))/g, '.');
//   currentPrice =  Number(currentPrice);*/

//   let currentPrice = $(".summary-template-holder .summary-totalizers table .monetary").html()
//   currentPrice = currentPrice.replace(/,/g, '.').replace(/[\sR$]+/g, '');
//   if(currentPrice.length > 6){
//     let segregator  = currentPrice.split(".")
//     currentPrice = `${segregator[0]}${segregator[1]}.${segregator[2]}`
//   }

//   currentPrice = Number(currentPrice);


//   let qtdUntilGoal = totalfrete - currentPrice;
//   qtdUntilGoal = qtdUntilGoal.toFixed(2)
//   let percentage = 0;
//   $(".myprogressbar").remove()
//   if(qtdUntilGoal <= 0){
//       percentage = 100
//       qtdUntilGoal = 0

//       $(".summary-totalizers").append(`
//       <div class="myprogressbar">
//                                       <label for="file" style="color:#007DA5!important;    margin-top: 2em;line-height: 22px;font-size: 12px;">
//       <svg xmlns="http://www.w3.org/2000/svg" width="27.172" height="18.824" viewBox="0 0 27.172 18.824" style="    margin-bottom: -5px;">
//         <g>
//           <path fill="rgb(0,125,165)" fill-rule="evenodd" d="M15.92834913 0H.46848086C.20974602 0 0 .21088569 0 .47102637V11.7756592h15.92834913V0z"/>
//           <path fill="rgb(0,125,165)" fill-rule="evenodd" d="M24.82946777 8.9494751h-.10302734l-.96032715-3.86706543c-.2602539-1.04882813-1.19702148-1.78491211-2.2722168-1.78521729h-4.62854003v13.1887207h1.44763183c.2355957 1.35211182 1.40344238 2.33850098 2.76867676 2.33850098 1.36535644 0 2.53320312-.98638916 2.76867676-2.33850097h.97912597c1.29370118 0 2.34240723-1.05444336 2.34240723-2.35510254v-2.82617188c0-1.30072021-1.04870605-2.35516357-2.34240723-2.35516357zm-6.09020996.94207763H22.899292c.14648438.0043335.28649903-.06048584.37841797-.1751709.09204102-.11462402.12536621-.26593017.0900879-.40893554L22.4309082 5.5392578c-.05285644-.21533203-.24804687-.36444092-.46850586-.35797119h-3.22314453c-.25878906 0-.46850586.21087647-.46850586.4710083V9.4204834c0 .26019287.2097168.47106933.46850586.47106933zm2.34240723 8.0074463c-1.03491211 0-1.87390137-.84350587-1.87390137-1.88409424 0-1.04052735.83898926-1.88409424 1.87390137-1.88409424 1.0349121 0 1.87390137.8435669 1.87390137 1.88409424 0 1.04058837-.83898926 1.88409423-1.87390137 1.88409423z"/>
//           <path fill="rgb(0,125,165)" fill-rule="evenodd" d="M15.92834473 16.48591309H7.92199707c-.2355957 1.35211181-1.40344238 2.33850097-2.76867676 2.33850097-1.36535644 0-2.53320312-.98638916-2.76879883-2.33850097h-.04211425C1.04870605 16.48591309 0 15.43153076 0 14.13081055V12.7177246h15.92834473v3.76818848zM5.1533203 14.13081055c-1.0349121 0-1.87390136.8435669-1.87390136 1.88409424 0 1.04058837.83898925 1.88409423 1.87390136 1.88409423s1.87390137-.84350586 1.87390137-1.88409423c0-1.04052735-.83898926-1.88409424-1.87390137-1.88409424z"/>
//           <ellipse cx="5.153" cy="16.015" fill="rgb(12,188,95)" rx=".703" ry=".707"/>
//           <ellipse cx="21.082" cy="16.015" fill="rgb(12,188,95)" rx=".703" ry=".707"/>
//         </g>
//       </svg>


//       <span id="quantoFalta" style="font-weight: 900;">Você ganhou o frete grátis!</span><br/> (Válido para Sul e Sudeste)</label>
//       <progress id="file" value="${percentage}" max="100">  </progress>

//       <style>
//       #file{
//           width: 100%;
//           height: 15px;
//           margin-top: 14px;
//           border-radius: 0;
//           -webkit-appearance: none;
//           appearance: none;
//       }

//       #file[value]::-webkit-progress-bar {
//           background-color: #F2F2F2;

//         }

//         #file[value]::-webkit-progress-value {
//           background-color: #007DA5!important;

//         }

//       <style>
//       </div>


//       `)

//   } else{
//    percentage = (100 * currentPrice) / totalfrete;
//    $(".summary-totalizers").append(`
//   <div class="myprogressbar">
//   <label for="file" style="color: #007DA5!important;    margin-top: 2em;line-height: 22px;font-size: 12px;">
//   <svg xmlns="http://www.w3.org/2000/svg" width="27.172" height="18.824" viewBox="0 0 27.172 18.824" style="    margin-bottom: -5px;">
//     <g>
//       <path fill="rgb(0,125,165)" fill-rule="evenodd" d="M15.92834913 0H.46848086C.20974602 0 0 .21088569 0 .47102637V11.7756592h15.92834913V0z"/>
//       <path fill="rgb(0,125,165)" fill-rule="evenodd" d="M24.82946777 8.9494751h-.10302734l-.96032715-3.86706543c-.2602539-1.04882813-1.19702148-1.78491211-2.2722168-1.78521729h-4.62854003v13.1887207h1.44763183c.2355957 1.35211182 1.40344238 2.33850098 2.76867676 2.33850098 1.36535644 0 2.53320312-.98638916 2.76867676-2.33850097h.97912597c1.29370118 0 2.34240723-1.05444336 2.34240723-2.35510254v-2.82617188c0-1.30072021-1.04870605-2.35516357-2.34240723-2.35516357zm-6.09020996.94207763H22.899292c.14648438.0043335.28649903-.06048584.37841797-.1751709.09204102-.11462402.12536621-.26593017.0900879-.40893554L22.4309082 5.5392578c-.05285644-.21533203-.24804687-.36444092-.46850586-.35797119h-3.22314453c-.25878906 0-.46850586.21087647-.46850586.4710083V9.4204834c0 .26019287.2097168.47106933.46850586.47106933zm2.34240723 8.0074463c-1.03491211 0-1.87390137-.84350587-1.87390137-1.88409424 0-1.04052735.83898926-1.88409424 1.87390137-1.88409424 1.0349121 0 1.87390137.8435669 1.87390137 1.88409424 0 1.04058837-.83898926 1.88409423-1.87390137 1.88409423z"/>
//       <path fill="rgb(0,125,165)" fill-rule="evenodd" d="M15.92834473 16.48591309H7.92199707c-.2355957 1.35211181-1.40344238 2.33850097-2.76867676 2.33850097-1.36535644 0-2.53320312-.98638916-2.76879883-2.33850097h-.04211425C1.04870605 16.48591309 0 15.43153076 0 14.13081055V12.7177246h15.92834473v3.76818848zM5.1533203 14.13081055c-1.0349121 0-1.87390136.8435669-1.87390136 1.88409424 0 1.04058837.83898925 1.88409423 1.87390136 1.88409423s1.87390137-.84350586 1.87390137-1.88409423c0-1.04052735-.83898926-1.88409424-1.87390137-1.88409424z"/>
//       <ellipse cx="5.153" cy="16.015" fill="rgb(12,188,95)" rx=".703" ry=".707"/>
//       <ellipse cx="21.082" cy="16.015" fill="rgb(12,188,95)" rx=".703" ry=".707"/>
//     </g>
//   </svg>


//   Faltam <span id="quantoFalta" style="font-weight: 900;">R$ ${qtdUntilGoal}</span> para você ter <strong style="font-weight: 900;">Frete Grátis</strong><br/> (Válido para Sul e Sudeste)</label>
//   <progress id="file" value="${percentage}" max="100">  </progress>

//   <style>
//   #file{
//       width: 100%;
//       height: 15px;
//       margin-top: 14px;
//       border-radius: 0;
//       -webkit-appearance: none;
//       appearance: none;
//   }

//   #file[value]::-webkit-progress-bar {
//       background-color: #007DA5;

//     }

//     #file[value]::-webkit-progress-value {
//       background-color: #69d201!important;

//     }

//   <style>
//   </div>


//   `)
//   }





//     }




//   }

//   setInterval(function(){
//     if(window.location.href.indexOf("cart") == -1){
//       $(".myprogressbar").remove()
//     }
//   },1000)

//   getdevileryprice()

//   $(window).on("orderFormUpdated.vtex", (a, obj) => {
//       getdevileryprice()

//   })


//     setTimeout(function(){

//         $(".srp-result").append("<p  style='margin-top:10px'>Clique acima para ver todas as opções</p>")


//       },1000)

//     $(window).on("orderFormUpdated.vtex", (a, obj) => {
//       getdevileryprice()


//     if($(".srp-delivery-current-many__price svg").length == 0){
//        $(".srp-delivery-current-many__price").append(`
//   <svg style='transform: translate(4px) rotate(-90deg);position: relative;top: 10px;' xmlns="http://www.w3.org/2000/svg" width="19.523" height="30.523" viewBox="0 0 39.523 50.523">
//     <path fill="none" stroke="#007DA5" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="5" d="M27.76157527 11.76157527l-16 14 16 13"/>
//   </svg>

//   `);

//     $(".srp-delivery-current-many__price").css({"margin-top":"-15px"})
//   }



//   })


//   });