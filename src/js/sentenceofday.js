
quotes = new Array();
quotes[7, 13] = "Başarısız olursan hayal kırıklığına uğrayabilirsin ama denemezsen mahvolursun.";
quotes[7, 14] = "Yapmadığınız atışların %100'ünü kaçırırsınız."
quotes[7, 15] = "Başarı, başarısızlıktan başarısızlığa, coşku kaybı olmadan yürümektir."
quotes[7, 16] = "Başarılı bir insan, başkalarının ona attığı tuğlalarla sağlam bir temel oluşturabilen kişidir."
quotes[7, 17] = "Mutlu olmayı yarına bırakmak, karşıya geçmek için nehrin durmasını beklemeye benzer ve bilirsin o nehir asla durmaz."
quotes[7, 18] = "Hayattaki en büyük zafer benim için hiçbir zaman düşmemekte değil, her düştüğünde ayağa kalkmakta yatar."
quotes[7, 19] = "Hayatta en kıymetli hediye zamandır. Kime hediye ettiğinize dikkat edin."
quotes[7, 20] = "Her ağlayan güçsüz değildir. Tıpkı her gülenin mutlu olmadığı gibi."
quotes[7, 21] = "Asla başka insanlar üzülmesin diye kendini üzme. Sen kaldırabiliyorsan onlar da kaldırabilir. - Bob Marley"
quotes[7, 22] = "Bir şeyi çok istersin olmaz, hiç istemezsin yine olmaz, birine söylersen hiç olmaz, söylemesen de olmaz. Bazen ne yaparsan yap olmaz."
quotes[7, 23] = ""


var a = new Date();
var dayOfMonth = a.getDate();
var MonthOfYear = a.getMonth() + 1;

//display the quotation
if (quotes[MonthOfYear, dayOfMonth] != "" && quotes[MonthOfYear, dayOfMonth] != undefined) {
    document.getElementById("sentenceofday").innerHTML = "\"" + quotes[MonthOfYear, dayOfMonth] + "\"";
}
if (dayOfMonth < 10) {
    var c = dayOfMonth;
    dayOfMonth = "0";
    dayOfMonth += c;

}
if (MonthOfYear < 10) {
    var c = MonthOfYear;
    MonthOfYear = "0";
    MonthOfYear += c;
}
var year = a.getFullYear();

document.getElementById("date").innerHTML = dayOfMonth + "." + MonthOfYear + "." + year;

