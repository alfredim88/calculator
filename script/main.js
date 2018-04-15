var displayValue = '0';
var firstNum = "";
var secondNum = "";
var operator = undefined;

const screen = document.querySelector('.screen');
screen.textContent = displayValue;

const cleaner = document.getElementById('clear');
cleaner.addEventListener('click', clean);

function clean () {
  displayValue = 0;
  firstNum = 0;
  secondNum = 0;
  operator = undefined;
  updateDisplay();
}


 for (var i = 0; i < 10; i++){
 const num = document.querySelectorAll('.num');
 num[i].addEventListener("click", operate);
 }

function operate(e) {
  var num = e.target.textContent;
  displayValue += num;
  updateDisplay();
}

function updateDisplay () {
  screen.textContent = displayValue;
}

function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}
