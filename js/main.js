
var numberList = [];
var calculated = 0;
var displayed = " ";


// addEventListeners to all buttons  *****************************

[].forEach.call(document.querySelectorAll('.calc-button-number'), function(element){
  element.addEventListener('click', alertNumber);
}, false);

[].forEach.call(document.querySelectorAll('.operator'), function(element){
  element.addEventListener('click', alertOperator);
}, false);

[].forEach.call(document.querySelectorAll('.calc-button-plusminus'), function(element){
  element.addEventListener('click', alertToNegative);
}, false);

[].forEach.call(document.querySelectorAll('.calc-button-percent'), function(element){
  element.addEventListener('click', alertPercentage);
}, false);

[].forEach.call(document.querySelectorAll('.calc-button-period'), function(element){
  element.addEventListener('click', alertPeriod);
}, false);

[].forEach.call(document.querySelectorAll('.calc-button-equal'), function(element){
  element.addEventListener('click', alertEquals);
}, false);

[].forEach.call(document.querySelectorAll('.calc-button-ac'), function(element){
  element.addEventListener('click', alertActionClear);
}, false);

// Number button press!
function alertNumber(event) {
  var button = event.target;
  var number = button.textContent;
  numberList.push(number);
  displayed+=number;
  changeContent(displayed);
}

// Operator button press!
function alertOperator(event) {
  var button = event.target;
  var text = button.textContent;
  numberList.push(text);
  displayed+=text;
  changeContent(displayed);
}


// Clear button press!
function alertActionClear(event) {
  var button = event.target;
  var text = button.textContent;
  numberList.push ([]);
  changeContent(calculated)
}


// Negative button press!
function alertToNegative(event) {
  var button = event.target;
  var text = button.textContent;
  numberList.push(text);
  displayed+=text;
  changeContent(displayed);
}


// Percentage button press!
function alertPercentage(event) {
  var button = event.target;
  var text = button.textContent;
  displayed+=text;
  changeContent(displayed);
}


// Period button press!
function alertPeriod(event) {
  var button = event.target;
  var text = button.textContent;
  numberList.push(text);
  displayed+=text;
  changeContent(displayed);
}


// Equal button press!
function alertEquals(event) {
  var button = event.target;
  var text = button.textContent;
  var equationInput = numberList.join(" ");
  var equationAnswer = eval(equationInput);
  document.getElementById("calculated").innerText = displayed;
  displayed+=text;
  changeContent(equationAnswer);
    numberList = [];
  numberList.push(equationAnswer);
}


// Calculated display change!
function changeContent (calculated) {
    	var myelement = document.getElementById("calculated");
    	myelement.innerHTML = calculated;
    }

