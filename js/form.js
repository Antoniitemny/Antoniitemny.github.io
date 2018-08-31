const myForm = document.querySelector('#order-form');
const successM = document.querySelector('#success');
const error = document.querySelector('#error');
const send = document.querySelector('#send');

send.addEventListener('click', function(event) {
    event.preventDefault();

     if (validateForm(myForm)) {

        const data = {
            name: myForm.elements.name.value,
            phone:myForm.elements.phone.value,
            comment:myForm.elements.comment.value,
            to: 'AntoniiTemny@yandex.ru'
        }
        
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
        xhr.send(JSON.stringify(data));
//        xhr.addEventListener('load', () => {
//            console.log(xhr.response);
        });//Ни хрена не понял. Что-то непонятное с ответом от сервера. Статус запроса 302, ответ от сервера null. Изначально вообще cors ругался.
//        successM.classList.add('status-popup_visible');
     }

});

function validateForm(form) {
    let valid = true;

    if(!validateField(form.elements.name)) {
        valid = false;
    }

    if(!validateField(form.elements.phone)) {
        valid = false;
    }

    if(!validateField(form.elements.street)) {
        valid = false;
    }

    if(!validateField(form.elements.home)) {
        valid = false;
    }

    if(!validateField(form.elements.appt)) {
        valid = false;
    }

    return valid; 
}

function validateField(field) {
    if (!field.checkValidity()) {
        field.nextElementSibling.textContent = field.validationMessage;

        return false;
    }   else {
        field.nextElementSibling.textContent = '';

        return true;
    }
}