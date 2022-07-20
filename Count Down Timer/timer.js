//event count down timer
var countDownNow = new Date("Jan 1 2023 12:0:0").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    //distance is the time left
    var distance = countDownNow - now;
    //days is the number of days left
    var days = Math.floor(distance/(1000*60*60*24));
    //hours is the number of hours left
    var hours=Math.floor(distance%(1000*60*60*24)/(1000*60*60));
    //minutes is the number of minutes left
    var minutes = Math.floor(distance%(1000*60*60)/(1000*60));
    var sec = Math.floor(distance%(1000*60)/(1000));

    document.getElementById('timer').innerHTML = days + 'd ' + hours + 'h '+ minutes +"m " + sec +"s ";
    //if the time is up, clear the interval
    if(distance<0){
        clearInterval(x);
        document.getElementById('timer').innerHTML = "Time Expired."
    }
})