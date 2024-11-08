const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const submitButton = document.getElementById('submit');
const messageContainer = document.getElementById('message-container');


const contactListContainer = document.createElement('div');
contactListContainer.id = 'contact-list-container';
document.getElementById('main-section').appendChild(contactListContainer);


const clearAllButton = document.getElementById('clear-all');
submitButton.parentNode.appendChild(clearAllButton);


function displayValidationMessage(message) {
    messageContainer.textContent = message;
   
}


function createContact(name, phone) {
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact');

    const nameField = document.createElement('input');
    nameField.value = name;
    nameField.disabled = true;

    const phoneField = document.createElement('input');
    phoneField.value = phone;
    phoneField.disabled = true;

    const editButton = document.createElement('button');
    editButton.textContent = 'Ändra';

    editButton.addEventListener('click', function () {
        if (nameField.disabled) {
            nameField.disabled = false;
            phoneField.disabled = false;
            editButton.textContent = 'Spara';
        } else {

            if (!nameField.value.trim() || !phoneField.value.trim()) {
                displayValidationMessage('Får ej skapa tom kontakt');
                return;
            }
            nameField.disabled = true;
            phoneField.disabled = true;
            editButton.textContent = 'Ändra';
            messageContainer.textContent = ''; 
        }
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Radera';
    deleteButton.classList.add('delete-btn');

    deleteButton.addEventListener('click', function () {
        contactListContainer.removeChild(contactDiv);
    });

    contactDiv.appendChild(nameField);
    contactDiv.appendChild(phoneField);
    contactDiv.appendChild(editButton);
    contactDiv.appendChild(deleteButton);

    contactListContainer.appendChild(contactDiv);
}


submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    messageContainer.textContent = '';

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();

    if (!name || !phone) {
        displayValidationMessage('Fyll i namn och nummer');
        return;
    }

    createContact(name, phone);

    nameInput.value = '';
    phoneInput.value = '';
});


function clearAllContacts() {
    contactListContainer.innerHTML = '';
}


clearAllButton.addEventListener('click', clearAllContacts);
