const calcScreen = document.querySelector('.screen');

const updateScreen = (number) => {
    calcScreen.value = number;
};

const nums = document.querySelectorAll(".number");

nums.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNum(event.target.value);
        updateScreen(currNum);
    });
});

let prevNum = ''; //akan diisi dengan angka 1
let calcOps = ''; //operasi + - x /
let currNum = ''; //angka 1

const inputNum = (number) => {
    if (currNum === '0') {
        currNum = number;
    } else {
        currNum += number;
    }
};

const ops = document.querySelectorAll(".operator");

ops.forEach((operator) => {
    operator.addEventListener("click", (event) =>{
        inputOps(event.target.value);
    });
});

const inputOps = (operator) => {
    if(calcOps === ''){
        prevNum = currNum;
    }
    calcOps = operator;
    currNum = '';
};

const equal = document.querySelector('.equal-sign');

equal.addEventListener('click', () => {
    calc();
    updateScreen(currNum);
});

const calc = () => {
    let result = '';
    switch(calcOps) {
        case '+':
            result = parseFloat(prevNum) + parseFloat(currNum);
            break;
        case '-':
            result = parseFloat(prevNum) - parseFloat(currNum);
            break;
        case '*':
            result = parseFloat(prevNum) * parseFloat(currNum);
            break;
        case '/':
            result = parseFloat(prevNum) / parseFloat(currNum);
            break;
        default:
            return;
    }
    currNum = result;
    calcOps = '';
}

const cls = document.querySelector('.all-clear');

cls.addEventListener('click', () => {
    clear();
    updateScreen(currNum);
});

const clear = () => {
    prevNum = '';
    calcOps = '';
    currNum = '0';
};

const decimal = document.querySelector('.decimal');

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value);
    updateScreen(currNum);
});

inputDecimal = (dot) => {
    if(currNum.includes('.')){
        return;
    };
    currNum += dot;
};

const percent = document.querySelector('.percentage');

percent.addEventListener('click', () => {
    if (currNum === '0') {
        currNum = '0';
    } else {
        currNum /= 100;
    }
    updateScreen(currNum);
});