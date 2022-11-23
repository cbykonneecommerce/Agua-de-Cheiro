// function updateTimer() {
//     future = Date.parse("november 21, 2021 00:00:00");
//     now = new Date();
//     diff = future - now;

//     days = Math.floor(diff / (1000 * 60 * 60 * 24));
//     hours = Math.floor(diff / (1000 * 60 * 60));
//     mins = Math.floor(diff / (1000 * 60));
//     secs = Math.floor(diff / 1000);

//     d = days;
//     h = hours - days * 24;
//     m = mins - hours * 60;
//     s = secs - mins * 60;

//     document.getElementById("timer")
//         .innerHTML =
//         '<div><img src="/arquivos/timer-box.png" style="width:100%;" /></div>'
//     '<div>' + d + '<span>d</span></div>' +
//         '<div>' + h + ':</div>' +
//         '<div>' + m + ':</div>' +
//         '<div>' + s + '<span>h</span></div>';
// }
// setInterval('updateTimer()', 1000);
var countDownDate = new Date("Oct 15, 2021 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

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
    document.getElementById("timer").innerHTML = days + "d " + hours + ":" +
        minutes + ":" + seconds + "h";

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "0d 00:00:00h";
    }
}, 1000);
