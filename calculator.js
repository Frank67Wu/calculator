
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
let singleEx = true;

let myNumbers = document.getElementsByClassName('number');
for (let i =0; i < myNumbers.length; i++) {
    myNumbers[i].addEventListener('click', e => {
        if (a == null) {
            a = parseInt(e.target.textContent);
            current = null;
            document.getElementsByClassName('display')[0].textContent = "";
            document.getElementsByClassName('display')[0].textContent += ` ${a}`
        }
        else if (operator != null){
            b = a;
            a = parseInt(e.target.textContent);
            document.getElementsByClassName('display')[0].textContent += ` ${a}`
        }
        else {
            console.log(e.target.textContent);
            let aLen = a.toString().length;
            a = 10 * a;
            a += parseInt(e.target.textContent);
            let str = document.getElementsByClassName('display')[0].textContent;
            str = str.slice(0, -aLen);
            document.getElementsByClassName('display')[0].textContent = str;
            document.getElementsByClassName('display')[0].textContent += `${a}`
            console.log(a);
            console.log(b);
        }
    })
}

let myOperators = document.getElementsByClassName('operation');

for (i = 0; i < myOperators.length; i++) {
    myOperators[i].addEventListener('click', e => {
        if (!singleEx && operator != null) {
            current = operate(operator, b, a);
        }
        if (operator == null && a != null) {
            operator = e.target.textContent;
            document.getElementsByClassName('display')[0].textContent += ` ${operator}`
        }
        else if (operator == null && current != null) {
            a = current;
            operator = e.target.textContent;
            document.getElementsByClassName('display')[0].textContent += ` ${operator}`
        }
    })
}

let myEqual = document.getElementById('equals');
myEqual.addEventListener('click', e => {
    if (singleEx) {
        current = operate(operator, b, a);
    }
    else {
        current = operate(operator, current, a);
    }
    document.getElementsByClassName('display')[0].textContent = current; 
    a = null;
    b = null;
    operator = null;
})
