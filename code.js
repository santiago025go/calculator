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
    if(numberTwo === 0) {
        clearDisplay = true;
        return 'ERROR';
    }    
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
const equalButton = document.querySelector('#equal');
const delButton = document.querySelector('.del');
const clrButton = document.querySelector('.clr');
let firstNumber, secondNumber, operator, clearDisplay = false;

numberButtons.forEach((button) => button.addEventListener('click', () => {
    if(clearDisplay) {
        display.textContent = '';
        clearDisplay = false;
    }
    display.textContent += button.textContent;
}));

dotButton.addEventListener('click', () => {
    if(clearDisplay) {
        display.textContent = '';
        clearDisplay = false;
    }
    if(!display.textContent.includes(dotButton.textContent)){
        display.textContent += dotButton.textContent;
    }
});

operatorButtons.forEach((button) => button.addEventListener('click', () => {
    firstNumber = Number(display.textContent);
    operator = button.textContent;
    clearDisplay = true;
    if(display.textContent === 'ERROR'){
        firstNumber = 0;
    }
}));

equalButton.addEventListener('click', () => {
    secondNumber = Number(display.textContent);
    if(display.textContent === 'ERROR'){
        secondNumber = 0;
    }
    let operationResult = operate(firstNumber, secondNumber, operator);
    if(operationResult !== 'ERROR' && operationResult % 1 !== 0){
        operationResult = operationResult.toFixed(2);
    } 
    display.textContent = operationResult;
    clearDisplay = true;
});

clrButton.addEventListener('click', () => location.reload());

delButton.addEventListener('click', () => {
    if(display.textContent === 'ERROR'){
        let clickClrButton = new Event('click');
        clrButton.dispatchEvent(clickClrButton);
        return;
    }
    display.textContent = display.textContent.slice(0, -1);
});


