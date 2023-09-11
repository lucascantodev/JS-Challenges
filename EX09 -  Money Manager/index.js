function getInfo() {
    const currentMoney = parseFloat(prompt('Money you have: '));
    return currentMoney;
}

function showMenu(money) {
    return prompt(`WELCOME\nYour money: R$ ${money}\n1. Add money\n2. Remove money\n3. Exit`);
}

let money = getInfo();
let option;

do {
    option = showMenu(money);

    switch (option) {
        case '1':
            const addingValue = parseFloat(prompt('How much money you want to add? '));
            money += addingValue;
            break;
        case '2':
            const removingValue = parseFloat(prompt('How much money you want to remove? '));
            money -= removingValue;
            break;
        case '3':
            alert('Finishing system...');
            break;
        default:
            alert('Invalid option');
            break;
    }
} while (option !== '3');
