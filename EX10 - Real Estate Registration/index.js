const propertiesArr = [];

const menu = () => {
    const option = prompt('Choose an option:\n' +
        '1. Add a new property\n' +
        '2. List all properties\n' +
        '3. Exit');
    return option;
}

const registerProperty = () => {
    const propertyObj = {};
    const ownerName = prompt("Owner's name: ");
    propertyObj.ownerName = ownerName;
    const bedroomsNumber = prompt("Number of bedrooms: ");
    propertyObj.bedroomsNumber = bedroomsNumber;
    const bathroomsNumber = prompt("Number of bathrooms: ");
    propertyObj.bathroomsNumber = bathroomsNumber;
    const garage = prompt("Does it have a garage?");
    propertyObj.garage = garage;

    propertiesArr.push(propertyObj);
}

const listProperties = () => {
    for (let i = 0; i < propertiesArr.length; i++) {
        const propertyName = propertiesArr[i];
        checkFields(propertyName);
        alert(`Property's: ${i + 1};\n` +
            `Owner's name: ${propertyName.ownerName};\n` +
            `Number of bedrooms: ${propertyName.bedroomsNumber};\n` +
            `Number of bathrooms: ${propertyName.bathroomsNumber};\n` +
            `Number of garage: ${propertyName.garage};\n`);
    }
}

const checkFields = (propertyName) => {
    propertyName.ownerName = propertyName.ownerName || "Doesn't have an owner";
    propertyName.bedroomsNumber = propertyName.bedroomsNumber || "Doesn't have a bedroom";
    propertyName.bathroomsNumber = propertyName.bathroomsNumber || "Doesn't have a bathroom";
    propertyName.garage = propertyName.garage || "Doesn't have a garage";
}

let choice;

do {
    choice = menu();
    switch (choice) {
        case '1':
            registerProperty();
            break;
        case '2':
            listProperties();
            break;
        case '3':
            alert('Program exited.');
            break;
        default:
            alert('Invalid option. Please try again.');
    }
} while (choice != 3);