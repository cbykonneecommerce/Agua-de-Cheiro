const bannerIdentifier = 'Banner Delikad brinde'

const innerHTMLContagem = `<div class="offset-md-3 col-md-6 col-sm-12 col-12 cb-landing-countdown" id="cybermonday-relogio">
  <h6>CONTAGEM REGRESSIVA: </h6>
  <ul class="thefinalcountdown">
    <li>
      <div class="diasblock"></div>
      <span>DIAS</span>
    </li>
    <li>
      <div class="horasblock"></div>
      <span>HORAS</span>
    </li>
    <li>
      <div class="minutosblock"></div>
      <span>MINUTOS</span>
    </li>
    <li>
      <div class="segundosblock"></div>
      <span>SEGUNDOS</span>
    </li>
  </ul>
</div>`

// Set the date we're counting down to
var countDownDate = new Date("Nov 26, 2022 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  // + minutes + "m " + seconds + "s ";

  if (days < 10) {
    $(".diasblock").html(`0${ days }`);
  } else {
    $(".diasblock").html(`${ days }`);
  }



  if (hours < 10) {
    $(".horasblock").html(`0${ hours }`)
  } else {
    $(".horasblock").html(`${ hours }`)
  }

  if (minutes < 10) {
    $(".minutosblock").html(`0${ minutes }`)
  } else {
    $(".minutosblock").html(`${ minutes }`)
  }

  if (seconds < 10) {
    $(".segundosblock").html(`0${ seconds }`)
  } else {
    $(".segundosblock").html(`${ seconds }`)
  }


  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    $(".diasblock").html(`00`)
    $(".horasblock").html(`00`)
    $(".minutosblock").html(`00`)
    $(".segundosblock").html(`00`)
  }
}, 1000);


$(".dropdown-container").hide();

function calculateHMSleft() {

  const banner = $('[alt="Banner Delikad brinde"]')
  $('.box-banner').css({ position: "relative" })

  if (banner.length && !$('#cybermonday-relogio').length) {
    $(banner[0]).parent().append(innerHTMLContagem)
  }

  //calculate
  var now = new Date();
  var hoursleft = 23 - now.getHours();
  var minutesleft = 59 - now.getMinutes();
  var secondsleft = 59 - now.getSeconds();

  //format 0 prefixes
  if (minutesleft < 10) minutesleft = "0" + minutesleft;
  if (secondsleft < 10) secondsleft = "0" + secondsleft;

  //display
  console.log(hoursleft + ":" + minutesleft + ":" + secondsleft);
  $(".hoursleft").html(`${ hoursleft }`)
  $(".minutesleft").html(`${ minutesleft }`)
  $(".secondsleft").html(`${ secondsleft }`)
}

calculateHMSleft();
setInterval(calculateHMSleft, 1000);
