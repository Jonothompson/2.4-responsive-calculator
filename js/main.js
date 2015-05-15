// 1. Write a function that alerts the value of a button
// 2. Write a event listener that listens for the event 
//    of clicking on a word button and calls the function from (1)
function alertButtonValue(event) {
  var button = event.target;
  var text = button.textContent;
  alert(text);
}

[].forEach.call(document.querySelectorAll('.calc-button-number'), function(element){
  element.addEventListener('click', alertButtonValue);
}, false);

function alertNumberPlusNumber(event) {
  var button = event.target;
  var number = Number(button.textContent);
  alert(number + number);
}

[].forEach.call(document.querySelectorAll('.calc-button-number'), function(element){
  element.addEventListener('click', alertNumberPlusNumber);
}, false);