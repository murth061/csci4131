function makePassword(){
  var length = document.querySelector('#length').value;
  var max = document.querySelector('#max').value;
  var min = document.querySelector('#min').value;
  var easyType = document.getElementById("type").checked;
  var numberSub = document.getElementById("sub").checked;
  document.body.style.backgroundColor = blue;
  document.getElementById("arsenal").innerHTML = max;
   document.getElementById("arsenal").innerHTML = min;
   document.getElementById("arsenal").innerHTML = easyType;
  
  
  }


  