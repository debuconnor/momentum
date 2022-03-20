loadUser();
loadTodoList();
setGreetings();
setBackgroundImg();
nameForm.addEventListener("submit", onNameFormSubmit);
todoForm.addEventListener("submit", onTodoFormSubmit);

if(username !== null){
    const HIDDEN_CLASSNAME = 'hidden';
    nameForm.parentElement.classList.add(HIDDEN_CLASSNAME);
    todoForm.parentElement.parentElement.classList.remove(HIDDEN_CLASSNAME);
    navEl.classList.remove(HIDDEN_CLASSNAME);
}