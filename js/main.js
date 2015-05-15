
var numberList = [];
//var equationInput = numberList.join('');
//var equationAnswer = eval(equationInput);
var calculated = 0;
var displayed = "";


function alertNumber(event) {
  var button = event.target;
  var number = Number(button.textContent);
  var lastPressed = numberList.push(number);
  changeContent(displayed)

}

[].forEach.call(document.querySelectorAll('.calc-button-number'), function(element){
  element.addEventListener('click', alertNumber);
}, false);

function alertOperator(event) {
  var button = event.target;
  var text = button.textContent;
  var lastPressed = numberList.push(text);
}

[].forEach.call(document.querySelectorAll('.operator'), function(element){
  element.addEventListener('click', alertOperator);
}, false);

function alertActionClear(event) {
  var button = event.target;
  var text = button.textContent;
  numberList = [];
  calculated = 0;
}

[].forEach.call(document.querySelectorAll('.calc-button-ac'), function(element){
  element.addEventListener('click', alertActionClear);
}, false);

function alertToNegative(event) {
  var button = event.target;
  var text = button.textContent;
  alert(text);
}

[].forEach.call(document.querySelectorAll('.calc-button-plusminus'), function(element){
  element.addEventListener('click', alertToNegative);
}, false);

function alertPercentage(event) {
  var button = event.target;
  var text = button.textContent;
  alert(text);
}

[].forEach.call(document.querySelectorAll('.calc-button-percent'), function(element){
  element.addEventListener('click', alertPercentage);
}, false);

function alertPeriod(event) {
  var button = event.target;
  var text = button.textContent;
  var lastPressed = numberList.push(text);
}

[].forEach.call(document.querySelectorAll('.calc-button-period'), function(element){
  element.addEventListener('click', alertPeriod);
}, false);

function alertEquals(event) {
  var button = event.target;
  var text = button.textContent;
  var equationInput = numberList.join("");
  var equationAnswer = eval(equationInput);
  alert(equationAnswer);
}

[].forEach.call(document.querySelectorAll('.calc-button-equal'), function(element){
  element.addEventListener('click', alertEquals);
}, false);

//var calculator = function() {
//  
//}

function changeContent (calculated) {
    	var myelement = document.getElementById("calculated");
    	myelement.innerHTML = calculated;
    }
