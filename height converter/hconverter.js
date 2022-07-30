document.getElementById('submit').addEventListener("click", convertToCm);

function convertToCm() {
  //converting feet into inch
  var feetToInch =parseInt(document.getElementById('feet').value*12);
  var inch = parseInt(document.getElementById("inch").value);

  var cm = (feetToInch +inch)*2.54;
  var n = cm.toFixed(0);

  document.getElementById("result").innerHTML=n;

}
