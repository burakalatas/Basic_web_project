quotes = new Array();
quotes[8] = "Another Love";
quotes[9] = "Another Love";
quotes[10] = "Cennet";
quotes[11] = "Belki";

YT = new Array();
YT[8] = "https://www.youtube.com/watch?v=MwpMEbgC7DA&ab_channel=TomOdellVEVO";
YT[9] = "https://www.youtube.com/watch?v=MwpMEbgC7DA&ab_channel=TomOdellVEVO";
YT[10] = "https://www.youtube.com/watch?v=6dGL2PBNHbE&list=PL9msttT06B2PAC1RMxrT6pbuHHS7RoRC8&index=25&ab_channel=EbruG%C3%BCnde%C5%9F";
YT[11] = "https://www.youtube.com/watch?v=7-_qRtGbCTE&ab_channel=Dedubl%C3%BCman";

Sptfy = new Array();
Sptfy[8] = "https://open.spotify.com/track/3JvKfv6T31zO0ini8iNItO?si=4c97a99f24164a15";
Sptfy[9] = "https://open.spotify.com/track/3JvKfv6T31zO0ini8iNItO?si=4c97a99f24164a15";
Sptfy[10] = "https://open.spotify.com/track/5cH8WO94ezgfeStwKzJo7O";
Sptfy[11] = "https://open.spotify.com/track/5ATwkalJ9FnLp7Zcvxo1rl?si=c9e23492e5da49e4";

AppleM = new Array();
AppleM[8] = "https://music.apple.com/tr/album/another-love/598275378?i=598275383&l=tr";
AppleM[9] = "https://music.apple.com/tr/album/another-love/598275378?i=598275383&l=tr";
AppleM[10] = "https://music.apple.com/de/album/cennet/1608149975?i=1608150457";
AppleM[11] = "https://music.apple.com/tr/album/belki-akustik/1635909540?i=1635909553";


var a = new Date();
var dayOfMonth = a.getDate();
var MonthOfYear = (a.getMonth()) + 1;


//display the quotation
if (quotes[MonthOfYear] != "" && quotes[MonthOfYear] != undefined) {
    document.getElementById("musicOfMonthInternal").innerHTML = "\"" + quotes[MonthOfYear] + "\"";
}
if (MonthOfYear < 10) {
    var c = MonthOfYear;
    MonthOfYear = "0";
    MonthOfYear += c;
}

document.getElementById("YoutubeHref").href = YT[a.getMonth() + 1];
document.getElementById("SpotifyHref").href = Sptfy[a.getMonth() + 1];
document.getElementById("AppleHref").href = AppleM[a.getMonth() + 1];

