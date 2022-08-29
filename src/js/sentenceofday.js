
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
quotes[7, 23] = "Büyük şeyler küçük şeylerin bir araya gelmesidir. -Van Gogh"
quotes[7, 24] = "Büyük şeyler küçük şeylerin bir araya gelmesidir. -Van Gogh"
quotes[7, 25] = "Açıklamalarla vaktini harcama. İnsanlar sadece duymak istediklerini duyarlar. -Paulo Coelho"
quotes[7, 26] = "Her bildiğini söyleme, her söylediğini bil. -Clavdius"
quotes[7, 27] = "Savaşın iyisi, barışın kötüsü yoktur. -Benjamin Franklin"
quotes[7, 28] = "Hayatta hep mutlu olursam, Hayalini kuracak neyim kalır. -Dostoyevski"
quotes[7, 29] = "İnsanların seni en çok sevdiği zaman, onların işine en çok yaradığın zamandır. -Bukowski"
quotes[7, 30] = "Hayatta daima gerçekleri savun! Takdir eden olmasa bile, vicdanına hesap vermekten kurtulursun. -Che Guevara"
quotes[7, 31] = "Hayat geç kalanları hiç affetmez. -Gorbachov"

quotes[8,30]="Zafer, 'Zafer benimdir' diyebilenindir. Başarı ise, 'Başaracağım' diye başlayarak sonunda 'Başardım' diyebilenindir. -Mustafa Kemal ATATÜRK-"

quotes[9, 1] = "Yalnızsın, eğer kendin için orada değilsen. -Phil McGraw"
quotes[9, 2] = "Uçmayı seviyorsan, düşmeyi de bileceksin. Korkarak yaşıyorsan, yalnızca hayatı seyredersin..."
quotes[9, 3] = "Nereye gittiğini bilmiyorsan, hangi yoldan gittiğinin hiçbir önemi yoktur."
quotes[9, 4] = "Ömrün ilk yarısı; ikinci yarısını beklemekle, ikinci yarısı da ilk yarısının hasretiyle geçer."
quotes[9, 5] = "Sende, ben, imkansızlığı seviyorum; fakat asla ümitsizliği değil. -Nazım Hikmet"
quotes[9, 6] = "Eğer bir insan sürekli seni üzüyorsa anla ki mutlu etmek istediği kişi sen değilsin."
quotes[9, 7] = "Yalnızsın, eğer kendin için orada değilsen. -Phil McGraw"
quotes[9, 8] = "Düşmanın en büyük hilesi, dostluğudur. -Sadi Şirazi"
quotes[9, 9] = "İyiyi ara, doğruyu ara, güzeli ara fakat kusuru arama."
quotes[9, 10] = "Asla vazgeçmeyin, kaybedenler yalnızca vazgeçenlerdir."
quotes[9, 11] = "Uçmak için kuş olmak gerekmiyor küçük sevinçler olsun yeter. -Cemal Süreya"
quotes[9, 12] = "Sütten çıkınca bütün kaşıklar aktır. Önemli olan içinden çıktığın sütü ak bırakmaktır. -Hz. Mevlana"
quotes[9, 13] = "Edep aklın tercümanıdır. Herkes edebi kadar akıllı, aklı kadar şerefli, şerefi kadar değerlidir."
quotes[9, 14] = "Her elini sıkanla dost, her canını sıkanla düşman olma."
quotes[9, 15] = "Hayat bazı şeyleri kafana vura vura. Bazı şeyleri de kalbini kıra kıra öğretir..."
quotes[9, 16] = "Hırs başarısızlığın son sığınağıdır."
quotes[9, 17] = "Her seven isimsiz bir kahramandır ve insan, sevebildiği kadar insandır!"
quotes[9, 18] = "İyiler asla kaybetmez, kaybedilir. -Peyami Safa"
quotes[9, 19] = "Kırılmış biri çok güzel susar. Her şeyine hasret kalırsın!"
quotes[9, 20] = "Yaşın değil yaşadıkların öğretir sana hayatı."
quotes[9, 21] = "İnsanı farklı yapan affettikleri, güçlü yapan sabrettikleri, kendisi yapan ise vazgeçtikleridir."



var a = new Date();
var dayOfMonth = a.getDate();
var MonthOfYear = (a.getMonth())+1;


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

