function getInput(promptMessage) {
    return parseFloat(prompt(promptMessage));
}

function displayResult(area) {
    alert(`Area: ${area}`);
}

function getMenuChoice() {
    const option = prompt(`Choose an option:\n` +
        `1. Triangle area\n` +
        `2. Rectangle area\n` +
        `3. Square area\n` +
        `4. Trapezoid area\n` +
        `5. Circle area\n` +
        `6. Exit`);
    return option;
}

function getBaseAndHeight() {
    const base = getInput('Base:');
    const height = getInput('Height:');
    return { base, height };
}

function getLargerAndSmallerBase() {
    const smallerBase = getInput('Smaller base:');
    const largerBase = getInput('Larger base:');
    const height = getInput('Height:');
    return { smallerBase, largerBase, height };
}

function calculateTriangleArea() {
    const { base, height } = getBaseAndHeight();
    const area = base * height / 2;
    return area;
}

function calculateRectangleArea() {
    const { base, height } = getBaseAndHeight();
    const area = base * height;
    return area;
}

function calculateSquareArea() {
    const side = getInput('Side:');
    const area = side * side;
    return area;
}

function calculateTrapezoidArea() {
    const { smallerBase, largerBase, height } = getLargerAndSmallerBase();
    const area = (parseFloat(largerBase) + parseFloat(smallerBase)) * height / 2;
    return area;
}

function calculateCircleArea() {
    const radius = getInput('Radius:');
    const area = Math.PI * radius * radius;
    return area;
}

let menuChoice;

do {
    menuChoice = getMenuChoice();
    switch (menuChoice) {
        case '1':
            displayResult(calculateTriangleArea());
            break;
        case '2':
            displayResult(calculateRectangleArea());
            break;
        case '3':
            displayResult(calculateSquareArea());
            break;
        case '4':
            displayResult(calculateTrapezoidArea());
            break;
        case '5':
            displayResult(calculateCircleArea());
            break;
        case '6':
            alert('Exiting program...');
            break;
        default:
            alert('Invalid option!');
    }
} while (menuChoice != '6');
