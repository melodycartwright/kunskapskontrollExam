
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const submitButton = document.getElementById('submit');
const mainSection = document.getElementById('main-section');
const messageContainer = document.getElementById('message-container');


submitButton.addEventListener('click', function (e) {
    e.preventDefault();

    messageContainer.textContent = '';

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();

    if (!name || !phone) {
        messageContainer.textContent = 'Please enter both name and phone number';
        return;
    }

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
            nameField.disabled = true;
            phoneField.disabled = true;
            editButton.textContent = 'Ändra';
        }
    });

 
    const deleteButton = document.createElement('button');
    deleteButton.className=('delete-btn')
    deleteButton.textContent = 'Radera';
    deleteButton.addEventListener('click', function () {
        mainSection.removeChild(contactDiv);
    });

 
    contactDiv.appendChild(nameField);
    contactDiv.appendChild(phoneField);
    contactDiv.appendChild(editButton);
    contactDiv.appendChild(deleteButton);

   
    mainSection.appendChild(contactDiv);
    nameInput.value = '';
    phoneInput.value = '';
});
