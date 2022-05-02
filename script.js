// let backspace = document.querySelector('#backspace');
// let data7 = document.querySelector('#data7');
// let data8 = document.querySelector('#data8');
// let data9 = document.querySelector('#data9');
// let divide = document.querySelector('#divide');
// let data4 = document.querySelector('#data4');
// let data5 = document.querySelector('#data5');
// let data6 = document.querySelector('#data6');
// let multiply = document.querySelector('#multiply');
// let data1 = document.querySelector('#data1');
// let data2 = document.querySelector('#data2');
// let data3 = document.querySelector('#data3');
// let minus = document.querySelector('#minus');
// let point = document.querySelector('#point');
// let data0 = document.querySelector('#data0');



function add(a,b) {
    return a+b;
};

function subtract (a,b) {
    return a-b;
};

function multiply (a,b) {
    return a*b;
};

function divide (a,b) {
    return a/b;
};

function operate(operator, a, b) {
    if (operator=='+') {return add(a,b)};
    if (operator=='-') {return subtract(a,b)};
    if (operator=='*') {return multiply(a,b)};
    if (operator=='/') {return divide(a,b)};
};

let display = document.querySelector('#display');
display.textContent = 0;

let reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    displayValue = '';
    display.textContent = 0;
    operator = '';
    a = 0;
    b = 0;
});

let displayValue = '';
let nums = Array.from(document.querySelectorAll('.nums'));
nums.forEach(num => num.addEventListener('click', ()=> {
    displayValue += parseInt(num.textContent);
    display.textContent = displayValue;
    })
);

let a = 0;
let b = 0;
let operator = '';

let plus = document.querySelector('#plus');
plus.addEventListener('click', () => {
    if (operator !== '') {
        b = parseInt(displayValue);
        displayValue = operate(operator, a, b);
        display.textContent = displayValue;
    }
    a = parseInt(displayValue);
    displayValue = '';
    operator = '+';
});

let equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
    b = parseInt(displayValue);
    displayValue = operate(operator, a, b);
    display.textContent = displayValue;
    a = parseInt(displayValue);
    b = 0;
});