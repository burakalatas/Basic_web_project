
// Set the date we're counting down to
var countDownDate = new Date("oct 16, 2022 00:00:00").getTime();

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
    document.getElementById("timer").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "HAPPY BIRTHDAY TO ME";
    }
}, 1000);

window.onload = setInterval(clock, 1000);
function clock() {
    // Get today's date and time
    var nowHours = new Date().getHours();
    var nowMinutes = new Date().getMinutes();
    if (nowHours < 10) {
        var c = nowHours;
        nowHours = "0";
        nowHours += c;
    }
    if (nowMinutes < 10) {
        var c = nowMinutes;
        nowMinutes = "0";
        nowMinutes += c;
    }

    document.getElementById("time").innerHTML = nowHours + ":" + nowMinutes;
}

