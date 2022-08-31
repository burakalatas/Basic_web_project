quotes = new Array();
quotes[8]="Another Love";
quotes[9] = "Another Love";

YT = new Array();
YT[8]="https://www.youtube.com/watch?v=MwpMEbgC7DA&ab_channel=TomOdellVEVO";
YT[9]="https://www.youtube.com/watch?v=MwpMEbgC7DA&ab_channel=TomOdellVEVO";

Sptfy = new Array();
Sptfy[8]="https://open.spotify.com/track/3JvKfv6T31zO0ini8iNItO?si=4c97a99f24164a15";
Sptfy[9]="https://open.spotify.com/track/3JvKfv6T31zO0ini8iNItO?si=4c97a99f24164a15";

AppleM = new Array();
AppleM[8]="https://music.apple.com/tr/album/another-love/598275378?i=598275383&l=tr";
AppleM[9]="https://music.apple.com/tr/album/another-love/598275378?i=598275383&l=tr";


var a = new Date();
var dayOfMonth = a.getDate();
var MonthOfYear = (a.getMonth())+1;


//display the quotation
if (quotes[MonthOfYear]!= "" && quotes[MonthOfYear]!= undefined) {
    document.getElementById("musicOfMonthInternal").innerHTML = "\"" + quotes[MonthOfYear] + "\"";
}
if (MonthOfYear < 10) {
    var c = MonthOfYear;
    MonthOfYear = "0";
    MonthOfYear += c;
}

document.getElementById("YoutubeHref").href= YT[a.getMonth()+1] ;
document.getElementById("SpotifyHref").href= Sptfy[a.getMonth()+1];
document.getElementById("AppleHref").href=  AppleM[a.getMonth()+1];

