function menu() {
    const option = prompt(`Choose an option:\n` +
        `1. Triangle area\n` +
        `2. Rectangle area\n` +
        `3. Square area\n` +
        `4. Trapezoid area\n` +
        `5. Circle area\n` +
        `6. Exit`);
    return option;
}

function baseAndHeight() {
    const base = prompt('Base:');
    const height = prompt('Height:');
    return { base, height };
}

function largerAndSmallerBase() {
    const smallerBase = prompt('Smaller base:');
    const largerBase = prompt('Larger base:');
    const height = prompt('Height:');
    return { smallerBase, largerBase, height };
}

function triangleArea() {
    const { base, height } = baseAndHeight();
    const area = base * height / 2;
    alert(`Area: ${area}`);
}

function rectangleArea() {
    const { base, height } = baseAndHeight();
    const area = base * height;
    alert(`Area: ${area}`);
}

function squareArea() {
    const side = prompt('Side:');
    const area = side * side;
    alert(`Area: ${area}`);
}

function trapezoidArea() {
    const { smallerBase, largerBase, height } = largerAndSmallerBase();
    const area = (parseFloat(largerBase) + parseFloat(smallerBase)) * height / 2;
    alert(`Area: ${area}`);
}

function circleArea() {
    const radius = prompt('Radius:');
    const area = Math.PI * radius * radius;
    alert(`Area: ${area}`);
}

let menuChoice;

do {
    menuChoice = menu();
    switch (menuChoice) {
        case '1':
            triangleArea();
            break;
        case '2':
            rectangleArea();
            break;
        case '3':
            squareArea();
            break;
        case '4':
            trapezoidArea();
            break;
        case '5':
            circleArea();
            break;
        case '6':
            alert('Exiting program...');
            break;
        default:
            alert('Invalid option!');
    }
} while (menuChoice != '6');
