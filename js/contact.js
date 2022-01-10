const regForm = document.querySelector('#register-form');
const fullName = document.querySelector('#fullName');
const subject = document.querySelector('#subject');
const email = document.querySelector('#email');
const address = document.querySelector('#address');
const contactError = document.querySelector('.contact-error');

fullName.addEventListener("input", function(){
    fullName.style.backgroundColor = "white";
    fullName.style.color = "black";

    if(fullName.value.length > 2){    
        fullName.style.backgroundColor = "green";
        fullName.style.color = "white";
    }
});
subject.addEventListener("input", function(){
    subject.style.backgroundColor = "white";
    subject.style.color = "black";

    if(subject.value.length > 10){    
        subject.style.backgroundColor = "green";
        subject.style.color = "white";
    }
});
email.addEventListener("input", function(){
    email.style.backgroundColor = "white";
    email.style.color = "black";

    if(email.value.length > 3){    
        email.style.backgroundColor = "green";
        email.style.color = "white";
    }
});
address.addEventListener("input", function(){
    address.style.backgroundColor = "white";
    address.style.color = "black";

    if(address.value.length >= 25){    
        address.style.backgroundColor = "green";
        address.style.color = "white";
    }
});
regForm.addEventListener('submit', function(event){
    contactError.innerHTML = "";
    if(fullName.value === ""){ 
        contactError.innerHTML += `<div class="contact-error error"><p>Please enter your name</p></div>`;
        event.preventDefault();
    }
    if(subject.value.length < 10){ 
        contactError.innerHTML += `<div class="contact-error error"><p>Please enter a message subject of at least 10 characters</p></div>`;
        event.preventDefault();
    }
    if(email.value === ""){ 
        contactError.innerHTML += `<div class="contact-error error"><p>Please enter a valid email address</p></div>`;
        event.preventDefault();
    }
    if(address.value.length < 25){ 
        contactError.innerHTML += `<div class="contact-error error"><p>Please enter your address, at least 25 characters</p></div>`;
        event.preventDefault();
    }
    else{
        contactError.innerHTML = `<div class="contact-error success"><p>Registered successfully</p></div>`;
        event.preventDefault();
    }
});
regForm.addEventListener('input', function(){
    contactError.innerHTML = "";
});