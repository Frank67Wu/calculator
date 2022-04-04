
function add(a, b) {
    return (a + b);
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return (a * b);
}

function divide(a, b) {
    if (b == 0) {
        a = null;
        b = null;
        operator = null;
        lastEntry = null;
        return null;
    }
    return a / b;
}

function operate(operator, a, b) {
    switch(operator) {
        case "+":
            return add(a, b);
            break;
        case "-": 
            return subtract(a, b);
            break;
        case "*":
            return multiply(a, b);
            break;
        case "/":
            return divide(a, b);
            break;


    }
}


let a = null;
let b = null;
let operator = null;
let current = null;
let lastEntry = null;

let myNumbers = document.getElementsByClassName('number');
for (let i =0; i < myNumbers.length; i++) {
    myNumbers[i].addEventListener('click', e => {
        if (a == null && current == null) {
            a = parseInt(e.target.textContent);
            current = null;
            document.getElementsByClassName('display')[0].textContent = "";
            document.getElementsByClassName('display')[0].textContent += ` ${a}`
            lastEntry = 'number';
        }
        else if (operator != null && lastEntry == 'operator'){
            if (operator == '/' && parseInt(e.target.textContent) == 0) {
                document.getElementsByClassName('display')[0].textContent = "error, divide by zero";
                current = null;
                a = null;
                b = null;
                operator = null;
                lastEntry = null;
            }
            else {
                b = a;
                a = parseInt(e.target.textContent);
                document.getElementsByClassName('display')[0].textContent += ` ${a}`
                lastEntry = 'number';
            }
        }
        else {
            let aLen = a.toString().length;
            a = 10 * a;
            a += parseInt(e.target.textContent);
            let str = document.getElementsByClassName('display')[0].textContent;
            str = str.slice(0, -aLen);
            document.getElementsByClassName('display')[0].textContent = str;
            document.getElementsByClassName('display')[0].textContent += `${a}`
            lastEntry = 'number';
        }
    })
}

let myOperators = document.getElementsByClassName('operation');

for (i = 0; i < myOperators.length; i++) {
    myOperators[i].addEventListener('click', e => {
        if (lastEntry != 'operator' && (current != null || a != null) ) {
            if (current == null) {
                current = operate(operator, b, a);
            }
            else {
                current = operate(operator, current, a);
            }
            operator = e.target.textContent;
            document.getElementsByClassName('display')[0].textContent += ` ${operator}`
            
            lastEntry = 'operator';
        }

    })
}

let myEqual = document.getElementById('equals');
myEqual.addEventListener('click', e => {
    if (lastEntry != 'operator') {
        if (current == null) {
            current = operate(operator, b, a);
        }
        else {
            current = operate(operator, current, a);
        }
        document.getElementsByClassName('display')[0].textContent = current;
    }
    else {
        document.getElementsByClassName('display')[0].textContent = "error";
    }
    a = null;
    b = null;
    lastEntry = null;
})


let myClear = document.getElementById('clear');
myClear.addEventListener('click', e => {
    document.getElementsByClassName('display')[0].textContent = "";
    a = null;
    b = null;
    operator = null;
    lastEntry = null;
    current = null;
})