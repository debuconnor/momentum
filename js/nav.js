const navEl                 = document.querySelector("nav")
const navClockEl            = navEl.querySelector(".nav-clock");
const navTodoEl             = navEl.querySelector(".nav-todo");
const selectorEl            = document.getElementById("selector");
const todoBoxEl             = document.querySelector(".todoBox");
const clockBoxEl            = document.querySelector(".clockBox");
const containerEl           = document.querySelector(".main.container");
const HIDDEN_CLASSNAME      = 'hidden';

function moveSelector(positionX){
    selectorEl.style.left = `${positionX}px`;
}

function onElementMouseover(e){
    const parentLeft = navEl.getBoundingClientRect().left;
    const positionLeft = e.target.getBoundingClientRect().left;
    
    moveSelector(positionLeft - parentLeft);
}

function onElementClick(e){
    const activeNav = e.target.className;

    containerEl.style.height = '200px'
    setTimeout(() => {
        if(activeNav.indexOf('nav-clock') !== -1){
            todoBoxEl.classList.add(HIDDEN_CLASSNAME);
            clockBoxEl.classList.remove(HIDDEN_CLASSNAME);
        }
        else if(activeNav.indexOf('nav-todo') !== -1){
            todoBoxEl.classList.remove(HIDDEN_CLASSNAME);
            clockBoxEl.classList.add(HIDDEN_CLASSNAME);
        }
        containerEl.style.height = '400px';
    }, 300);
}

navClockEl.addEventListener("mouseover", onElementMouseover);
navTodoEl.addEventListener("mouseover", onElementMouseover);
navClockEl.addEventListener("click", onElementClick);
navTodoEl.addEventListener("click", onElementClick);