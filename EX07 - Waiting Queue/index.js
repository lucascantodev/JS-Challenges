const menuInterface = () => {
    const opt = parseInt(prompt('Choose an option:' +
        '\n 1. List of patients' +
        '\n 2. Add a new patient' +
        '\n 3. Check next patient' +
        '\n 4. Exit'));
    return opt;
}

const addPatient = (patients) => {
    const start = prompt("Patient's name: ");
    patients.push(start);
}

const listPatients = (patients) => {
    for (let index = 0; index < patients.length; index++) {
        alert('List of patients: \n' + (index + 1) + '° ' + patients[index]);
    }
}

const checkNextPatient = (patients) => {
    if (patients.length > 0) {
        alert('The next patient is: ' + patients[0]);
        patients.shift();
    } else {
        alert('No patients in the queue.');
    }
}

const patients = [];
let globalMenuInterface;

do {
    globalMenuInterface = menuInterface();

    switch (globalMenuInterface) {
        case 1:
            listPatients(patients);
            break;
        case 2:
            addPatient(patients);
            break;
        case 3:
            checkNextPatient(patients);
            break;
        case 4:
            alert('Ending program...');
            break;
        default:
            alert('Invalid option!');
    }
} while (globalMenuInterface !== 4);
