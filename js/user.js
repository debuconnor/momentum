const nameForm = document.getElementById("nameForm");
const nameInput = nameForm.querySelector("input");
const KEY_USERNAME = 'username';
let username;

function onNameFormSubmit(){
    localStorage.setItem(KEY_USERNAME, nameInput.value);
}

function loadUser(){
    username = localStorage.getItem(KEY_USERNAME);
}