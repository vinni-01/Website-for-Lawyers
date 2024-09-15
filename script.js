function openForm() {
    document.getElementById("OpenFormBtn").style.backgroundColor = "black";
    document.getElementById("OpenFormBtn").style.color = "white";
    setTimeout(function() {
        document.getElementById("OpenFormBtn").style.backgroundColor = "white";
        document.getElementById("OpenFormBtn").style.color = "black";
    }, 100);
    document.getElementById("Form").style.display = "block";
    document.body.insertAdjacentHTML('beforeend', '<div class="overlay" onclick="closeForm()"></div>');
    document.querySelector('.overlay').style.display = 'block';
}

function closeForm() {
    document.getElementById("Form").style.display = "none";
    document.querySelector('.overlay').remove();
}

function submitForm(event) {
    event.preventDefault();
    const check = document.getElementById('agree');
    if(!check.checked) {
        console.log("Not checked!");
        ShowCopyNotification(3);
        return;
    }
    ShowCopyNotification(2);
    closeForm();
    console.log("Checked");
    emailjs.sendForm('service_d70f80r', 'template_zgl9ee2', '#myForm')
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
        console.log('FAILED...', error);
    });
}

document.getElementById("OpenFormBtn").addEventListener("click", openForm);


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if( document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ) {
        document.getElementById("navbar").style.top = "0";
        document.getElementById("nav_txt").style.display = "none";
    } else {
        document.getElementById("navbar").style.top = "0px";
        document.getElementById("nav_txt").style.display = "flex";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const button1 = document.getElementById("About_Us_Btn")
    const button2 = document.getElementById("Adress_Btn")

    button1.addEventListener('click', function() { 
        document.getElementById("About_Us_Btn").style.backgroundColor = "black";
        document.getElementById("About_Us_Btn").style.color = "white";
        setTimeout(function() {
            document.getElementById("About_Us_Btn").style.backgroundColor = "white";
            document.getElementById("About_Us_Btn").style.color = "black";
        }, 100);
    });
    button2.addEventListener('click', function() { 
        document.getElementById("Adress_Btn").style.backgroundColor = "black";
        document.getElementById("Adress_Btn").style.color = "white";
        setTimeout(function() {
            document.getElementById("Adress_Btn").style.backgroundColor = "white";
            document.getElementById("Adress_Btn").style.color = "black";
        }, 100);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const phoneToCopy = document.getElementById('phone_copy');
    const mailToCopy = document.getElementById('mail_copy');
    const adressToCopy = document.getElementById('adress_copy');

    phoneToCopy.addEventListener('click', function() {
        copyTextToClickboard(phoneToCopy.innerText);
    });
    mailToCopy.addEventListener('click', function() {
        copyTextToClickboard(mailToCopy.innerText);
    });
    adressToCopy.addEventListener('click', function() {
        copyTextToClickboard(adressToCopy.innerText);
    });
});

function copyTextToClickboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;

    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';

    document.body.appendChild(textarea);

    textarea.select();
    textarea.setSelectionRange(0, 99999);

    document.execCommand('copy');

    document.body.removeChild(textarea);

    ShowCopyNotification(1);
}

function ShowCopyNotification(x) {
    console.log(x);
    if(x==1){
        const notification = document.getElementById('copyNot')
        notification.classList.add('show');
        setTimeout(function() {
            notification.classList.remove('show');
        }, 2000);
    }
    else if (x == 2){
        const notification = document.getElementById('sendNot')
        notification.classList.add('show');
        setTimeout(function() {
            notification.classList.remove('show');
        }, 2000);
    }
    else {
        const notification = document.getElementById('notSendNot')
        notification.classList.add('show');
        setTimeout(function() {
            notification.classList.remove('show');
        }, 2000);
    }
}