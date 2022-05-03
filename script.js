
function operate(operator, a, b) {
    if (operator=='+') {return (a+b)};
    if (operator=='-') {return (a-b)};
    if (operator=='*') {return (a*b)};
    if (operator=='/') {return (a/b)};
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

let backspace = document.querySelector('#backspace');
backspace.addEventListener('click', () => {
    displayValue = displayValue.toString();
    displayValue = displayValue.substring(0, displayValue.length - 1);
    display.textContent = displayValue;
    if (displayValue == '') {
        display.textContent = 0;
    }
});

let point = document.querySelector('#point');
point.addEventListener('click', () => {
    if (displayValue == '') {displayValue += '0';};
    if (displayValue.indexOf('.') == -1) {
        displayValue += '.';
        display.textContent = displayValue;
    };
});

let displayValue = '';
let nums = Array.from(document.querySelectorAll('.nums'));
nums.forEach(num => num.addEventListener('click', ()=> {
    if (displayValue.length>10) {return};
    displayValue += parseFloat(num.textContent);
    display.textContent = displayValue;
    })
);

let a = 0;
let b = 0;
let operator = '';

let plus = document.querySelector('#plus');
plus.addEventListener('click', () => {
    if (displayValue == '') {return};
    if (operator !== '') {
        b = parseFloat(displayValue);
        displayValue = operate(operator, a, b);
        display.textContent = parseFloat(displayValue);
    }
    a = parseFloat(displayValue);
    displayValue = '';
    operator = '+';
});


let minus = document.querySelector('#minus');
minus.addEventListener('click', () => {
    if (displayValue == '') {return};
    if (operator !== '') {
        b = parseFloat(displayValue);
        displayValue = operate(operator, a, b);
        display.textContent = parseFloat(displayValue);
    }
    a = parseFloat(displayValue);
    displayValue = '';
    operator = '-';
});

let multiply = document.querySelector('#multiply');
multiply.addEventListener('click', () => {
    if (displayValue == '') {return};
    if (operator !== '') {
        b = parseFloat(displayValue);
        displayValue = operate(operator, a, b);
        display.textContent = parseFloat(displayValue);
    }
    a = parseFloat(displayValue);
    displayValue = '';
    operator = '*';
});

let divide = document.querySelector('#divide');
divide.addEventListener('click', () => {
    if (displayValue == '') {return};
    if (operator !== '') {
        b = parseFloat(displayValue);
        displayValue = operate(operator, a, b);
        display.textContent = parseFloat(displayValue);
    }
    a = parseFloat(displayValue);
    displayValue = '';
    operator = '/';
});

let equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
    if (operator=='') {return};
    b = parseFloat(displayValue);
    displayValue = operate(operator, a, b);
    display.textContent = parseFloat(displayValue);
    a = parseFloat(displayValue);
    b = 0;
    operator = '';
});

document.addEventListener ('click', () => {
    if (display.textContent == Infinity || display.textContent == -Infinity) {
        displayValue = '';
        operator = '';
        a = 0;
        b = 0;
        display.textContent = 'Rickroll';
        setTimeout(() => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ'), 1000);
    }
});

