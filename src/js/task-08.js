const formElem = document.querySelector('.login-form');
formElem.addEventListener('submit', formSubmitFinisher);

function formSubmitFinisher(evnt) {

const { email, password } = evnt.currentTarget.elements;
evnt.preventDefault();

if (!email.value.length || !password.value.length) {
return alert('Всі поля повинні бути заповнені')
}

const data = {
    email: email.value,
    password: password.value,
};

console.log('data', data);
evnt.currentTarget.reset();

}