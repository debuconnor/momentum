const todoForm = document.getElementById("todoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todoList");
const KEY_TODOS = 'todos';
let todos = [];

function loadTodoList(){
    const _todos = JSON.parse(localStorage.getItem(KEY_TODOS));
    if(_todos === null) return;

    todos = _todos;
    todoList.innerHTML = '';
    todos.forEach(el => {
        const list = document.createElement('li');
        const div = document.createElement('div');
        const span = document.createElement('span');
        const delBtn = document.createElement('button');
    
        div.className = "todoText";
        div.appendChild(span);
        span.innerText = el.todo;
        delBtn.classList.add("gg-close-r");
        delBtn.classList.add("removeButton");
        delBtn.addEventListener("click", delTodoList);
        list.id = el.id;
        list.appendChild(div);
        list.appendChild(delBtn);
        todoList.appendChild(list);
    });
}

function delTodoList(e){
    const list = e.target.parentElement;
    const id = parseInt(list.id);

    todos = todos.filter(todo => todo.id !== id);
    localStorage.setItem(KEY_TODOS, JSON.stringify(todos));
    list.remove();
}

function saveTodoList(todo){
    const obj = {"id": Date.now(), "todo": todo};
    todos.push(obj);
    localStorage.setItem(KEY_TODOS, JSON.stringify(todos));
}

function addTodoList(todo){
    saveTodoList(todo);
    loadTodoList();
}

function onTodoFormSubmit(e){
    e.preventDefault();
    const todo = todoInput.value;
    addTodoList(todo);
    todoInput.value = '';
}

todoForm.addEventListener("submit", onTodoFormSubmit);