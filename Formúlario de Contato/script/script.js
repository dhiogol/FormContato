document.getElementById('contact-form').addEventListener('submit', function(event) {
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var message = document.getElementById('message');
    var nameError = document.getElementById('name-error');
    var emailError = document.getElementById('email-error');
    var messageError = document.getElementById('message-error');
    var isValid = true;

    
    if (name.value.trim() === '') {
        nameError.textContent = 'Por favor, preencha seu nome.';
        name.style.borderColor = 'red';
        isValid = false;
    } else {
        nameError.textContent = '';
        name.style.borderColor = '';
    }

    
    if (email.value.trim() === '' || !isValidEmail(email.value.trim())) {
        emailError.textContent = 'Por favor, insira um email válido.';
        email.style.borderColor = 'red';
        isValid = false;
    } else {
        emailError.textContent = '';
        email.style.borderColor = '';
    }

    
    if (message.value.trim() === '') {
        messageError.textContent = 'Por favor, escreva sua mensagem.';
        message.style.borderColor = 'red';
        isValid = false;
    } else {
        messageError.textContent = '';
        message.style.borderColor = '';
    }

    
    if (isValid) {
        alert('Mensagem enviada com sucesso!');
        name.value = '';
        email.value = '';
        message.value = '';
    }

    event.preventDefault();
});


function isValidEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
