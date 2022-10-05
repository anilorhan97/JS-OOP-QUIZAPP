function UI() {
    this.btn_start = document.querySelector(".btn_start"),
    this.btn_next = document.querySelector(".next_btn"),
    this.btn_replay = document.querySelector(".btn_replay"),
    this.btn_quit = document.querySelector(".btn_quit"),
    this.quiz_box = document.querySelector(".quiz_box"),
    this.score_box = document.querySelector(".score_box"),
    this.option_list = document.querySelector(".option_list"),
    this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>',
    this.inCorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>',
    this.time_text = document.querySelector(".time_text"),
    this.time_second = document.querySelector(".time_second"),
    this.time_line = document.querySelector(".time_line")
}

UI.prototype.soruGoster= function(soru){ //Dışarıdan aldığı soruya göre listeleme yapacak
    let question = `<span>${soru.soruMetni}</span>`;
    let options = ``;

    for(let cevaplar in soru.cevapSecenekleri){ //Her cevap bilgisi bizim için a-b-c bilgisi çünkü key..
        options +=
        `
            <div class="option">
            <span><b>${cevaplar}</b>: ${soru.cevapSecenekleri[cevaplar]}</span>
            </div>
        `; //[cevap] ile ilgili key'e gelen cevabı verecek. İlk kısım a-b-c diğer kısım onun içeriği..
        //cevapSecenekleri[cevap] dediğimizde value değerlerine ulaşırız.
    }

    document.querySelector(".question_text").innerHTML = question;
    this.option_list.innerHTML = options;
    //Bütün option classına sahip olan elemanları alacağız.
    const option = this.option_list.querySelectorAll(".option");
    for(let opt of option){
        opt.setAttribute("onclick", "optionSelected(this)");
    }
}

UI.prototype.soruSayisiniGoster = function(soruSirasi,toplamSoru){
    let tag = `<span class="badge bg-warning ">${soruSirasi} / ${toplamSoru}</span> `;
    document.querySelector(".quiz_box .question_index").innerHTML = tag;
}
UI.prototype.skoruGoster = function(toplamSoru,dogruCevap){
    let tag2 = `Toplam ${toplamSoru} sorudan ${dogruCevap} doğru cevap verdiniz.`;
    document.querySelector(".score_box .score_text").innerHTML = tag2;
}