
const menuInterface = () => {
    const opt = parseInt(prompt('Choose an option:' +
        '\n 1. Add a card' +
        '\n 2. Draw a card' +
        '\n 3. Exit'));
    return opt;
}

const addCard = (deck) => {
    const card = prompt("Card's name: ");
    const cardAdded = deck.unshift(card);
    alert('You picked a card');
}

const drawCard = (deck) => {
    const cardRemoved = deck.shift();
    alert(`You drew the card ${cardRemoved}`);
}

const deck = [];
let globalMenu;

do {
    globalMenu = menuInterface();

    switch (globalMenu) {
        case 1:
            addCard(deck);
            break;
        case 2:
            drawCard(deck);
            break;
        case 3:
            alert('Exiting');
            break;
        default:
            alert('Invalid option');
            break;
    }
} while (globalMenu !== 3);