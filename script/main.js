var displayValue = '0';
var firstNum = "";
var secondNum = "";
var operator = '';

const screen = document.querySelector('.screen');
screen.textContent = displayValue;

const multiplication = document.getElementById('multiplication');
multiplication.addEventListener('click', mult => operator = '*');

const division = document.getElementById('division');
division.addEventListener('click', mult => operator = '/');

const subtraction = document.getElementById('subtraction');
subtraction.addEventListener('click', mult => operator = '-');

const theSum = document.getElementById('theSum');
theSum.addEventListener('click', mult => operator = '+');


for (var i = 0; i < 10; i++){
const num = document.querySelectorAll('.num');
num[i].addEventListener("click", pusher);
}

function pusher(e) {

if(operator === '') {
   if(displayValue[0] == 0){
   displayValue = "";
 }
  if(displayValue.length>9 || displayValue == 'overflow'){
   displayValue = 'overflow';
   updateDisplay();
 } else {
   var num = e.target.textContent;
   num = num.replace(/\s/g, "");
   firstNum += num;
   displayValue = firstNum;
   updateDisplay();
 } } else {
   if(displayValue.length>9 || displayValue == 'overflow'){
    displayValue = 'overflow';
    updateDisplay();
  } else {
    var num = e.target.textContent;
    num = num.replace(/\s/g, "");
    secondNum += num;
    displayValue = secondNum;
    updateDisplay();
 }
}
}

const cleaner = document.getElementById('clear');
cleaner.addEventListener('click', clean);

function clean () {
  firstNum = '';
  secondNum = '';
  displayValue = '0';
  operator = '';
  updateDisplay();
}

const equal = document.getElementById('equal');
equal.addEventListener('click', operationCall);

function operationCall () {
  switch (operator) {
    case '*':
      multiply();
      break;
    case '/':
      divide();
      break;
    case '+':
      add();
      break;
    case '-':
      subtract();
      break;
    default:
    displayValue = displayValue;
  }
}


function updateDisplay () {
  screen.textContent = displayValue;
}

function add() {
  displayValue = (firstNum * 1) + (secondNum * 1);
  firstNum = displayValue;
  secondNum = '';
  updateDisplay();
}

function subtract() {
  displayValue = firstNum - secondNum;
  firstNum = displayValue;
  secondNum = '';
  updateDisplay();
}

function multiply() {
	displayValue = firstNum * secondNum;
  firstNum = displayValue;
  secondNum = '';
  updateDisplay();
}

function divide() {
  displayValue = firstNum / secondNum;
  firstNum = displayValue;
  secondNum = '';
  updateDisplay();
}
