function openForm() {
    document.getElementById("Form").style.display = "block";
    document.body.insertAdjacentHTML('beforeend', '<div class="overlay" onclick="closeForm()"></div>');
    document.querySelector('.overlay').style.display = 'block';
}

function closeForm() {
    document.getElementById("Form").style.display = "none";
    document.querySelector('.overlay').remove();
}

function submitForm(event) {
    emailjs.sendForm('service_d70f80r', 'template_zgl9ee2', '#myForm')
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
        console.log('FAILED...', error);
    });
    closeForm();
}

document.getElementById("OpenFormBtn").addEventListener("click", openForm);