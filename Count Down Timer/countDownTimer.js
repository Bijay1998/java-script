//Event cpunt down timer 

var countDownNow = new Date("Jan 1 2023 12:0:0").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownNow - now;

    var days = Math.floor(distance/(1000*60*60*24));
    var hours=Math.floor(distance%(1000*60*60*24)/(1000*60*60));
    var minutes = Math.floor(distance%(1000*60*60)/(1000*60));
    var sec = Math.floor(distance%(1000*60)/(1000));

    document.getElementById('timer').innerHTML = days + 'd ' + hours + 'h '+ minutes +"m " + sec +"s ";
 
    if(distance<0){
        clearInterval(x);
        document.getElementById('timer').innerHTML = "Time Expired."

    }

})