//koyu tema
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
//--------------------------------

//en yukarı çıkma butonu
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
//--------------------------------

// paragrafları görünür yapma...
var coll = document.getElementsByClassName("blogtitle");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}
//--------------------------------

//sweet alert kullanımı (aktif değil)
function denemeSA() {
    swal("sweet alert deneme mesajı");
}
//--------------------------------aktif
function notActiveYet() {
    swal("This page hasn't been completed yet!", "Please, try again later.", { button: "Alright!" });
}

