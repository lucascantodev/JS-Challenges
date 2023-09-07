class Unities {
    constructor(meter, conversionOption) {
        this.meter = meter;
        this.conversionOption = conversionOption;
    }
}

function getInfo() {
    const meter = parseFloat(prompt("Value in meters:"));
    const conversionOption = parseInt(prompt(
        "Choose which unit of measurement you would like to convert to. These are the options:" +
        "\n 1. Milimiter (mm)" +
        "\n 2. Centimeter (cm)" +
        "\n 3. Decimeter (dm)" +
        "\n 4. Decameter (dam)" +
        "\n 5. Hectometer (hm)" +
        "\n 6. Kilometer (km)",));
    return new Unities(meter, conversionOption);
}

function metersToMilimeters(meter) {
    const convertedValue = meter * 1000;
    return alert(convertedValue);
}

function metersToCentimeters(meter) {
    const convertedValue = meter * 100;
    return alert(convertedValue);
}

function metersToDecimeters(meter) {
    const convertedValue = meter * 10;
    return alert(convertedValue);
}

function metersToDecameters(meter) {
    const convertedValue = meter / 10;
    return alert(convertedValue);
}

function metersToHectometers(meter) {
    const convertedValue = meter / 100;
    return alert(convertedValue);
}

function metersToKilometers(meter) {
    const convertedValue = meter / 1000;
    return alert(convertedValue);
}

const unities = getInfo();

switch (unities.conversionOption) {
    case 1:
        metersToMilimeters(unities.meter);
        break;
    case 2:
        metersToCentimeters(unities.meter);
        break;
    case 3:
        metersToDecimeters(unities.meter);
        break;
    case 4:
        metersToDecameters(unities.meter);
        break;
    case 5:
        metersToHectometers(unities.meter);
        break;
    case 6:
        metersToKilometers(unities.meter);
        break;
    default:
        alert("Invalid option.");
        break;
}