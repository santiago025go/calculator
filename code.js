function add(numberOne, numberTwo){
    return numberOne + numberTwo;
}

function subtract(numberOne, numberTwo){
    return numberOne - numberTwo;
}

function multiply(numberOne, numberTwo){
    return numberOne * numberTwo;
}

function divide(numberOne, numberTwo){
    if(numberTwo === 0) return 'ERROR';
    return numberOne / numberTwo;
}

function percentage(numberOne, numberTwo){
    return numberOne / 100 * numberTwo;
}

function operate(numberOne, numberTwo, operator){
    switch(operator){
        case '+':
            return add(numberOne, numberTwo);
        case '-':
            return subtract(numberOne, numberTwo);
        case 'x':
            return multiply(numberOne, numberTwo);
        case '/':
            return divide(numberOne, numberTwo);
        case '%':
            return percentage(numberOne, numberTwo);        
    }
}


const numberButtons = document.querySelectorAll('.number');
const display = document.querySelector('.display p');
const dotButton = document.querySelector('.dot');
const operatorButtons = document.querySelectorAll('.operator');
let firstNumber, secondNumber, operator;

numberButtons.forEach((button) => button.addEventListener('click', () => {
    display.textContent += button.textContent;
}));

dotButton.addEventListener('click', () => {
    if(!display.textContent.includes(dotButton.textContent)){
        display.textContent += dotButton.textContent;
    }
});

operatorButtons.forEach((button) => button.addEventListener('click', () => {
    firstNumber = Number(display.textContent);
    operator = button.textContent;
}));


