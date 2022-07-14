function dark() {
    var body = document.querySelector("body");
    body.style.backgroundColor = body.style.backgroundColor === "darkgray" ? "white" : "darkgray";

    var navbar = document.querySelector(".navbar");
    navbar.style.backgroundColor = navbar.style.backgroundColor === "gray" ? "#58D68D" : "gray";

    // var button = document.querySelector("button");
    // button.style.backgroundColor = button.style.backgroundColor === "gray" ? "#58D68D" : "gray";

    topButton.style.backgroundColor = topButton.style.backgroundColor === "gray" ? "#58D68D" : "gray";

    document.body.classList.toggle('BgGray');

    var button2 = document.querySelector("topButton");
    button2.style.backgroundColor = button2.style.backgroundColor === "gray" ? "#58D68D" : "gray";

}

function goUp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

var topButton = document.getElementById("topButton");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

function iyiki() {
    swal("İyi ki varsınnn! <3");
}
