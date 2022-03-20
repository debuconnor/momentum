const nameForm = document.getElementById("nameForm");
const nameInput = nameForm.querySelector("input");
const usernameEl = document.getElementById("username");
const KEY_USERNAME = 'username';
let username;

function onNameFormSubmit(){
    localStorage.setItem(KEY_USERNAME, nameInput.value);
}

function loadUser(){
    const currentHour = new Date().getHours();
    let text = "Have a good day !"
    username = localStorage.getItem(KEY_USERNAME);

    if(currentHour >= 6 && currentHour < 12){
        text = "Don't forget eating breakfast!";
    }
    else if(currentHour >= 12 && currentHour < 12){
        text = "Enjoy your lunch!"
    }
    else if(currentHour >= 13 && currentHour < 19){
        text = "Have a good day!"
    }
    else if(currentHour >= 19 && currentHour < 21){
        text = "Hope you had a great day."
    }
    else if(currentHour >= 21 && currentHour < 6){
        text = "Sweet dreams."
    }

    usernameEl.innerText = `${username}, ${text}`;
}