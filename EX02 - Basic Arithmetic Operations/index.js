class Numbers {
    constructor(firstNumber, secondNumber) {
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
    }
}

function typeNumber() {
    let firstNumber = parseFloat(prompt("Type your first number:"));
    let secondNumber = parseFloat(prompt("Type your second number:"));

    return new Numbers(firstNumber, secondNumber);
}

function Addition(firstNumber, secondNumber) {
    let additionOperation = firstNumber + secondNumber;
    return additionOperation;
}

function Subtraction(firstNumber, secondNumber) {
    let substractionOperation = firstNumber - secondNumber;
    return substractionOperation;
}

function Multiplication(firstNumber, secondNumber) {
    let multiplicationOperation = firstNumber * secondNumber;
    return multiplicationOperation;
}

function Division(firstNumber, secondNumber) {
    let divisionOperation = firstNumber / secondNumber;
    return divisionOperation;
}

let userTypedNumbers = typeNumber();
let numbersAddition = Addition(userTypedNumbers.firstNumber, userTypedNumbers.secondNumber);
let numbersSubtraction = Subtraction(userTypedNumbers.firstNumber, userTypedNumbers.secondNumber);
let numbersMultiplication = Multiplication(userTypedNumbers.firstNumber, userTypedNumbers.secondNumber);
let numberDivision = Division(userTypedNumbers.firstNumber, userTypedNumbers.secondNumber);

alert('Addiition result: ' + numbersAddition);
alert('Subtraction result: ' + numbersSubtraction);
alert('Multiplication result: ' + numbersMultiplication);
alert('Division result: ' + numberDivision);