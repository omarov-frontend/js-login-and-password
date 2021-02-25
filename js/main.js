const loginInput = document.querySelector('#login');
const passwordInput = document.querySelector('#password');
const button = document.querySelector('#button');

button.addEventListener('click', function() {
    if(loginInput.value === 'Ivan' && passwordInput.value === '334455') {
        alert('Добро пожаловать!');
    } else if(loginInput.value === 'Alex' && passwordInput.value === '777') {
        alert('Добро пожаловать!');
    } else if(loginInput.value === 'Petr' && passwordInput.value === 'p1234') {
        alert('Добро пожаловать!');
    } else {
        alert('Ошибка входа!');
    }

    loginInput.value = '';
    passwordInput.value = '';
});
