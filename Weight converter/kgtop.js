function weightConverter(valNum) {
  var valNum = valNum * 2.2046;
  var n  = valNum.toFixed(2);
  document.getElementById('outputPounds').innerHTML =n;
}
