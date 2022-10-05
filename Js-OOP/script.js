const quiz = new Quiz(sorular); 
const ui = new UI();

ui.btn_start.addEventListener("click",function(){
    ui.quiz_box.classList.add("active"); //butona tıklandığında quizbox'a active class'ı eklenecek. Ve active için uygulanan cssler gözükecek.
    startTimer(10);
    startTimerLine();
    ui.soruGoster(quiz.soruGetir());
    ui.soruSayisiniGoster(quiz.soruIndex+1, sorular.length);
    ui.btn_next.classList.remove("show");
})

ui.btn_next.addEventListener("click",function(){
    if(quiz.sorular.length != quiz.soruIndex+1){  //+1 yapmamızın sebebi: Aşağıda önce index 1 artıyor. Son soruyu göstermesi için.
        quiz.soruIndex += 1; //İLK BAŞTA SORUYU GÖSTERMEDEN ÖNCE 1 ARTTIRDIĞIMIZDAN DOLAYI ÜSTTE +1 YAPTIK
        clearInterval(counter); //Tekrar temizlenmesi gerekiyor. 0 yazmaması gerekir.
        clearInterval(counterLine);
        startTimer(10); //Daha sonra tekrar 10'dan başlatılması için. next_btn'e eklenir.
        startTimerLine();
        ui.soruGoster(quiz.soruGetir());
        ui.soruSayisiniGoster(quiz.soruIndex+1, sorular.length);
        ui.btn_next.classList.remove("show");
    }
    else{
        clearInterval(counter); //quiz bitse de temizlensin.
        clearInterval(counterLine);
        ui.quiz_box.classList.remove("active"); 
        ui.score_box.classList.add("active"); 
        ui.skoruGoster(quiz.sorular.length, quiz.dogruCevapSayisi)
    }
})

ui.btn_quit.addEventListener("click",function(){
    window.location.reload(); //Sf tekrar yüklenmesi bu şekilde olur. En başa atar..
})

ui.btn_replay.addEventListener("click",function(){
     quiz.soruIndex = 0;
     quiz.dogruCevapSayisi = 0;
     ui.btn_start.click(); //Start'a tıklamış gibi olacaktır. btn_start'ı çağırıp tıklatıyoruz.
     //quiz_box aktif olacak. Çünkü üstteki kod sayesinde btn_Start click olayı gerçekleşiyor.
     ui.score_box.classList.remove("active"); //Skor tablosunun tekrar gözükmemesi için
})


function optionSelected(option){
    clearInterval(counter); //Başlatılan süreç bir seçim yapıldığında da durması için.
    clearInterval(counterLine); //Bir seçenek seçildiğinde durması gerekir.
    let cevap = option.querySelector("span b").textContent; //İlgili tıklama ile span altındaki b içindekinin text contentini alırız.
    let soru = quiz.soruGetir();
    if(soru.cevabiKontrolEt(cevap)){ //cevabiKontrolEt'e cevap değişkeni geldiğinde eşit ise correct aktif olacak.
        quiz.dogruCevapSayisi += 1;
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend",ui.correctIcon)
    }
    else{
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend",ui.inCorrectIcon)
    }

    for(let i=0; i< ui.option_list.children.length; i++){ //Optionlist değişkeninin çocuklarının sayısı kadar.
        ui.option_list.children[i].classList.add("disabled");
    }

    ui.btn_next.classList.add("show");

}
let counter;
function startTimer(time){
    counter =  setInterval(timer,1000) //Timer adında metod verdik ve bunu 1000 yani 1 sn;'de bir çağıracak

    function timer(){
        ui.time_second.textContent = time; //İlk başta 10 gözükecek
        time--;  //Bu fonksiyon 1 saniyedee 1 çağırılacaktır. Ve her seferinde time 1 düşecek.
    
        if(time < 0) {
            clearInterval(counter); //Intervali iptal etmek için.

            ui.time_text.textContent ="Süre bitti!"

            let cevap = quiz.soruGetir().dogruCevap;  //Mevcut soru soruGetir ile geliyor.
            for(let option of ui.option_list.children){
                if(option.querySelector("span b").textContent == cevap){ //Doğru cevap ile span içindeki b yani a-b-c vs aynı ise alttaki kısım uygulanacak.
                    option.classList.add("correct");
                    option.insertAdjacentHTML("beforeend", ui.correctIcon);
                }
                //Doğru veya yanlış farketmeksizin if'ten sonra disabled özelliği eklenecek.
                option.classList.add("disabled");  
            }
            //Süre bittikten sonra disabled etkin olacak. O da olduktan sonra döngü bitince next butonu ortaya çıkması lazım.
            ui.btn_next.classList.add("show");
        }
    }
}
let counterLine;
function startTimerLine(){
    let line_width = 0;
    let counterLine = setInterval(timer,20);
    //20 yaptık. 20 ile her saniyenin 50'de 1'inde 1px artacak.
    function timer(){ //Her çağırdığında line_width üzerien 1 ekleyecek.
        line_width +=1;
        ui.time_line.style.width = line_width + "px";
    
        if(line_width > 549){
            clearInterval(counterLine)
        }
    }
}
