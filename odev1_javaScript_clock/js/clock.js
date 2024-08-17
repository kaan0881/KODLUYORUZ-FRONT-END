
function showTime(){
  
    //tarih oluştur
    /*
      * aylar sıfırdan başlıyor
      * tarih formatı Y.m.d şeklinde yazılacak
    */
    const selectDate = new Date(2024, 12, 11 ,15,20,0); 
    
    //türkçe tarih
    const locale = 'tr-TR';
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const dateTurkishFormat = selectDate.toLocaleDateString(locale, options);
    //gün adı almak için böl
    const dateDay = dateTurkishFormat.split(" ");
    
    //sayaç oluşturma
    let countDownDate = selectDate.getTime();
    

    let x = setInterval(function() {
      
        let now = new Date().getTime();
      
        let distance = countDownDate - now;
        console.log(distance);
        
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        let text2 = document.getElementsByClassName("text2");

        let countDownText = `<div style="color:white"><span style="font-weight:900">${days}</span>g 
              <span style="font-weight:900">${hours}</span>s
              <span style="font-weight:900">${minutes}</span>d
              <span style="font-weight:900">${seconds}</span>sn
            </div><div>${dateDay[3]}</div>`;

        document.getElementById("myClock").innerHTML = countDownText;

        if (distance < 0) {
          clearInterval(x);
          document.getElementById("myClock").innerHTML = `<div class="font-weight:900"><span style="color:red">Ödev Tarihi Geçti.</span><br>${dateTurkishFormat}</div>`;
          document.getElementById("showDiv").style.display = "none";
        }
      }, 1000);
}

let myName = "";

myName = prompt("Adınız nedir?");


if(myName) {

    document.getElementById("myName").innerHTML = myName;
    
    showTime();
 
} else {
    alert("Adınızı girin");
    location.reload(true);
}






/**
function showTime(){
    let myName = prompt("Adınız nedir?");

   // document.getElementById("myName").innerHTML = myName;

   // var countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();

/*//*/ Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the result in the element with id="demo"
    document.getElementById("myClock").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
  
    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("myClock").innerHTML = "EXPIRED";
    }
  }, 1000);*/
 /* } */

