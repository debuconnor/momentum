const navEl                 = document.querySelector("nav")
const navClockEl            = navEl.querySelector(".nav-clock");
const navTodoEl             = navEl.querySelector(".nav-todo");
const navCalendarEl         = navEl.querySelector(".nav-calendar");
const selectorEl            = document.getElementById("selector");
const todoBoxEl             = document.querySelector(".todoBox");
const clockBoxEl            = document.querySelector(".clockBox");
const calendarBoxEl         = document.querySelector(".calendarBox");
const containerEl           = document.querySelector(".main.container");
const HIDDEN_CLASSNAME      = 'hidden';

function moveSelector(positionX){
    selectorEl.style.left = `${positionX}px`;
}

function onElementMouseover(e){
    const parentLeft = navEl.getBoundingClientRect().left;
    const positionLeft = e.target.getBoundingClientRect().left;
    let adjustX = 8;
    
    if(e.target.className.indexOf('nav-todo') !== -1){
        adjustX = 4;
    }

    moveSelector(positionLeft - parentLeft + adjustX);
}

function onElementClick(e){
    const activeNav = e.target.className;

    containerEl.style.height = '200px'
    setTimeout(() => {
        if(activeNav.indexOf('nav-clock') !== -1){
            todoBoxEl.classList.add(HIDDEN_CLASSNAME);
            clockBoxEl.classList.remove(HIDDEN_CLASSNAME);
            calendarBoxEl.classList.add(HIDDEN_CLASSNAME);
        }
        else if(activeNav.indexOf('nav-calendar') !== -1){
            todoBoxEl.classList.add(HIDDEN_CLASSNAME);
            clockBoxEl.classList.add(HIDDEN_CLASSNAME);
            calendarBoxEl.classList.remove(HIDDEN_CLASSNAME);
        }
        else if(activeNav.indexOf('nav-todo') !== -1){
            todoBoxEl.classList.remove(HIDDEN_CLASSNAME);
            clockBoxEl.classList.add(HIDDEN_CLASSNAME);
            calendarBoxEl.classList.add(HIDDEN_CLASSNAME);
        }
        containerEl.style.height = '400px';
    }, 300);
}

navClockEl.addEventListener("mouseover", onElementMouseover);
navCalendarEl.addEventListener("mouseover", onElementMouseover);
navTodoEl.addEventListener("mouseover", onElementMouseover);
navClockEl.addEventListener("click", onElementClick);
navCalendarEl.addEventListener("click", onElementClick);
navTodoEl.addEventListener("click", onElementClick);