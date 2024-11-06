/*const nameInput = document.getElementById('name')
const phoneInput = document.getElementById('phone')

const listName = document.getElementById('list-name')
const listPhone= document.getElementById('list-phone')
const contactInfo=document.getElementById('contact-form')
const contactList = document.getElementById ('contact-list')

submit.addEventListener(click, () => {

    const name= nameInput.value.trim();
    const phone = phoneInput.value.trim();

    if (name && phone) {
        contactInfo.innerHTML =
         <div id="list-name"> ${name}</div>
        <div id="list-phone">${phone} </div>
        <div id="buttons">
    <button id="change-btn">Ändra</button>
            <button id="delete-btn">Radera</button>
            </div>;
contactList.appendChild(contactInfo);
nameInput.value= '';
phoneInput.value='';
const changeBtn= document.getElementById('change-btn')
const deleteBtn= document.querySelector('delete-btn')
  changeBtn.addEventListener('click', () => editContact(contactInfo));
        deleteBtn.addEventListener('click', () => contactInfo.remove());
    }
})*/
const nameInput = document.getElementById('name')
const phoneInput = document.getElementById('phone')
const submit = document.getElementById('submit')

submit.addEventListener('click', function(renderList) {
    renderList.preventDefault();
    alert('clicked submit')
})