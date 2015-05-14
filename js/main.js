var operation;

function plusPressed(){
  operation = '+';
}

function numberPressed(number){
  var displayedNumber = Number(document.getElementById('display').textContent);
  
  if(operation == '+') {
      displayedNumber = displayedNumber + number;
  } else if(operation == '-') {
    
  } else {
    displayedNumber = number;
  }
  
 document.getElementById('display').textContent = displayedNumber;
}

function ninePressed(event) {
  event.preventDefault();
  numberPressed(9);
}

document.getElementById('9').addEventListener('click', ninePressed);
document.getElementById('+').addEventListener('click', plusPressed);