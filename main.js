loadUser();
loadTodoList();
setGreetings();
nameForm.addEventListener("submit", onNameFormSubmit);
todoForm.addEventListener("submit", onTodoFormSubmit);

if(username !== null){
    const HIDDEN_CLASSNAME = 'hidden';
    nameForm.parentElement.classList.add(HIDDEN_CLASSNAME);
    todoForm.parentElement.parentElement.classList.remove(HIDDEN_CLASSNAME);
}