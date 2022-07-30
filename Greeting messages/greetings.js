var name = prompt("Please Enter your name: ");
var today = new Date();
var hrs = today.getHours();
//var hrs = 18
if(hrs<12){
  document.write(`Good Morning ${name}!`);
}

else if (hrs<18)
{
  document.write(`Good Afternoon ${name}!`);
}

else if(hrs<19){
  document.write(`Good Evening ${name}!`);
}
else {
  document.write(`Good Night ${name}!`);
}
