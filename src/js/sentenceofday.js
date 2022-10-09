var m = 13;
var n = 32;

var quotes = new Array(m);

for (var i = 0; i < m; i++) {
    quotes[i] = new Array(n);
}
for (var i = 0; i < m; i++) {
    for (var j = 0; j < n; j++) {
        quotes[i][j] = "";
    }
}


quotes = [
    [],//empty 0.index
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], //1
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], //2
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], //3 
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], //4
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], //5
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], //6
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], //7
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], //8
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], //9
    ["", "", "", "", "", "", "", "", "", "A blessing in disguise", "A dime a dozen", "Beat around the bush", "Better late than never", "Bite the bullet", "Break a leg", "Call it a day", "Cut somebody some slack", "Cutting corners", "Easy does it", "Get out of hand", "Get something out of your system", "Get your act together", "Give someone the benefit of the doubt", "Go back to the drawing board", "Hang in there", "Hit the sack", "It's not rocket science", "Let someone off the hook", "Make a long story short", "Miss the boat", "No pain, no gain", "On the ball"], //10
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], //11
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], //12

];


var a = new Date();
var dayOfMonth = a.getDate();
var MonthOfYear = (a.getMonth()) + 1;

if ((quotes[MonthOfYear][dayOfMonth]) != "" && (quotes[MonthOfYear][dayOfMonth]) != undefined && (quotes[MonthOfYear][dayOfMonth]) != null) {
    document.getElementById("sentenceofday").innerHTML = "\“" + quotes[MonthOfYear][dayOfMonth] + "\”";
}

var temp = quotes[MonthOfYear][dayOfMonth];
var newWord = temp.replace(/ /g, "-")

document.getElementById("searchInTheLongman").href = "https://www.ldoceonline.com/dictionary/" + newWord;

