class SpeedTest {
    constructor(firstVehicle, firstVehicleSpeed, secondVehicle, secondVehicleSpeed) {
        this.firstVehicle = firstVehicle;
        this.firstVehicleSpeed = firstVehicleSpeed;
        this.secondVehicle = secondVehicle;
        this.secondVehicleSpeed = secondVehicleSpeed;
    }
}

function getInfo() {
    let firstVehicle = prompt('First vehicle:');
    let secondVehicle = prompt('Second vehicle:');
    let firstVehicleSpeed = parseFloat(prompt('First vehicle speed:'));
    let secondVehicleSpeed = parseFloat(prompt('Second vehicle speed:'));

    let speedTest = new SpeedTest(firstVehicle, firstVehicleSpeed, secondVehicle, secondVehicleSpeed);
    calculatingSpeed(speedTest.firstVehicleSpeed, speedTest.secondVehicleSpeed, speedTest.firstVehicle, speedTest.secondVehicle);
}

function calculatingSpeed(firstVehicleSpeed, secondVehicleSpeed, firstVehicle, secondVehicle) {
    if (firstVehicleSpeed > secondVehicleSpeed) {
        alert(firstVehicle + " is the fastest, with " + firstVehicleSpeed + " Km/h");
    } else if (firstVehicleSpeed < secondVehicleSpeed) {
        alert(secondVehicle + " is the fastest, with " + secondVehicleSpeed + " Km/h");
    } else {
        alert("Both have the same speed");
    }
}

getInfo();
