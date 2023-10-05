function addContact() {
    const contactSection = document.getElementById('contacts-list');

    const h3 = document.createElement('h3');
    h3.innerText = 'Contact';

    const ul = document.createElement('ul');

    const nameLi = document.createElement('li');
    nameLi.innerText = 'Name: ';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'fullname';
    ul.appendChild(nameLi);
    nameLi.appendChild(nameInput);
    ul.appendChild(document.createElement('br'));

    const phoneLi = document.createElement('li');
    phoneLi.innerText = 'Phone: ';
    const phoneInput = document.createElement('input');
    phoneInput.type = 'text';
    phoneInput.name = 'phone';
    ul.appendChild(phoneLi);
    phoneLi.appendChild(phoneInput);
    ul.appendChild(document.createElement('br'));

    const addressLi = document.createElement('li');
    addressLi.innerHTML = '<label for="address">Address: </label>';
    const addressInput = document.createElement('input');
    addressInput.type = 'text';
    addressInput.name = 'address';
    addressInput.id = 'address';
    addressLi.appendChild(addressInput);
    ul.appendChild(addressLi);
    ul.appendChild(document.createElement('br'));

    contactSection.append(h3, ul);
}

function removeContact() {
    const contactSection = document.getElementById('contacts-list');

    const titles = document.getElementsByTagName('h3');
    const contacts = document.getElementsByTagName('ul');

    console.log(titles);
    console.log(contacts);

    contactSection.removeChild(titles[titles.length - 1]);
    contactSection.removeChild(contacts[contacts.length - 1]);

    console.log(titles);
    console.log(contacts);
}
