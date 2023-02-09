// function percent() {}
function clean(){
  document.getElementById("result").innerHTML = "";
}

function back() {
  var result = document.getElementById("result").innerHTML;
  document.getElementById("result").innerHTML = result.substring(0,result.length -2);  
}

function insert(num){
  var numero = document.getElementById("result").innerHTML;
  document.getElementById("result").innerHTML = numero + num;
}

function plusMinus(){
  var signal = document.getElementById("result").innerHTML;
  document.getElementById("result").innerHTML = signal * (-1);
}

function equals(){
  var result = document.getElementById("result").innerHTML;
  document.getElementById("result").innerHTML = eval(result);
}