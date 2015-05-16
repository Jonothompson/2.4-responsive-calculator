
var numberList = [];

var calculated = 0;
var displayed = "0";


// Number button press!
function alertNumber(event) {
  var button = event.target;
  var number = Number(button.textContent);
  var lastPressed = numberList.push(number);
  changeContent(numberList);
}

[].forEach.call(document.querySelectorAll('.calc-button-number'), function(element){
  element.addEventListener('click', alertNumber);
}, false);


// Operator button press!
function alertOperator(event) {
  var button = event.target;
  var text = button.textContent;
  var lastPressed = numberList.push(text);
}

[].forEach.call(document.querySelectorAll('.operator'), function(element){
  element.addEventListener('click', alertOperator);
}, false);


// Clear button press!
function alertActionClear(event) {
  var button = event.target;
  var text = button.textContent;
  numberList = [];
  changeContent(displayed)
}

[].forEach.call(document.querySelectorAll('.calc-button-ac'), function(element){
  element.addEventListener('click', alertActionClear);
}, false);


// Negative button press!
function alertToNegative(event) {
  var button = event.target;
  var text = button.textContent;
  alert(text);
}

[].forEach.call(document.querySelectorAll('.calc-button-plusminus'), function(element){
  element.addEventListener('click', alertToNegative);
}, false);


// Percentage button press!
function alertPercentage(event) {
  var button = event.target;
  var text = button.textContent;
  alert(text);
}

[].forEach.call(document.querySelectorAll('.calc-button-percent'), function(element){
  element.addEventListener('click', alertPercentage);
}, false);


// Period button press!
function alertPeriod(event) {
  var button = event.target;
  var text = button.textContent;
  var lastPressed = numberList.push(text);
}

[].forEach.call(document.querySelectorAll('.calc-button-period'), function(element){
  element.addEventListener('click', alertPeriod);
}, false);


// Equal button press!
function alertEquals(event) {
  var button = event.target;
  var text = button.textContent;
  var equationInput = numberList.join("");
  var equationAnswer = eval(equationInput);
  alert(equationAnswer);
  document.getElementById("calculated").innerText = displayed;
}

[].forEach.call(document.querySelectorAll('.calc-button-equal'), function(element){
  element.addEventListener('click', alertEquals);
}, false);


// Calculated display change!
function changeContent (calculated) {
    	var myelement = document.getElementById("calculated");
    	myelement.innerHTML = calculated;
    }

