function Soru(soruMetni,cevapSecenekleri,dogruCevap) { //Constructor genelde büyük harfle kullanılır.
    //Sorudan 30 adet nesne üretilebilir. 30 tanesinin de ayrı seçenekleri olacak. Sorumetni,cevap vs..
    //this ile her bir NESNEYİ temsil ederiz.
    this.soruMetni = soruMetni ; //Kopyanın soru metni alanına dışarıdan gönderilen soru metni aktarılacak
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}
Soru.prototype.cevabiKontrolEt = function(cevap){  //Bu fonksiyonu dışarıda tanımlarız. Fakat hala cevabiKontrolEt'i soru üzerine alırız.
    //Her üretilecek nesne constructor olarak soruyu kullandığı için Sorunun içerisindeki prototype içindeki kontrolEt'i tekrar kullanılabilir.
    //Sorunun prototype'ına gitmesi için Soru.prototype kullanılmalı..
    //Artık bütün objeler aynı yerden o metodun referansını çağırıp kullanabilir.
    return cevap === this.dogruCevap //Dışarıdan gelen cevap dogruCevap'a eşit ise döndürür.
}
let sorular = [
    new Soru("1-Hangisi Js paket yönetim uygulamasıdır ?" , { a: "Node.js", b: "Typescript", c:"Npm", d:"Nuget"}, "c" ),
    new Soru("2-Hangisi frontend kapsamında değerlendirilemez ?" , { a: "Css", b: "Html", c:"JavaScript", d:"Sql"}, "d" ),
    new Soru("3-Hangisi backend kısmında değerlendirilebilir ?" , { a: "Node.js", b: "Typescript", c:"Angular", d:"React"}, "a" ),
    new Soru("4-Beyaz gergadan gebelik süresi kaç aydır ?" , { a: "18", b: "12", c:"9", d:"6"}, "a" )
]