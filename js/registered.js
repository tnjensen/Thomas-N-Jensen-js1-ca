const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const fullName = params.get('name');
const subject = params.get('subject');
const email = params.get('email');
const address = params.get('address');

const result = document.querySelector('.registered');

function displayRegistered(){
    result.innerHTML = `<div class="registered">
                <h3>Successfully registered the following:</h3>
                <ul style="list-style-type:none"><li>Name: ${fullName}</li>
                <li>Subject: ${subject}</li>
                <li>Email: ${email}</li>
                <li>Address: ${address}</li></ul>
                <div class="register-links"><a href="contact.html">Edit</a>
                <a href="/">Home</a></div>
                </div>`;
}
displayRegistered();