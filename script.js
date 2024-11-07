
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const submit = document.getElementById('submit');
const mainSection=document.getElementById('main-section');

submit.addEventListener('click', function(renderList) {
    renderList.preventDefault();
     const name = nameInput.value;
    const phone = phoneInput.value;
    
     if (!name || !phone) {
        alert('Please enter both name and phone number');
        return;
    }

    const contactList = document.createElement ('div');
    contactList.className='contact-list';

    const contactInfo = document.createElement('ul');
    contactInfo.className='contact-info';


    const listedName = document.createElement ('li');
    listedName.className= 'listed-name';
    listedName.innerText= name;
   

    const listedNumber= document.createElement('li');
    listedNumber.className='listed-number';
    listedNumber.innerText=phone;



    const changeBtn= document.createElement('button');
    changeBtn.className='change-btn';
    changeBtn.innerHTML= '<p> Ändra </p>';
   
    const deleteBtn= document.createElement('button');
    deleteBtn.className='delete-btn';
    deleteBtn.innerHTML= '<p> Radera </p>';

   
    contactInfo.appendChild(listedName);
     contactInfo.appendChild(listedNumber);
    contactInfo.appendChild(changeBtn);
    contactInfo.appendChild(deleteBtn);
     contactList.appendChild(contactInfo);
     mainSection.appendChild(contactList);
   
nameInput.value= '';
phoneInput.value= '';

changeBtn.addEventListener('click',function() {
  changeBtn.innerHTML= '<p>Spara</p>';
  const cancelBtn = document.createElement('button');
  cancelBtn.className='cancel-btn';
  cancelBtn.innerHTML='<p>Avbryt</p>';

  const nameChangeInput= document.createElement('input');
  nameChangeInput.type = 'text';
  nameChangeInput.value= listedName.innerText;

 const phoneChangeInput= document.createElement('input');
  phoneChangeInput.type = 'text';
  phoneChangeInput.value= listedNumber.innerText;

  contactInfo.replaceChild(nameChangeInput, listedName);
  contactInfo.replaceChild (phoneChangeInput, listedNumber);
contactInfo.appendChild(cancelBtn);
        changeBtn.addEventListener('click', function saveChanges() {
     
            listedName.innerText = nameChangeInput.value;
            listedNumber.innerText = phoneChangeInput.value;

        
            contactInfo.replaceChild(listedName, nameChangeInput);
            contactInfo.replaceChild(listedNumber, phoneChangeInput);

            changeBtn.innerHTML = '<p>Ändra</p>';
            cancelBtn.remove();


            changeBtn.removeEventListener('click', saveChanges);
        });

       
        cancelBtn.addEventListener('click', function () {

            contactInfo.replaceChild(listedName, nameChangeInput);
            contactInfo.replaceChild(listedNumber, phoneChangeInput);

          
            changeBtn.innerHTML = '<p>Ändra</p>';
            cancelBtn.remove();
        });
    });

 
    deleteBtn.addEventListener('click', function () {
        mainSection.removeChild(contactList);
    });
});


 
