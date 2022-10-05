function Quiz(sorular){ //Sorular listesini alacak.
    this.sorular = sorular; //Kendi sorular alanına dışarıdan sorular alacak.
    this.soruIndex = 0; //Başlangıçta sıfırdan başalyacak
    this.dogruCevapSayisi = 0;
}
//SoruGetir adındaki prototype'ı Quiz cons'a atacak. İlgili sorunun ilgili index değerini gösterecek ve döndürecek.
Quiz.prototype.soruGetir = function(){
    return this.sorular[this.soruIndex];    //quiz içindeki sorular içinden o an ki soru index neyse onu getirecek
}